
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Show loading screen on homepage
    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 2000); // Adjust the duration as needed

    // Show spinner when navigating to other pages
    const links = document.querySelectorAll("navbar-nav a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const url = this.href;

            // Show spinner
            document.getElementById("spinner").style.display = "block";

            // Simulate loading of the new page
            setTimeout(() => {
                window.location.href = url; // Navigate to the new page
            }, 1000); // Adjust the duration as needed
        });
    });
});
