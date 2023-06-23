const observer = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform: "transcaleX(-100px)", opacity: 0},
                {transform: "transcaleX(0px)", opacity: 1},
            ], {
                duration: 2000
            })
        }
    }
}, {
    rootMargin: "50px 50px 50px 50px"
})

observer.observe(document.querySelector(".scrollspy1"));
observer.observe(document.querySelector(".scrollspy2"));