function calculateDiscount(price, discountPercentage){
    return price - (price * discountPercentage / 100);
}


let originalPrice = 100;
let discount = 20;

let discountPrice = calculateDiscount(originalPrice, discount);
console.log("Original Price: " + originalPrice + ", Discounted Price: " + discountPrice);