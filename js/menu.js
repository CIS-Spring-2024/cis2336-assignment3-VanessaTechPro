var drinkimg = ["./images/Menu/KT1.jpg","./images/Menu/coffee.jpg", "./images/Menu/smoothie.jpg"];
var currentIndex = 0

function changeDrink() {
    currentIndex++;
    
    if (currentIndex >= drinkimg.length) {
        currentIndex = 0;
    }
    var imgDrink =  document.getElementById('img1');

    imgDrink.src = drinkimg[currentIndex];
    }

var foodimg = ["./images/Menu/chicken.jpg","./images/Menu/panda.jpg", "./images/Menu/chipotle.jpg"];
var currentIndex = 0

function changeFood() {
    currentIndex++;

    if (currentIndex >= foodimg.length) {
        currentIndex = 0;
    }
    var imgFood =  document.getElementById('img2');

    imgFood.src = foodimg[currentIndex];
    }


var dessertimg = ["./images/Menu/bakery.jpg","./images/Menu/yogurt.jpg", "./images/Menu/donut.jpg"];
var currentIndex = 0

function changeDessert() {
    currentIndex++;

    if (currentIndex >= dessertimg.length) {
        currentIndex = 0;
    }
    var imgDessert =  document.getElementById('img3');

    imgDessert.src = dessertimg[currentIndex];
    }