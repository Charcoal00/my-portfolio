const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenContainers = document.querySelectorAll('hidden');
hiddenContainers.forEach((el) => observer.observe(el));