

//the rest
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
    document.querySelector(".navcontainer3").classList.toggle("open");
    document.querySelector(".navcontainer2").classList.toggle("open-cont");
});

const navLink = document.querySelectorAll(".link-link a");

navLink.forEach((n) =>
    n.addEventListener("click", () => {
        setTimeout(function () {
            document.querySelector(".navcontainer3").classList.remove("open");
            document
                .querySelector(".navcontainer2")
                .classList.remove("open-cont");
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


