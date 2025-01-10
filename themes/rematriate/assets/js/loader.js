// Assign paths of JS files
const gsapPath = "/js/lib/gsap/gsap.min.js";
const scrollTrigPath = "/js/lib/gsap/ScrollTrigger.min.js";
const drawSVGPath = "/js/lib/gsap/DrawSVGPlugin.min.js";
const splittingPath = "/js/lib/gsap/splitting.min.js";

// Listify the paths in essential loading sequence
const resourceList = [
    gsapPath,
    scrollTrigPath,
    drawSVGPath,
    splittingPath
];

// Load a script from given `url`
const loadScript = (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.async = true;
        script.src = url;

        script.addEventListener('load', () => {
            // The script is loaded completely
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

// Perform all promises in the order
const waterfall = (promises) => {
    return promises.reduce(
        function(p, c) {
            // Waiting for `p` completed
            return p.then(() => {
                // and then `c`
                return c.then((result) => {
                    return true;
                });
            });
        },
        // The initial value passed to the reduce method
        Promise.resolve([])
    );
};

// Load an array of scripts in order
const loadScriptsInOrder = (arrayOfJs) => {
    const promises = arrayOfJs.map((url) => {
        return loadScript(url);
    });
    return waterfall(promises);
};

loadScriptsInOrder(resourceList)
    .then(() => {
        console.log('ready')
        // All scripts are loaded completely
        const landingScriptEle = document.createElement("script")
        landingScriptEle.type = "text/javascript"
        landingScriptEle.src = "/js/landing-cards.js"
        document.body.appendChild(landingScriptEle)
    })
    .catch(err => {

        //- let noScriptCSS = "<style type='text/css'>body #wrap {transform: translateX(0);}body #wrap .panel {--progress: 0.5 !important;}body #wrap .panel, body #wrap .panel::before {opacity: 1 }body #wrap .panel>a h2 {color: var(--primaryColor) !important }body #wrap .panel .thumb p {font-size: 18px;}body #loader, body #loader .wrap {display: none;}body #social svg {transform: translateY(0);}body #social a:last-of-type svg {transform: translateX(0px);}</style>"
        //- document.body.appendChild(noScriptCSS);

        //- Set --progress count for  the static page
        async function* applyNoJsPanelStyles() {
            let panels = document.querySelectorAll(".panel");

            for (let i = 0; i < panels.length; i++) yield panels[i];
        }
        //- Apply the styles per panel
        (async () => {
            for await (const panel of applyNoJsPanelStyles()) {
                panel.style.cssText = '--progress: 0.5 !important;opacity: 1;';
            }
        })();

        //- Set h2 font color the static page
        async function* applyNoJsH2Styles() {
            let h2Headings = document.querySelectorAll(".panel h2");
            for (let i = 0; i < h2Headings.length; i++) yield h2Headings[i];
        }
        //- Apply the styles per panel h2
        (async () => {
            for await (const panelH2 of applyNoJsH2Styles()) {
                panelH2.style.cssText = 'color: var(--primaryColor);';
            }
        })();

        let mainWrap = document.querySelector("#landing-cards-wrap");
        mainWrap.style.cssText = 'transform: translateX(0);';
    })