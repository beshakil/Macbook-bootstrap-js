const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const bestPrice = document.getElementById('best-price');
const btnPromo = document.getElementById('promo-btn')
const promoInput = document.getElementById('promo-input')
const discountPriceText = document.getElementById('discount-price')
const total = document.getElementById('total');

// Memory Selection
document.getElementById('memory-type-one').addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotal()
})

document.getElementById('memory-type-two').addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotal()
})



//Storage Selection
document.getElementById('storage-type-one').addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotal()

})
document.getElementById('storage-type-two').addEventListener('click', function () {
    storageCost.innerText = '150';
    updateTotal()
})
document.getElementById('storage-type-three').addEventListener('click', function () {
    storageCost.innerText = '180';
    updateTotal()
})


//Delivery Option
document.getElementById('delivery-free').addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updateTotal()
})

document.getElementById('delivery-paid').addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updateTotal()
})

//update total price
function updateTotal() {

    bestPrice.innerText = '1299';
    const mainPrice = parseInt(bestPrice.innerText);
    const memoryCosting = parseInt(memoryCost.innerText);
    const storageCosting = parseInt(storageCost.innerText);
    const deliveryCosting = parseInt(deliveryCost.innerText);
    const totalPrice = mainPrice + memoryCosting + storageCosting + deliveryCosting;
    total.innerText = totalPrice;
    discountPriceText.innerText = total.innerText;

}
//discount Promo total price
btnPromo.addEventListener('click', function () {
    let discountPrice = parseInt(discountPriceText.innerText)
    promoCode = promoInput.value
    if (promoCode == 'stevekaku') {
        discountPriceText.innerText = parseInt(total.innerText - (total.innerText * 0.2));
    }
    else (
        alert('You Have Entered Wrong Promo Code')
    )
    promoInput.value = ''
})











