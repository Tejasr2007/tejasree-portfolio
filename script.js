// ===============================
// TYPING ANIMATION
// ===============================

const typingElement = document.getElementById("typing");

const roles = [
    "Aspiring Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Java Programmer",
    "Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

function revealSections() {

    const reveals =
        document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight =
            window.innerHeight;

        const sectionTop =
            section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


// ===============================
// PARTICLES EFFECT
// ===============================

const particlesContainer =
    document.getElementById("particles");

for (let i = 0; i < 50; i++) {

    const particle =
        document.createElement("span");

    const size =
        Math.random() * 6 + 2;

    particle.style.position = "absolute";

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.borderRadius =
        "50%";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.background =
        Math.random() > 0.5
            ? "#8b5cf6"
            : "#ec4899";

    particle.style.opacity =
        Math.random();

    particle.style.animation =
        `floatParticle ${Math.random() * 10 + 10}s linear infinite`;

    particlesContainer.appendChild(
        particle
    );
}


// ===============================
// ADD FLOAT PARTICLE ANIMATION
// ===============================

const style =
document.createElement("style");

style.innerHTML = `
@keyframes floatParticle {

    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-80px);
    }

    100%{
        transform:translateY(0px);
    }
}
`;

document.head.appendChild(style);


// ===============================
// SKILL BAR ANIMATION
// ===============================

const skillBars =
    document.querySelectorAll(".progress");

function animateSkills() {

    skillBars.forEach(bar => {

        const width =
            bar.style.width;

        if (!bar.dataset.done) {

            bar.dataset.done = "true";

            bar.style.width = "0";

            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        }

    });
}

const skillSection =
    document.querySelector("#skills");

window.addEventListener("scroll", () => {

    const sectionTop =
        skillSection.getBoundingClientRect().top;

    if (sectionTop <
        window.innerHeight - 150) {

        animateSkills();
    }

});


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow =
            "none";
    }

});


// ===============================
// CURRENT YEAR FOOTER
// ===============================

const footer =
document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} PEDAGANGISETTY TEJASREE. All Rights Reserved.`;

}