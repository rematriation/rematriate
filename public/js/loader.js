(() => {
  // <stdin>
  var gsapPath = "/js/lib/gsap/gsap.min.js";
  var scrollTrigPath = "/js/lib/gsap/ScrollTrigger.min.js";
  var drawSVGPath = "/js/lib/gsap/DrawSVGPlugin.min.js";
  var splittingPath = "/js/lib/gsap/splitting.min.js";
  var resourceList = [
    gsapPath,
    scrollTrigPath,
    drawSVGPath,
    splittingPath
  ];
  var loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = url;
      script.addEventListener("load", () => {
        resolve(true);
      });
      script.addEventListener("error", (ev) => {
        reject({
          status: false,
          message: "Failed to load the script"
        });
      });
      document.body.appendChild(script);
    });
  };
  var waterfall = (promises) => {
    return promises.reduce(
      function(p, c) {
        return p.then(() => {
          return c.then((result) => {
            return true;
          });
        });
      },
      // The initial value passed to the reduce method
      Promise.resolve([])
    );
  };
  var loadScriptsInOrder = (arrayOfJs) => {
    const promises = arrayOfJs.map((url) => {
      return loadScript(url);
    });
    return waterfall(promises);
  };
  loadScriptsInOrder(resourceList).then(() => {
    console.log("ready");
    const landingScriptEle = document.createElement("script");
    landingScriptEle.type = "text/javascript";
    landingScriptEle.src = "/js/landing-cards.js";
    document.body.appendChild(landingScriptEle);
  }).catch((err) => {
    async function* applyNoJsPanelStyles() {
      let panels = document.querySelectorAll(".panel");
      for (let i = 0; i < panels.length; i++) yield panels[i];
    }
    (async () => {
      for await (const panel of applyNoJsPanelStyles()) {
        panel.style.cssText = "--progress: 0.5 !important;opacity: 1;";
      }
    })();
    async function* applyNoJsH2Styles() {
      let h2Headings = document.querySelectorAll(".panel h2");
      for (let i = 0; i < h2Headings.length; i++) yield h2Headings[i];
    }
    (async () => {
      for await (const panelH2 of applyNoJsH2Styles()) {
        panelH2.style.cssText = "color: var(--primaryColor);";
      }
    })();
    let mainWrap = document.querySelector("#landing-cards-wrap");
    mainWrap.style.cssText = "transform: translateX(0);";
  });
})();
