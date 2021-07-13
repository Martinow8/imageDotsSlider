let imageElement = document.querySelector('#imageHolder');
let dotsElement = document.querySelectorAll('.dot');
let imagesArray = [
    "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png",
    "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png",
    "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png",
    "http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png",
    "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png"
];

dotsElement.forEach((x) => {
    x.addEventListener('click', selectDot);
})

let sliderCurrentState = {
    currentImage: 0,
    currentDot: 0,
}

function selectDot(e){
    clearDots();
    e.target.classList.add('currentDot');
    sliderCurrentState.currentDot = getCurrentDot();
    sliderCurrentState.currentImage = getCurrentDot();
    imageElement.src = imagesArray[sliderCurrentState.currentImage];
}

function getCurrentDot(){
    for(let a = 0; a < 5; a++){
        if(dotsElement[a].classList[1] === "currentDot"){
            return a;
        }
    }
}

function clearDots(){
    for(let dot of dotsElement){
        dot.classList.remove('currentDot');
    }
}

// Interval auto rotate images

function changeImage(){
    if(sliderCurrentState.currentDot == 4){
        sliderCurrentState.currentDot = 0;
    } else {
        sliderCurrentState.currentDot++;
    }

    sliderCurrentState.currentImage = sliderCurrentState.currentDot;

    clearDots();
    dotsElement[sliderCurrentState.currentDot].classList.add('currentDot');
    imageElement.src = imagesArray[sliderCurrentState.currentImage];
}

setInterval(changeImage, 3000); 



