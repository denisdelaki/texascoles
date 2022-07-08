const itemslider = document.querySelector(".itemlider");
const sliderwidth = itemslider.offsetWidth;
const slidingList=document.getElementById("wrapitems")
let count = 1;
const slides = slidingList.querySelectorAll("li").length;
const previous = document.getElementById("previous")
const next = document.getElementById("next")

document.addEventListener('resize', function () {
    sliderwidth = itemslider.offsetWidth;
})
const previousSlide = function () {
    if (count>1) {
        count = count - 1;
        slidingList.style.left = "-" + count * sliderwidth + "px";
        count++
    }
    else if (count = 1) {
        count = slides - 1;
        slidingList.style.left = "-" + count * sliderwidth + "px";
        count++
    }

}
const nextSlide=function () {
    if (count<slides) {
        slidingList.style.left = "-" + count * sliderwidth + "px";
        count++
    }
    else if (count=slides) {
        slidingList.style.left = "0px"
        count = 1;
    }
}
//attach the functions to the previous and the next sliders
previous.addEventListener("click", function () {
    previousSlide()
})
next.addEventListener("click", function () {
    nextSlide()
})
//set an interval to automatically slide the images
setInterval(function () {
    nextSlide()
}, 4000)