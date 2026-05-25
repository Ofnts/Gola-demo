document.addEventListener("DOMContentLoaded", () => {
    const basePath = "./";
    const logos = [
        "Richmont.jpeg", 
        "NDB.jpg", 
        "Growmore.jpeg",
        "BITC.jfif",
        "Arona.jpg",
        "foods-botswana.jpg", 
        "Mpatise.jfif", 
        "BSE.jfif",
        "Buan.jpg",
        "NARDI.png",
        "Tqs.jpg",
        "QIB.jfif",
        "Hitech.jpg",
        "DroneLabs.png"
    ];

    const row1 = document.getElementById("carouselRow1");
    const row2 = document.getElementById("carouselRow2");

    // Function to generate image tags
    function createLogoElements(container, logoList) {
        logoList.forEach(logoName => {
            const img = document.createElement("img");
            img.src = `${basePath}${logoName}`;
            img.alt = logoName.split('.')[0] + "Logo";
            img.className = "carousel-logo";
            container.appendChild(img);
        });
    }

    if (row1 && row2) {
        // Row 1: Inject original list + Clone list for seamless loop
        createLogoElements(row1, logos);
        createLogoElements(row1, logos);

        // Row 2: Mix up the order for variety, then Inject original + Clone
        const mixedLogos = [...logos].reverse();
        createLogoElements(row2, mixedLogos);
        createLogoElements(row2, mixedLogos);
    }
});
