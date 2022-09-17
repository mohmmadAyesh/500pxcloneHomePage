const discoverList=[...document.querySelectorAll('nav .anchors .slide')];
const discoverSlide=document.querySelector('nav .discover-list');
const licensingSlide=document.querySelector('nav .liscensing-list');
const dotsSlide=document.querySelector('nav .dots-list');
const globalList=document.querySelector('nav .global-list');
const close=document.querySelector('nav .global-list .close');
const bars=document.querySelector('nav .login svg');
bars.addEventListener('click',()=>{
    globalList.classList.add('active');
})
close.addEventListener('click',()=>{
    globalList.classList.remove('active');
})
console.log(discoverList);
discoverList[0].addEventListener('click',()=>{
    discoverSlide.classList.toggle('active');
    licensingSlide.classList.remove('active');
    dotsSlide.classList.remove('active');
})
discoverList[1].addEventListener('click',()=>{
    discoverSlide.classList.remove('active');
    licensingSlide.classList.toggle('active');
    dotsSlide.classList.remove('active');
    
})
discoverList[2].addEventListener('click',()=>{
    discoverSlide.classList.remove('active');
    licensingSlide.classList.remove('active');
    dotsSlide.classList.toggle('active');
    
})