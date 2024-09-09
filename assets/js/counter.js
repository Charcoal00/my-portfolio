window.addEventListener("scroll", function () {
    const counters = document.querySelectorAll(".percentage-counter");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function countTo(counter, maxValue) {
        let startValue = 0;
        const percentageDisplay = counter.querySelector(".percentage");
        const progressBar = counter.querySelector(".progress-bar");

        const interval = setInterval(() => {
            if (startValue <= maxValue) {
                // Update the text content and the progress bar width simultaneously
                percentageDisplay.textContent = startValue + "%";
                progressBar.style.width = startValue + "%"; // Set the width in sync with the percentage
                startValue++;
            } else {
                clearInterval(interval);
            }
        }, 30); // Adjust speed here
    }

    counters.forEach((counter, index) => {
        const targetValue = parseInt(counter.getAttribute("data-target"), 10);
        this.setTimeout(function () {
            // Only run the count if it hasn't already been counted
            if (
                isElementInViewport(counter) &&
                !counter.classList.contains("counted")
            ) {
                setTimeout(() => {
                    countTo(counter, targetValue);
                    counter.classList.add("counted"); // Mark this counter as counted
                }, index * 50); // Delay based on the index
            }
        }, 2000);
    });
});

// type
const strings = ["Web Developer.", "Web Designer.", "Software Engineer."];
const typingSpeed = 100;
const pauseBetween = 2000;
const eraseSpeed = 70;
const delayBeforeNextString = 2500;
let index = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("nmn");
const cursorElement = document.querySelector("nnn");

function type() {
    const currentString = strings[index];

    if (!isDeleting && charIndex < currentString.length) {
        textElement.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        textElement.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, eraseSpeed);
    } else if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => {
            isDeleting = true;
            setTimeout(type, eraseSpeed);
        }, delayBeforeNextString);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % strings.length;
        setTimeout(type, pauseBetween);
    }
}

type();
