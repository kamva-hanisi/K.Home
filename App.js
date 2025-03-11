const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');
const line4=document.querySelector('.line4');
const line5=document.querySelector('.line5');
const sidebar=document.querySelector('.nav-link');


const showMenu=()=>{
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
    sidebar.classList.toggle("active")

}

TweenMax.from('.navbar',1,{
    delay:.3,
    x:-40,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.header-headline',2,{
    delay:.5,
    y:80,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.header-para',3,{
    delay:.5,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.btn',4,{
    delay:.5,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('form',5,{
    delay:0.3,
    y:80,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.property-info',6,{
    delay:0.5,
    x:-100,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.property-card',7,{
    delay:0.5,
    y:200,
    opacity:0,
    ease:Expo.easeInOut
    })