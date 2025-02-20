document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navbar Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Mobile Menu Toggle
    document.getElementById("menu-btn").addEventListener("click", function () {
        document.getElementById("nav-menu").classList.toggle("hidden");
    });

    // Typewriter Effect
    const words = ["Web Developer", "AI/ML Enthusiast", "Innovator"];
    let i = 0, j = 0, isDeleting = false;

    function typeEffect() {
        let text = words[i].substring(0, j);
        document.querySelector(".typewriter").textContent = text;

        if (!isDeleting && j === words[i].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            j += isDeleting ? -1 : 1;
            setTimeout(typeEffect, isDeleting ? 100 : 150);
        }
    }
    typeEffect();
});
