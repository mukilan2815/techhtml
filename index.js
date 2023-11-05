    document.getElementById("aboutButton").addEventListener("click", function() {
        // Find the "About" section by its ID
        const aboutSection = document.getElementById("about");

    if (aboutSection) {
        // Scroll to the "About" section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    });
