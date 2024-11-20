const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const sections = document.querySelectorAll('.example');

const fadeInOnScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);

fadeInOnScroll(); // Check immediately in case content is already in view

// JavaScript to apply slide-down and fade in animation on page load
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements you want to slide down
    const slideDownElements = document.querySelectorAll(".slide-down-on-load");

    // Apply animation class after a short delay
    slideDownElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("slide-down");
        }, index * 200); // Staggered animation
    });

    // Select all elements to fade in
    const fadeInElements = document.querySelectorAll(".fade-in-on-load");

    // Apply fade-in class after a slight delay
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("fade-in");
        }, index * 200); // Staggered effect (optional)
    });
});