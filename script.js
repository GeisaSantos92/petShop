ScrollReveal({ reset: true });

ScrollReveal().reveal('.small',{
    rotate: {x:0, y:80, z:0},
    duration: 3000 
}); 

ScrollReveal().reveal('.txt-txt', { 
  rotate: {x:100, y:100, z:0},
  duration: 2000
})

ScrollReveal().reveal('.buttons-main', { 
  rotate: {x:100, y:100, z:0},
  duration: 2000
})

ScrollReveal().reveal('.image',{
    rotate: {x:0, y:30, z:0},
    duration: 3000
})

ScrollReveal().reveal('.client-area', {
    rotate: {x:0, y:30, z:0},
    duration: 2000
})

ScrollReveal().reveal('.team-info', {
    rotate: {x:0, y:30, z:0},
    duration: 2000
})

ScrollReveal().reveal('.team-info2', {
    rotate: {x:0, y:30, z:0},
    duration: 2000
})


  



function menuOpen(){
    var menu = document.querySelector('.image-hidden');
    
    if(menu.classList.contains('image-hidden')){
        menu.classList.remove('image-hidden')
        menu.classList.add('open')
    }
}

function closeMenu(){
    var close = document.querySelector('.open');

    if(close.classList.contains('open')){
        close.classList.remove('open')
        close.classList.add('image-hidden')
        
    }

}




var display = document.querySelector('.count');
var count = 1;

const counter = setInterval(()=>{ 
    count++
    if(count === 20){
        clearInterval(counter)
    }
    display.innerHTML = count + '<span class="counter">+</span><p class="counter-p">Years Experience</p>';
    

},700)  












