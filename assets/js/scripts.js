const itemslider = document.querySelector(".itemlider");
const sliderwidth = itemslider.offsetWidth;
const slidingList=document.getElementById("wrapitems")
let count = 1;
const slides = slidingList.querySelectorAll("li").length;
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const image1=document.querySelector('image1')
const events = document.getElementById('events')
const eventsliderwidth=events.offsetWidth
const slidingEvents=document.getElementById('wrapEvents')
const items=slidingEvents.querySelectorAll("li").length
const mylocation=document.querySelector("#texaslocation")
document.addEventListener('resize', function () {
    sliderwidth = itemslider.offsetWidth;
    eventsliderwidth = events.offsetWidth;
})
const previousSlide = function () {
    if (count>1) {
        count = count - 1;
        slidingList.style.left = "-" + count * sliderwidth + "px";
        slidingEvents.style.left = "-" + count * eventsliderwidth + "px";
        count++
    }
    else if (count = 1) {
        count = slides - 1;
        slidingList.style.left = "-" + count * sliderwidth + "px";
        slidingEvents.style.left = "-" + count * eventsliderwidth + "px";
        count++
    }

}
const nextSlide=function () {
    if (count<slides) {
        slidingList.style.left = "-" + count * sliderwidth + "px";
       slidingEvents.style.left = "-" + count * eventsliderwidth + "px";
        count++
    }
    else if (count=slides) {
        slidingList.style.left = "0px"
        slidingEvents.style.left="0px"
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
//render the data on the  DOM
// function renderData() {
//     document.querySelector("#texaslocation").append(getLocation(location))
// }
//get the texas location from the public API
function getLocation() {
    fetch("https://vymaps.com/KE/Texascole-Medical-Center-Chebole-216199/")
      .then((res) => res.json())
      .then((location) => {
        console.log(location);
      });
}
function initialize() {
    getLocation()
}
initialize()