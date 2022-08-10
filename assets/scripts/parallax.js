let hill = document.querySelector('.hill')
let bushes = document.querySelector('.bushes')
let mountain = document.querySelector('.mountain')
let nebula = document.querySelector('.nebula')
let starsFront = document.querySelector('.stars-front')
let glow = document.querySelector('.glow')
let starsBack = document.querySelector('.stars-back')
let clouds = document.querySelector('.clouds')
let btn = document.querySelector('.btn')
let text = document.querySelector('.text')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    starsFront.style.left = value * 0.3 + 'px'
    hill.style.right = value * 1 + 'px'
    bushes.style.top = value * 0.2 + 'px'
    mountain.style.top = value * 0.4 + 'px'
    nebula.style.left = value * 0.1 + 'px'
    glow.style.right = value * 0.1 + 'px'
    btn.style.top = value * 0.1 + 'px'
    starsBack.style.left = value * 0.1 + 'px'
    text.style.bottom = value * 1 + 'px'
    clouds.style.top = value * 0.3 + 'px'
    
})