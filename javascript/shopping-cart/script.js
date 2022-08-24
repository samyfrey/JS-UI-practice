
let shopItemsArea = document.querySelector('.shop-items')
let shoppingCart = document.querySelector('.shopping-cart')
let cart = []
function renderProducts(){
    products.map(product=>{
        shopItemsArea.innerHTML +=
        `<div>${product.description}</div>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `
    })
}
renderProducts()

function addToCart(id){
    if(products.find(product =>{product.id === id})){
        cart.push(...product)
        
    }
    console.log(cart)
    renderCart()
}

function renderCart(){
    shoppingCart.innerHTML = ""
     cart.forEach((cartItem) => {
			shoppingCart.innerHTML += `
        <div>${cartItem.description}</div>
        `
		})
}