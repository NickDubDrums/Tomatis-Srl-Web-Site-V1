/*let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let stratx;
let x;

slider.addEventListener('mousedown', (e)=>{
    pressed = true;
    stratx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing'
});


slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor = 'grab'
});

slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = 'grab'
});


window.addEventListener('mouseup',()=>{
    pressed = false;
});

slider.addEventListener('mousemove', (e)=>{
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = `${x - stratx}px`;

    checkboundary()
});

function checkboundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left ='0px';
    }
    else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
}
*/

/*const slider = document.querySelector('.slider');
//const innerSlider = document.querySelector('.slider-inner');
let pressed = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e)=>{
    pressed = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing'
});


slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor = 'grab'
});

slider.addEventListener('mouseleave', ()=>{
    slider.style.cursor ='default'
})

slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = 'grab'
});

window.addEventListener('mouseup',()=>{
    pressed = false;
});




slider.addEventListener('mousemove', (e)=>{
    if(!pressed) return;
    e.preventDefault();
    const x = e.pageX -slider.offsetLeft;
    const walk = x -startX;
    slider.scrollLeft = scrollLeft - walk;

});*/
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
