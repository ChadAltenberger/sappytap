export const globalVariables = {
    pageId: document.querySelector("body").getAttribute("id"),
    path: null,
    html: String.raw,
    parseData: (data) => {
        // Return a Promise which contains Papa.parse method and will either resolve with parsed data or reject with an error
        return new Promise((resolve, reject) => {
            Papa.parse(data, {
                download: true,
                header: true,
                complete: resolve, // If completes with no errors, Promise will resolve and any subsequent code will be executed
                error: reject, // If any error with parsing, Promise will reject and no subsequent code will be executed
            });
        });
    },
    fadeInSections: () => {
        const fadeInSections = document.querySelectorAll(".fade-in");

        fadeInSections.forEach((section) => {
            section.style.opacity = "1";
        });
    },
};
