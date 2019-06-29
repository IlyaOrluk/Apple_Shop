let canvas,
    c,
    getCanvasSize = () => {
        canvas = document.getElementById('canvas'),
        c = canvas.getContext('2d'),
        canvas.width = 261
        canvas.height = 520
    }
    getCanvasSize();
const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 150,
    frequency: 0.01
}

const strokeColor = {
    h: 200,
    s: 50,
    l: 50
}
c.fillStyle = '#090909'
    c.fillRect(0,0, canvas.width, canvas.height)
let increment = wave.frequency,

    animate = () => {

        
    c.fillStyle = 'rgba(0,0,0, 0.05)'
    c.fillRect(0,0, canvas.width, canvas.height)

    c.beginPath()
    c.moveTo(0, canvas.height / 2)

    for(i=0;i<canvas.width;i++){
        c.lineTo(i, wave.y + Math.sin(i*wave.length + increment)*wave.amplitude*Math.sin(increment))
    }

    c.strokeStyle = `hsl(${strokeColor.h * Math.sin(increment)}, ${strokeColor.s}%, ${strokeColor.l}%)`
    c.stroke()
    increment += wave.frequency


}
setInterval(animate, 1000/60)




//Slider
let slides = document.querySelectorAll('.slider-iphone-item'),
    moveSlideLeft = document.querySelector('.slider-iphone-left'),
    moveSlideRight = document.querySelector('.slider-iphone-right'),
    slidesInfo = document.querySelectorAll('.iphone-info'),
    previewItem = document.querySelectorAll('.iphones-preview-item'),
    slidesPosition = 0,
    activeSlide = 0,
    fadeSlideInfo = () => {
        slidesInfo.forEach((item)=>{
            item.style.display = 'none';
        });
        slidesInfo[activeSlide].style.display = 'block';
    }
    fadeSlideInfo();
    moveSlideRight.addEventListener('click', () => {
        slideWidth = Math.floor(slides[activeSlide].getBoundingClientRect().height)
        if(activeSlide == slides.length-1){
            activeSlide = 0;
            slidesPosition = 0;
        } else {
            activeSlide += 1;
            slidesPosition += slideWidth;
        } 
        slides.forEach((item) => {
            item.style.cssText = `transform: translateY(-${slidesPosition}px)`;
        });
        fadeSlideInfo();
    });
    moveSlideLeft.addEventListener('click', () => {
        slideWidth = Math.floor(slides[activeSlide].getBoundingClientRect().height)
        if(activeSlide == 0){
            activeSlide = slides.length-1;
            slidesPosition = slideWidth*(slides.length-1);
        } else {
            activeSlide -= 1;
            slidesPosition -= slideWidth;
        } 
        slides.forEach((item) => {
            item.style.cssText = `transform: translateY(-${slidesPosition}px)`;
        });
        fadeSlideInfo();
    });
    previewItem.forEach((item, i) => {
        item.addEventListener('click', () =>{
            slideWidth = Math.floor(slides[i].getBoundingClientRect().height)
            activeSlide = i;
            slidesPosition = slideWidth*i;
            slides.forEach((item) => {
                item.style.cssText = `transform: translateY(-${slidesPosition}px)`;
            });
            fadeSlideInfo();
        });
    });
