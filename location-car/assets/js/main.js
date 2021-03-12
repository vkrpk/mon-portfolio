let burger = document.getElementsByClassName("burger")[1]
let menuDeroulant = document.getElementsByClassName("menuDeroulant")[0]
function afficherMenu() {
  if (menuDeroulant.classList.contains("active")) {
    menuDeroulant.classList.remove("active")
  } else {
    menuDeroulant.classList.add("active")
  }
}
burger.addEventListener("click", afficherMenu)
console.log(menuDeroulant)
//////////////////////////////////////////////////

let slider1 = ['./assets/media/vehicule1.png', './assets/media/slider2.jpg', './assets/media/slider3.jpg']
let slider2 = ['./assets/media/vehicule2.png', './assets/media/slider2.jpg', './assets/media/slider3.jpg']
let slider3 = ['./assets/media/vehicule3.png', './assets/media/slider2.jpg', './assets/media/slider3.jpg']
let sliderHeader = ['./assets/media/background.jpg', './assets/media/background1.jpg', './assets/media/background2.jpg']
let images;

let preceButt = document.getElementsByClassName("precedents")
let nextButt = document.getElementsByClassName("suivants")

function precedents() {
  if (this.getAttribute('array-img') == 'slider1') {
    images = slider1
  } else if (this.getAttribute('array-img') == 'slider2') {
    images = slider2
  } else if (this.getAttribute('array-img') == 'slider3') {
    images = slider3
  }

  let slider = this.parentNode.previousElementSibling
  let slideNumberAttribut = slider.getAttribute('data-slide-number')

  slideNumberAttribut--
  if (slideNumberAttribut < 0) {
    slideNumberAttribut = images.length - 1
  }
  slider.setAttribute("data-slide-number", slideNumberAttribut)
  slider.src = images[slideNumberAttribut]
}

function suivants() {
  if (this.getAttribute('array-img') == 'slider1') {
    images = slider1
  } else if (this.getAttribute('array-img') == 'slider2') {
    images = slider2
  } else if (this.getAttribute('array-img') == 'slider3') {
    images = slider3
  }
  let slider = this.parentNode.previousElementSibling
  let slideNumberAttribut = slider.getAttribute('data-slide-number')
  slideNumberAttribut++
  if (slideNumberAttribut >= images.length) {
    slideNumberAttribut = 0
  }
  slider.setAttribute("data-slide-number", slideNumberAttribut)
  slider.src = images[slideNumberAttribut]
}

for (let i = 0; i < preceButt.length; i++) {
  preceButt[i].addEventListener("click", precedents)
  nextButt[i].addEventListener("click", suivants)
}

let sliderHeaderContainer = document.getElementById("slider-container")
let slideNumber = 0;

function switchSlidesAuto() {
  let slideHeaderNumberAttributValue = sliderHeaderContainer.getAttribute('data-slide-number')
  slideHeaderNumberAttributValue++
  if (slideHeaderNumberAttributValue >= sliderHeader.length) {
    slideHeaderNumberAttributValue = 0
  }
  sliderHeaderContainer.setAttribute("data-slide-number", slideHeaderNumberAttributValue)
  sliderHeaderContainer.src = sliderHeader[slideHeaderNumberAttributValue]
}
setInterval(switchSlidesAuto, 10000)


let ligneFilm = document.querySelectorAll("#page2");

let observerMovie = new IntersectionObserver(lazyLoadMovie);

for (let i = 0; i < ligneFilm.length; i++) {
  observerMovie.observe(ligneFilm[i])
}

function lazyLoadMovie(elements) {
  elements.forEach(function (element) {
    if (element.isIntersecting) {
      const movie = element.target;
      for (let i = 0; i < movie.children.length; i++) {
        movie.children[i].style.display = "flex"
      }
      observerMovie.unobserve(movie);
    }
  })
}
/////////////////////////////////////////////////////////////////////
let observer = new IntersectionObserver(function (elements) {
  elements.forEach(function (element) {
    if (element.isIntersecting) {
      const image = element.target;
      image.src = image.dataset.src;
      observer.unobserve(image);
    }
  })
});
let imagesLazyLoad = document.getElementsByTagName("img")
for (let i = 0; i < imagesLazyLoad.length; i++) {
  observer.observe(imagesLazyLoad[i])
}

//////////////////////////////////////////////////////////

function arrowUp() {
  if (window.scrollY > 0) {
    document.getElementsByClassName("backToTop")[0].style.display = "flex"
  } else {
    document.getElementsByClassName("backToTop")[0].style.display = "none"
  }
}
window.addEventListener("scroll", arrowUp)

//////////////////////////////////////////////////////////

