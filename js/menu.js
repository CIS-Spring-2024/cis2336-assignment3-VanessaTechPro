//Slider functions
const productContainers = [...document.querySelectorAll('.product-container')];
const Btnnext = [...document.querySelectorAll('.next')];
const Btnprev = [...document.querySelectorAll('.prev')];

productContainers.forEach((item, i) => {
    let containerBox = item.getBoundingClientRect();
    let containerWidth = containerBox.width;

    Btnnext[i].addEventListener("click",() => {
        item.scrollLeft += containerWidth;
    });

    Btnprev[i].addEventListener("click",() => {
        item.scrollLeft -= containerWidth;
    });
});


//Order functions

function openOrder(itemName, price) {
    console.log("Button clicked");
    document.getElementById("itemName").innerHTML = itemName;
    document.getElementById("cartForm").style.display = "block";
    document.getElementById("sumbitButton").onclick = function() {
        submitOrder(itemNamem, price);
    };
}

function closeCart() {
    document.getElementById("cartForm").style.display = "none";
}

function sumbitOrder(itemName, price) {
    var quantity = parseInt(document.getElementById('quantity').value);

    if (quantity > 0 && quantity <= 10) {
        var totalPrice = quantity * parseFloat(price);
        alert('Order submitted successfully!\nItem' + itemName + "\Quantity:" + quantity + "\nTotal Price: $" + totalPrice.toFixed(2));
        closeCart();
    } else {
        alert("Please enter a valid quantity (1-10). Thank you!");
    }
}

document.getElementById("closeCart").addEventListener("click", closeCart);