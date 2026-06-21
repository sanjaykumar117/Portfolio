"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Canvas3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Save container ref to a variable for cleanup
    const container = containerRef.current;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 15;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x2563eb, 2.5); // Primary Blue
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x06b6d4, 2); // Accent Cyan
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x6366f1, 3, 30); // Secondary Indigo
    pointLight.position.set(0, -2, 4);
    scene.add(pointLight);

    // 5. Create Floating Glassmorphic Objects
    const geometries = [
      new THREE.TorusGeometry(2, 0.6, 16, 100),
      new THREE.OctahedronGeometry(1.8),
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.TorusKnotGeometry(0.8, 0.25, 100, 16),
    ];

    // Translucent glass materials
    const materials = geometries.map((_, index) => {
      return new THREE.MeshPhysicalMaterial({
        color: index === 0 ? 0xffffff : index === 1 ? 0xeef2ff : index === 2 ? 0xecfeff : 0xe0f2fe,
        transparent: true,
        opacity: 0.35,
        roughness: 0.2,
        metalness: 0.1,
        transmission: 0.6, // Glass transparency
        thickness: 1.5,    // Refraction thickness
        ior: 1.5,          // Index of refraction
      });
    });

    const meshes: THREE.Mesh[] = [];
    
    // Position elements in different quadrants
    const positions = [
      new THREE.Vector3(-6, 4, -2),  // Top Left Torus
      new THREE.Vector3(7, -3, -1),   // Bottom Right Octahedron
      new THREE.Vector3(5, 4, -4),    // Top Right Sphere
      new THREE.Vector3(-7, -4, 0),  // Bottom Left TorusKnot
    ];

    geometries.forEach((geom, i) => {
      const mesh = new THREE.Mesh(geom, materials[i]);
      mesh.position.copy(positions[i]);
      scene.add(mesh);
      meshes.push(mesh);
    });

    // 6. Particles system
    const particlesCount = 100;
    const particlesGeometry = new THREE.BufferGeometry();
    const positionsArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Spread particles around
      positionsArray[i] = (Math.random() - 0.5) * 35;     // X
      positionsArray[i + 1] = (Math.random() - 0.5) * 20; // Y
      positionsArray[i + 2] = (Math.random() - 0.5) * 10; // Z
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionsArray, 3)
    );

    // Subtle blue/cyan glowing particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x2563eb,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // 7. Interaction and Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 8. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tracking (lerp)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Parallax effect on camera
      camera.position.x = targetX * 1.5;
      camera.position.y = -targetY * 1.5;
      camera.lookAt(scene.position);

      // Animate glass shapes
      meshes.forEach((mesh, index) => {
        // Slow rotations
        mesh.rotation.x = elapsedTime * 0.15 + index;
        mesh.rotation.y = elapsedTime * 0.12 - index;

        // Gentle floating (sine wave)
        const floatOffset = Math.sin(elapsedTime * 0.5 + index * 2) * 0.4;
        mesh.position.y = positions[index].y + floatOffset;

        // Mouse displacement effect
        mesh.position.x = positions[index].x + targetX * 0.8;
      });

      // Animate particles
      const positionsAttr = particlesGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particlesCount; i++) {
        const idx = i * 3;
        // Float particles upwards slowly
        positionsAttr.array[idx + 1] += 0.008;
        // Recirculate if particle goes off top edge
        if (positionsAttr.array[idx + 1] > 10) {
          positionsAttr.array[idx + 1] = -10;
        }
        // Subtle drift based on mouse
        positionsAttr.array[idx] += Math.sin(elapsedTime + i) * 0.002 + targetX * 0.001;
      }
      positionsAttr.needsUpdate = true;

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    const requestRef = { current: requestAnimationFrame(animate) };

    // 9. Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 10. Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(requestRef.current);
      
      // Dispose materials & geometries
      geometries.forEach((geom) => geom.dispose());
      materials.forEach((mat) => mat.dispose());
      particlesGeometry.dispose();
      particlesMaterial.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      id="three-canvas"
    />
  );
}
