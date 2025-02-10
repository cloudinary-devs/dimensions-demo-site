runDimensions();

function runDimensions() {
    const d8sApi = window._d8sApi = window.initDimensions({
        cloudName: "d8s-demo-site",
        viewers: [window.initDimensions.VIEWERS.THREE_D],
        imageViewer: {
            params: {},
            className: "my-ecomm-image",
        },
        threeDViewer: {
            viewer: {
                controls: {
                    position: "center",
                },

                rotation: {
                    offOnInteraction: true,
                },

                showLoadingProgress: true,

                renderer: {
                    debug: {
                        // printStructure: true,
                    },
                },

                // appUrl: "http://localhost:9000/",
            },
        },
        // baseUrl: "https://res.cloudinary.com/",
        report: false,
    });

    const unregister = d8sApi?.on((event, ...args) => {
        const data = args[0];
        if (data?.type === "MODEL_LOADED") {
            document.getElementById("three-d-container")?.classList.add("show");
        }
    });
    //unregister(); call to remove listener
}

function zoom(e, number) {
    e.preventDefault();
    const container = e.currentTarget;
    let offsetX, offsetY;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches?.[0].clientX - container.getBoundingClientRect().left;
    e.offsetY ? offsetY = e.offsetY : offsetY = e.touches?.[0].clientY - container.getBoundingClientRect().top;
    const x = Math.min(Math.max(offsetX / container.offsetWidth * 100, 0), 100);
    const y = Math.min(Math.max(offsetY / container.offsetHeight * 100, 0), 100);
    container.style.backgroundPosition = x + "% " + y + "%";
}

function setZoomImage(e, number) {
    const container = e.currentTarget;
    const zoomUrl = window.getNewPipelineZoomUrl(number);
    container.style.backgroundImage = `url(${zoomUrl})`;
    container.classList.add("hide-img");
}

function removeZoomImage(e) {
    const container = e.currentTarget;
    container.style.backgroundImage = "none";
    container.classList.remove("hide-img");
}

function playVideo() {
    const player = document.getElementById("video-player");
    player.play();
}