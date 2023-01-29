const shop = document.getElementById('shop');
 

const generateShop = () => {
    

    
    const categories = shopData.reduce((acc, item) => {
        if(!acc.includes(item.category))
            return [...acc, item.category];
        return acc;
    }, []);
    document.getElementById("categories").innerHTML = categories.map(category => 
        `<a class="btnCategory" href="?category=${category}">${category}</a>`).join("");

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const category = urlParams.get('category');

        let shopDataFilter = shopData;
        if(category != null) {
            shopDataFilter = shopDataFilter.filter(item => item.category == category);
        }

    
    shop.innerHTML = "";
    const shopHtml = shopDataFilter.map(item => `
    <div id="product-id-${item.id}" class="item">
         <img width="220" src=${item.image} alt=""> 
         <div class="details">
             <h3>${item.title}</h3>
             <p>${item.description}</p>
             <div class="price-quantity">
             <h2>${item.price}$</h2>
             <div class="buttons">
                 <i onclick="decrement(${item.id}, generateShop)" class="bi bi-dash-lg"></i>
                 <div id=${item.id} class="quantity">
                 </div>
                 <div id=${item.id} class="quantity">
                    ${basket.find(basketItem => basketItem.id == item.id) ? basket.find(basketItem => basketItem.id == item.id).amount : 0}
                 </div>
                 <i onclick="increment(${item.id}, generateShop)" class="bi bi-plus-lg"></i>
             </div>
             </div>
         </div>
     </div>
    `).join("");
    shop.innerHTML = shopHtml;

    let count = 0;
    basket.forEach(item => {
        count+= item.amount;
    });
    
    const cartAmount = document.getElementById("cartAmount");
    cartAmount.classList.remove('cardAnimate');
    
    void cartAmount.offsetWidth; 
    cartAmount.classList.add('cartAnimate');

    
    
    cartAmount.innerHTML = count;


}

generateShop()
