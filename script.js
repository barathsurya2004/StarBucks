const hamburger=document.querySelector('.hamburger');
const container=document.querySelector('.container');
const line1= document.querySelector('.l1');
const body=document.querySelector('.bod');
const navbar=document.querySelector('.navbar');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('change');
    container.classList.toggle('hide');
    body.classList.toggle('colro');

})