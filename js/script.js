/* ==========================================================
   NAVIGATION
========================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ==========================================================
   MENU MOBILE
========================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* ==========================================================
   FILTRES DES PROJETS
========================================================== */

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        const category = filter.dataset.filter;


        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");


        projects.forEach(project => {

            const projectCategory = project.dataset.category;

            if (
                category === "all" ||
                category === projectCategory
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* ==========================================================
   APPARITION DES ÉLÉMENTS AU SCROLL
========================================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .education-step"
    )
    .forEach(element => {

        observer.observe(element);

    });
