

let navbar = document.querySelectorAll(".nav-link");
// target all navitems


let navCollase = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function (a){
    a.addEventListener("click", function (){

        navCollase.classList.remove("show");

    
    })
})






