/* =========================================
   DIGITAL INK — JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
});


/* Close mobile menu when a link is clicked */

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
    });
});


/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        /* Close other FAQ items */

        faqItems.forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;
            }

        });


        /* Open or close selected item */

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

    });

});




/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 8, 8, 0.97)";
    } else {
        header.style.background = "rgba(8, 8, 8, 0.88)";
    }

});


/* =========================================
   SIMPLE REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section-header, .intro-grid, .about-grid, .style-card, .portfolio-item, .service-row, .booking-grid, .faq-item"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});