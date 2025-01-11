let visited = localStorage.getItem("hasVisited");
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");
/*
document.addEventListener("DOMContentLoaded", function () {
    if (visited == "yes") {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    } else {
        // Show loading screen on homepage
        localStorage.setItem("hasVisited", "yes");
        setTimeout(() => {

    
            loadingScreen.style.display = "none";
            mainContent.style.display = "block";
        }, 7000); // Adjust the duration as needed

        // Show spinner when navigating to other pages
    }
});
*/