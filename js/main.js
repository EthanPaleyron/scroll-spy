// Hello World


// Scroll nav
const header = document.querySelector("header");
let scrollValue = 0;

document.addEventListener("scroll", () => {
    let top  = document.documentElement.scrollTop;
    if (scrollValue < top) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    scrollValue = top;
})

// IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform: "transcaleX(-100px)", opacity: 0},
                {transform: "transcaleX(0px)", opacity: 1},
            ], {
                duration: 2000,
            })
        }
    }
}, {
    rootMargin: "50px 50px 50px 50px",
})

observer.observe(document.querySelector(".scrollspy"));
const section = document.querySelectorAll("section");
observer.observe = document.querySelectorAll("a");