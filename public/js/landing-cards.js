(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>"(exports) {
      gsap.registerPlugin(ScrollTrigger);
      var body = document.body;
      var links = document.getElementsByTagName("a");
      var cards = document.getElementsByClassName("inner");
      // Splitting();
      gsap.utils.toArray(".panel").forEach((section, index) => {
        gsap.to(exports, {
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
      var addLoadedClass = () => {
        body.classList.add("loaded");
      };
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addLoadedClass);
      } else {
        addLoadedClass();
      }
      var refresh = () => {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 2500);
      };
      window.addEventListener("resize", refresh);
    }
  });
  require_stdin();
})();
