
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
// window.addEventListener('resize', getCanvasSize);




//Slider
let slides = document.querySelectorAll('.slider-iphone-item'),
    moveSlideLeft = document.querySelector('.slider-iphone-left'),
    moveSlideRight = document.querySelector('.slider-iphone-right'),
    slidesPosition = 0,
    activeSlide = 0
    
    moveSlideRight.addEventListener('click', () => {
        slideWidth = Math.floor(slides[activeSlide].getBoundingClientRect().width)
        console.log(slideWidth+50,activeSlide)
        slidesPosition += slideWidth+50;
        activeSlide += 1; 
        slides.forEach((item) => {
            item.style.cssText = `transform: translateX(-${slidesPosition}px)`;
        });
    });
    moveSlideLeft.addEventListener('click', () => {
        slideWidth = Math.floor(slides[activeSlide-1].getBoundingClientRect().width)
        slidesPosition -= slideWidth+50;
        activeSlide -= 1;
        slides.forEach((item) => {
            item.style.cssText = `transform: translateX(${slidesPosition}px)`;
        });
        console.log(slideWidth+50,activeSlide)
    });
    console.log(slides[0].getBoundingClientRect().width+50);

