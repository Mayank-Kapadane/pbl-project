

let navbar = document.querySelectorAll(".nav-link");
// target all navitems


let navCollase = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function (a){
    a.addEventListener("click", function (){

        navCollase.classList.remove("show");

    
    })
})








document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission (you can replace this with an actual API call)
    const responseMessage = document.getElementById("response-message");
    responseMessage.innerHTML = `Thank you, ${name}! Your message has been sent.`;

    // Reset the form
    this.reset();
});
