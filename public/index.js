let ele = document.getElementsByClassName("ul-container")[0];
let bars = document.getElementsByClassName("bars")[0];



bars.addEventListener("click",()=>{
    ele.classList.toggle("toggle")
})

// setting up functionality for faq

let faqContainer = document.querySelector("div.faq")
faqContainer.addEventListener('click',(e)=>{
    let target = e.target.parentElement.nextElementSibling
    e.target.classList.toggle("rotate")
    target.classList.toggle("hide")
})