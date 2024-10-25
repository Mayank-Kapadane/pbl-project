// Target input section
let select = document.getElementById('selection');
let quantity = document.getElementById('quantity');
let add_product = document.getElementById('add');

// Target output section (Table)
let table_body = document.getElementById('cart-body');

let price = [10,15,20,25,35];

let totalPrice = 0

add_product.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log('add_product')

    let tr = document.createElement('tr');
    
    // console.log(select.value)

    let random_no = Math.floor(Math.random()*5);
    let product_price = price[random_no];
    
    let totalProductPrice = product_price*quantity.value

    totalPrice = totalPrice + totalProductPrice

    tr.innerHTML = `
        <td>${select.value}</td>
        <td>${quantity.value}</td>
        <td>$${product_price}.00</td>
        <td>$${totalProductPrice}.00</td>
    `
    
    table_body.appendChild(tr);

  
});





// Remove record
// let remove_button = document.querySelectorAll('.remove-btn');

// remove_button.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let tr = remove_button.parentElement.parentElement
//     tr.remove()
// })
// console.log(remove_button.parentElement.parentElement)


let summary_button = document.getElementById("summary-button")
console.log(summary_button)

summary_button.addEventListener('click', ()=>{

    let summary = document.querySelector('.cart-summary')

    let fare = 0

    if (totalPrice != 0){

        let random_no = Math.floor(Math.random()*5);
        fare = price[random_no];
    }
    
    summary.innerHTML =`
     <h3>Cart Summary</h3>
    <p>Subtotal: $${totalPrice}.00</p>
    <p>Shipping: $${fare}.00</p>
    <p>Total: ${totalPrice+fare}.00</p>
    `

})