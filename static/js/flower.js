const imageInput = document.getElementById("fileElem");
const imagePreview = document.getElementById("imagePreview");

const flower_info = {
    rice: [
        "Blast",
        "Rice blast disease, caused by the fungus Magnaporthe oryzae, is one of the most devastating diseases affecting rice globally. It can significantly reduce rice yields, impacting food security, especially in countries where rice is a staple food.",
        "rice blast disease poses a serious threat to rice production. Integrated disease management strategies, including cultural practices, resistant varieties, and possibly fungicide use, are essential to mitigate the impact of this disease and ensure sustainable rice production.",
    ],
    wheat: [
        "Rust ",
        "Leaf rust: Puccinia triticina",
        "Stem rust: Puccinia graminis",
        "Stripe rust: Puccinia striiformis",
    ],
    sugar_cane: [
        "Smut",
        "Black whip-like structures (sori) develop from infected parts.",
        "Reduced sugar content and yield.",
    ],
    cotton: [
        "Cotton Leaf Curl Virus",
        "Control whitefly populations using insecticides or natural predators.",
        "Use resistant varieties and crop rotation.",
        "Monitor and remove infected plants.",
    ],
    pulses: [
        "Ascochyta Blight",
        "Use resistant varieties.",
        "Apply fungicides at the onset of symptoms.",
        "Practice crop rotation and good sanitation.",
    ],
    ground_nut: [
        "Tikka Disease",
        "Plant resistant varieties of groundnut.",
        "Rotate with non-host crops like maize or sorghum.",
        "Apply fungicides during the early stages of infection.",
    ],
    potato: [
        "Late Blight",
        "Use resistant potato varieties.",
        "Maintain proper field drainage and avoid excessive moisture.",
        "Apply fungicides at early signs of disease and during favorable weather conditions.",
    ],
    tomato: [
        "Tomato Leaf Curl Virus",
        "Control whitefly populations using insecticides or natural predators.",
        "Plant resistant tomato varieties and practice crop rotation.",
        "Monitor fields regularly for early detection.",
    ],
    banana: [
        "Sigatoka Leaf Spot",
        "Control aphid populations through insecticides or natural predators.",
        "Remove and destroy infected plants to reduce spread.",
        "Use resistant varieties where available.",
    ],
    mango: [
        "Powdery Mildew",
        "Improve air circulation through proper pruning.",
        "Apply fungicides during flowering and early fruit development.",
        "Use resistant varieties when available.",
    ],
};

let reload = false;



imageInput.addEventListener("change", function (event) {
    // event.preventDefault();
    const result = document.getElementById("result");
    result.classList.remove("d-none");
    // if (reload) {
    //     location.reload();
    // }
    // reload = true;

    const file = event.target.files[0]; // Get the selected file

    if (file) {
        const reader = new FileReader(); // Create a FileReader to read the image file
        reader.onload = function (e) {
            imagePreview.src = e.target.result; // Set the image source to the file's data URL
            imagePreview.style.display = "block"; // Show the image preview
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }

    const fileName = imageInput.files[0].name;
    
    const food_name = fileName.slice(0, -4);
    console.log(food_name)
    






    let food_found = false;
    const disease_section = document.querySelector(".disease-section");
    


    const title = document.getElementById("result-title");

    // Finding food
    for (i of Object.keys(flower_info)) {
        if (food_name == i) {
            food_found = true;
            console.log(true)
        }
    }

    if (!food_found) {
        title.textContent = "Looks like, it is not Food!"
        let li = document.createElement("li");
        li.textContent = `Image not recognize.`;
        disease_section.appendChild(li);
        li = document.createElement("li");
        li.innerHTML = `Please <span style="color:red">Try again</span>`;
        disease_section.appendChild(li);
    }
    else{

        
        
        title.textContent =
        food_name[0].toUpperCase() + food_name.slice(1).toLowerCase();
        
        const disease_title = document.querySelector(".disease-name");
        disease_title.innerHTML = `<span >${flower_info[food_name][0]}</span> diseses`;
        console.log(disease_title);
        
        let content = flower_info[food_name].slice(1);
        
        let i =0;
        content.forEach((element) => {
            
            let li = document.createElement("li");
            li.textContent = `${content[i++]}`;
            disease_section.appendChild(li);
        });
        
        
    }



    // Some another setup
    carousel.classList.add('d-none');
    searchAgain.classList.remove('d-none');


});


const button = document.querySelector('.btn2')
button.addEventListener('click', function (){
    location.reload();
})