function arrowUp(){
    if (window.scrollY > 0){
      document.getElementsByClassName("backToTop")[0].style.display = "flex"
    } else {
      document.getElementsByClassName("backToTop")[0].style.display = "none"
    }
  }
  window.addEventListener("scroll", arrowUp)

//////////////////////////////////////////////////////////

let images = new Array('./media/header-page-catalogue.png', './media/header-page-catalogue-1.jpg', './media/header-page-catalogue-2.jpg')
let slideNumber = 0
let slider = document.getElementById("slider")

function precedent() {
  slideNumber--
  if (slideNumber < 0) {
    slideNumber = images.length-1
  } 
  slider.src = images[slideNumber]
}

function suivant() {
  slideNumber++
  if (slideNumber >= images.length) {
    slideNumber = 0
  } 
  slider.src = images[slideNumber]
}

document.getElementsByClassName("precedent")[0].addEventListener("click", precedent)
document.getElementsByClassName("suivant")[0].addEventListener("click", suivant)

//////////////////////////////////////////////////////////

function switchSlidesAuto(){
  suivant()
}
setInterval(switchSlidesAuto, 5000)

//////////////////////////////////////////////////////////