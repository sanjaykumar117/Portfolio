"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  
  const followerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const onMouseEnter = () => {
      setIsHidden(false);
    };

    // Add event listeners to detect interactive hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
        document.body.classList.add("cursor-hover");
      } else {
        setIsHovered(false);
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Smooth spring effect for the follower circle
  useEffect(() => {
    const updateFollower = () => {
      const dx = position.x - followerRef.current.x;
      const dy = position.y - followerRef.current.y;
      
      // Speed factor (0.15 is smooth delay)
      followerRef.current.x += dx * 0.15;
      followerRef.current.y += dy * 0.15;
      
      setFollowerPosition({ x: followerRef.current.x, y: followerRef.current.y });
      requestRef.current = requestAnimationFrame(updateFollower);
    };

    requestRef.current = requestAnimationFrame(updateFollower);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position]);

  if (isHidden) return null;

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="custom-cursor-follower hidden md:block"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
        }}
      />
    </>
  );
}
