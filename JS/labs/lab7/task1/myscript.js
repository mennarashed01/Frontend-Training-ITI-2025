
var arrOfImg = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg'];
var numOfImage = 0; // Initialize image index

function nextFun() {
    numOfImage = (numOfImage + 1) % arrOfImg.length; // Loop back to first image(wrap)
    image.src = arrOfImg[numOfImage];
}

function preFun() {
    numOfImage = (numOfImage - 1 + arrOfImg.length) % arrOfImg.length; // Loop back to last image (wrap)
    image.src = arrOfImg[numOfImage];
}

function startFun() {
    // stopFun(); // Stop any previous interval before starting a new one
    start = setInterval(nextFun, 1000);
}

function stopFun() {
    clearInterval(start);
}

