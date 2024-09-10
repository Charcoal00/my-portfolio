//the rest
const menuBtn = document.getElementById("menu-btn");
const boddy = document.querySelector("body");
const navcontain = document.querySelector(".navcontainer2");
menuBtn.addEventListener("click", (event) => {
    document.querySelector(".navcontainer3").classList.toggle("open");
    document.querySelector(".navcontainer2").classList.toggle("open-cont");
    boddy.classList.toggle("bhbh");
    event.stopPropagation();
});
document.addEventListener("click", (event) => {
    if (!navcontain.contains(event.target)) {
        setTimeout(function () {
            document.querySelector(".navcontainer3").classList.remove("open");
            document
                .querySelector(".navcontainer2")
                .classList.remove("open-cont");

            boddy.classList.remove("bhbh");
        }, 100);
    }
});

const navLink = document.querySelectorAll(".link-link a");

navLink.forEach((n) =>
    n.addEventListener("click", () => {
        setTimeout(function () {
            document.querySelector(".navcontainer3").classList.remove("open");
            document
                .querySelector(".navcontainer2")
                .classList.remove("open-cont");

            boddy.classList.remove("bhbh");
        }, 500);
    })
);
function linkAction() {
    navLink.forEach((n) => n.classList.remove("activeo"));
    this.classList.add("activeo");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// changes color when we scroll into view
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 110,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".link-link a[href*=" + sectionId + "]"
            );
        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionsClass.classList.add("activeo");
        } else {
            sectionsClass.classList.remove("activeo");
        }
    });
};
window.addEventListener("scroll", scrollActive);
