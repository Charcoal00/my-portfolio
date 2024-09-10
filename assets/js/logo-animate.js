document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".loader").classList.remove("expand");
        setTimeout(() => {
            document
                .querySelectorAll(".xx")
                .forEach((span) => span.classList.remove("mmk"));
        }, 600);
        setTimeout(() => {
            document.querySelector(".text-c").classList.remove("ffk");
        }, 800);
    }, 1000);
    setTimeout(() => {
        document.querySelector(".loader").classList.add("closex");
        document.querySelector(".container").style.display = "none";

        
        document.getElementById("main").style.display = "block";
        document.getElementById("headder").style.display = "block";
    }, 5000);

    setTimeout(() => {
        
        document.getElementById("main").style.opacity = "1";
        document.getElementById("headder").style.opacity = "1";

        const sr = ScrollReveal({
            origin: "bottom",
            distance: "70%",
            duration: 1000,
            delay: 500,
            easing: "cubic-bezier(0.5, 0, 0, 1)",
            // reset: true,
        });

        sr.reveal(".home-container-1", { delay: 0, origin: "left" });
        sr.reveal("#whatsapp", { distance: "40%" });

        sr.reveal(".home-nav4, .home-nav3, .home-nav2, .home-nav1", {
            origin: "left",
            interval: 400,
        });
        sr.reveal(".home_con-1", {
            delay: 1000,
            origin: "right",
        });

        sr.reveal(".about2 p , .about2 h2, .about1, .about > h2", {
            delay: 0,
            interval: 400,
        });
        sr.reveal(".skill-a p", {
            origin: "left",
        });
        sr.reveal(".about2 p", {
            origin: "right",
        });
        sr.reveal(".skill-a p, .skill-a h2 , .skills > h2", {
            delay: 0,
            interval: 400,
        });
        sr.reveal("#percentage1, #percentage3, input[type=text], textarea", {
            origin: "left",
        });
        sr.reveal("#percentage4, #percentage2, input[type=email]", {
            origin: "right",
            delay: 400,
        });
        sr.reveal("input[type=submit]", { origin: "bottom", delay: 1000 });

        sr.reveal(".work > h2", {
            delay: 0,
            origin: "left",
            distance: "20%",
        });
        sr.reveal(".workc-1, .a-a p", { interval: 200 });

        sr.reveal(".a-a p", { delay: 500 });

        sr.reveal(".footer h2", { delay: 0, distance: "20%" });

        sr.reveal(".footer-links", {
            delay: 500,
            distance: "20%",
            interval: 400,
        });
    }, 5300);
});
