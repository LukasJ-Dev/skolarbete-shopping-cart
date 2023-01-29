let shoppingCart = document.getElementById("shopping-cart")



const generateCartItems = () => {

    
    shoppingCart.innerHTML = "";

    shoppingCart.innerHTML += basket.map(basketItem => {
        const item = shopData.find(shopItem => shopItem.id == basketItem.id);
    return `
     <div class="cart-item">
     <img width="100" src=${item.image} alt="" />
     <div class="details">
         <div class="title-price-x">
         <h4 class="title-price">
             <p>${item.title}</p>
             <p class="cart-item-price">${item.price}$</p>
         </h4>
         <i onclick="removeItem(${item.id}, generateCartItems)" class="bi bi-x-lg"></i>
         </div>
         <div class="cart-buttons">
         <div class="buttons">
             <i onclick="decrement(${item.id},generateCartItems)" class="bi bi-dash-lg"></i>
             <div id=shopData class="quantity">${basketItem.amount}</div>
             <i onclick="increment(${item.id},generateCartItems)" class="bi bi-plus-lg"></i>
         </div>
         </div>
         <h3>${basketItem.amount * item.price}$</h3>
        </div>
    </div>`;
});
let count = 0;
let totalPrice = 0;
basket.forEach(item => {
    count+= item.amount;
    const price = shopData.find(shopItem => shopItem.id == item.id).price;
    totalPrice += (item.amount * price);
});


document.getElementById("cartAmount").style.animation = "";
if(document.getElementById("cartAmount").innerHTML != count)
    document.getElementById("cartAmount").style.animation = "cartAnimate 1s linear" + count;
document.getElementById("cartAmount").innerHTML = count;

document.getElementById("label").innerHTML = (Math.round(totalPrice * 100) / 100) + "$";

 
}

generateCartItems();
