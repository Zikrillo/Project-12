const left = document.querySelector(".slider__arrow-left");
left.addEventListener("click", ()=>{
    document.querySelector(".slider__wrapper").classList.toggle("left");
    left.classList.toggle("d-none");
});
const right = document.querySelector(".slider__arrow-right");
right.addEventListener("click", ()=>{
    document.querySelector(".slider__wrapper").classList.toggle("left");
    left.classList.toggle("d-none");
});
const sliderItems = document.querySelectorAll(".slider-item");
sliderItems.forEach((e)=>{
    e.addEventListener("click", ()=>{
        sliderItems.forEach(s=>s.classList.remove("active-slide-item"));
        e.classList.add("active-slide-item");
    })
})