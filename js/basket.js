let basket = JSON.parse(localStorage.getItem("data")) || [];

const increment = (id, render) => {
    const index = basket.findIndex(item => item.id == id);
    if(index >= 0) {
        basket[index] = {id: id, amount: basket[index].amount+1};
    } else {
        basket.push({id: id, amount: 1});
    }
    
    //basket.push({id: basket[id], });
    
    localStorage.setItem("data", JSON.stringify(basket));
    // Om användaren klickar på + på produkten 
    render();
}

const decrement = (id, render) => {
    const index = basket.findIndex(item => item.id == id);
    if(basket[index] != null && basket[index].amount > 1) {
        basket[index] = {id: id, amount: basket[index].amount-1};
    } else if(basket[index] != null) {
        basket.splice(index, 1);
    }

    
    localStorage.setItem("data", JSON.stringify(basket));
    // Om användaren klickar på - på produkten 
    render();
}

const removeItem = (id, render) => {
    const index = basket.findIndex(item => item.id == id);
    if(basket[index] != null) 
        basket.splice(index, 1);
        
    localStorage.setItem("data", JSON.stringify(basket));
    render();
}

const clearCart = (render) => {
    basket = [];
    
    localStorage.setItem("data", JSON.stringify(basket));
    render();
}