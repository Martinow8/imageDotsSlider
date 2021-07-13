let imageElement = document.querySelector('#imageHolder');
let dotsElement = document.querySelectorAll('.dot');

dotsElement.forEach((x) => {
    x.addEventListener('click', selectDot);
})

let sliderCurrentState = {
    currentImage: 1,
    currentDot: 0,
}

function selectDot(e){
    clearDots();
    e.target.classList.add('currentDot');
    sliderCurrentState.currentDot = getCurrentDot();
    sliderCurrentState.currentImage = getCurrentDot() + 1;
    imageElement.src = sliderCurrentState.currentImage + ".png";
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
    if(sliderCurrentState.currentImage == 5){
        sliderCurrentState.currentImage = 1;
    } else {
        sliderCurrentState.currentImage++;
    }

    if(sliderCurrentState.currentDot == 4){
        sliderCurrentState.currentDot = 0;
    } else {
        sliderCurrentState.currentDot++;
    }

    clearDots();
    dotsElement[sliderCurrentState.currentDot].classList.add('currentDot');
    imageElement.src = sliderCurrentState.currentImage + ".png";
}

setInterval(changeImage, 3000); 



