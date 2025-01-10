document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    let body = document.body;
    let links = document.getElementsByTagName("a");

    // Load iFrames on demand & remove after modal is closed to reduce weight & smooth out transitions
    let cards = document.getElementsByClassName("inner");

    // Splitting();

    // Individual section scroll progress

    gsap.utils.toArray(".panel").forEach((section, index) => {
        gsap.to(this, {
            scrollTrigger: {
                trigger: section,
                start: "top 100%",
                end: "bottom 25%",
                scrub: 0,
                onUpdate: (self) => {
                    section.style.setProperty("--progress", self.progress);
                }
            }
        });
    });

    // Full page scroll progress

    gsap.to("body", {
        scrollTrigger: {
            trigger: "body",
            start: "top 100%",
            end: "50% 50%",
            scrub: 0,
            onUpdate: (self) => {
                body.style.setProperty("--progress", self.progress);
            }
        }
    });

    // Pull out the preloader
    const addLoadedClass = () => {
        body.classList.add("loaded")
    }

    if (document.readyState === 'loading') {
        // Loading hasn't finished yet
        document.addEventListener('DOMContentLoaded', addLoadedClass)
    } else {
        // `DOMContentLoaded` has already fired
        addLoadedClass()
    }


    // Set a delay on Scrolltrigger recalculation to accommodate element transition times
    const refresh = () => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 2500);
    }

    window.addEventListener("resize", refresh);
});
// gsap.registerPlugin(ScrollTrigger);

