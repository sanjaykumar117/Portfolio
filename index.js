// Smooth scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Typing animation
const textArray = ["A Passionate Full Stack Developer", "Building Web Solutions", "Crafting Beautiful UIs"];
let textIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFadeIn);
checkFadeIn();

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    this.reset();
});

