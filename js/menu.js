//Order functions

function openOrder(itemName, price) {
    console.log("Button clicked");
    document.getElementById("itemName").innerHTML = itemName;
    document.getElementById("cartForm").style.display = "block";
    document.getElementById("sumbitButton").onclick = function() {
        submitOrder(itemName, price);
    };
}

function closeCart() {
    document.getElementById("cartForm").style.display = "none";
}

document.getElementById("closeCart").addEventListener("click", closeCart);

function submitOrder(itemName, price) {
    var quantity = parseInt(document.getElementById('quantity').value);

    if (quantity > 0 && quantity <= 10) {
        var totalPrice = quantity * parseFloat(price);
        alert('Order submitted successfully!\nItem: ' + itemName + "\nQuantity: " + quantity + "\nTotal Price: $" + totalPrice.toFixed(2));
        closeCart();
    } else {
        alert("Please enter a valid quantity (1-10). Thank you!");
    }
}
