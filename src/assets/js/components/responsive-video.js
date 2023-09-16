export default function responsiveVideo() {
    const videos = document.querySelectorAll(".video-src-swap");

    const setVidResponsive = () => {
        videos.forEach((video) => {
            const vid426 = video.getAttribute("data-vid-426");
            const vid640 = video.getAttribute("data-vid-640");
            const vid960 = video.getAttribute("data-vid-960");
            const vid1280 = video.getAttribute("data-vid-1280");
            if (window.innerWidth < 426) {
                video.setAttribute("src", vid426);
            } else if (window.innerWidth >= 426 && window.innerWidth < 640) {
                video.setAttribute("src", vid640);
            } else if (window.innerWidth >= 640 && window.innerWidth < 960) {
                video.setAttribute("src", vid960);
            } else if (window.innerWidth >= 960) {
                video.setAttribute("src", vid1280);
            }
        });
    };

    setVidResponsive();

    let oldWidth = window.innerWidth;

    window.addEventListener("resize", () => {
        if (window.innerWidth !== oldWidth) {
            setVidResponsive();
            oldWidth = window.innerWidth;
        }
    });
}
