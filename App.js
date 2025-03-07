const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');
const sidebar=document.querySelector('.nav-link');


const showMenu=()=>{
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
    sidebar.classList.toggle("active")

}