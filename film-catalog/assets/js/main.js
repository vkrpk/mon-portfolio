let burger = document.getElementsByClassName("burger")[0]
let menuColumn = document.getElementsByClassName("menuColumn")[0]
let menuDroite = document.getElementsByClassName("menuDroite")[0]

let categories = document.getElementsByClassName("categories")[0]
let categoriesDeroulante = document.getElementsByClassName("categoriesDeroulante")[0]

function active(){
    if (categoriesDeroulante.classList.contains("active")){
      categoriesDeroulante.classList.remove("active")
    }else{
      categoriesDeroulante.classList.add("active")
    }

}
categories.addEventListener("click", active)

//////////////////////////////////////////////

function activeDeux(){
    if (menuColumn.classList.contains("active")&&menuDroite.classList.contains("active")){
        menuColumn.classList.remove("active")
        menuDroite.classList.remove("active")
    }else{
        menuColumn.classList.add("active")
        menuDroite.classList.add("active")
}
}

burger.addEventListener("click", activeDeux)

//////////////////////////////////////////////////////////

let ligneFilm = document.querySelectorAll("#page2"); 

let observerMovie = new IntersectionObserver(lazyLoadMovie);

for (let i = 0; i < ligneFilm.length; i++) {
  observerMovie.observe(ligneFilm[i])
}

function lazyLoadMovie(elements){
  elements.forEach(function(element) {
    if (element.isIntersecting) {
      const movie = element.target;
      for (let i = 0; i < movie.children.length; i++) {
        movie.children[i].style.display = "flex"
      }
      observerMovie.unobserve(movie);
    }
  })
}

/////////////////////////////////////////////////////////

let observer = new IntersectionObserver(function(elements) {
  elements.forEach(function(element) {
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

let images = ['./assets/media/banner4.png', './assets/media/banner5.png', './assets/media/banner6.jpg']
slideNumber = 0
let smallSliders = document.getElementsByClassName("mes-sliders")
let preceButt = document.getElementsByClassName("precedents")
let nextButt = document.getElementsByClassName("suivants")

function precedents (){
 if(this.getAttribute("array-img")=="slider1"){
  images = ['./assets//media/banner1.png', './assets//media/banner2.jpg', './assets/media/banner3.jpg']
  }else if (this.getAttribute("array-img")=="slider2"){
    images =['./assets/media/banner4.png', './assets/media/banner5.png', './assets/media/banner6.jpg']
   
  } else if (this.getAttribute("array-img")=="slider3"){
    images = ['./assets/media/banner7.jpg', './assets/media/banner8.jpg', './assets/media/banner9.jpg']
  }
  this.classList.add("this-slider");
  for (let i = 0; i < preceButt.length; i++ ){
    if (preceButt[i].classList.contains("this-slider")){
      slideNumber--
      if(slideNumber < 0){
        slideNumber = images.length - 1;
      }
      smallSliders[i].src = images[slideNumber]
      preceButt[i].classList.remove("this-slider")
    }
  }
}

function suivants (){
  if(this.getAttribute("array-img")=="slider1"){
    images = ['./assets//media/banner1.png', './assets//media/banner2.jpg', './assets/media/banner3.jpg']
    }else if (this.getAttribute("array-img")=="slider2"){
      images =['./assets/media/banner4.png', './assets/media/banner5.png', './assets/media/banner6.jpg']
    } else if (this.getAttribute("array-img")=="slider3"){
      images = ['./assets/media/banner7.jpg', './assets/media/banner8.jpg', './assets/media/banner9.jpg']
    }
  this.classList.add("this-slider");
  for (let i = 0; i < nextButt.length; i++ ){
    if (nextButt[i].classList.contains("this-slider")){
      slideNumber--
      if(slideNumber < 0){
        slideNumber = images.length - 1;
      }
      smallSliders[i].src = images[slideNumber]
      nextButt[i].classList.remove("this-slider")
    }
  }
}

for (let i=0; i < preceButt.length; i++){
  preceButt[i].addEventListener("click", precedents)
  nextButt[i].addEventListener("click", suivants)
}

//////////////////////////////////////////////////////////

let sliderHeader = new Array('./assets/media/banner1.png', './assets/media/banner2.jpg', './assets/media/banner3.jpg')
let sliderHeaderContainer = document.getElementById("slider-container")
let slideNumberR = 0

function suivant() {
slideNumberR++
if (slideNumberR >= sliderHeader.length) {
    slideNumberR = 0
  } 
sliderHeaderContainer.src = sliderHeader[slideNumberR]
}

function switchSlidesAuto(){
suivant()
}
setInterval(switchSlidesAuto, 5000)

//////////////////////////////////////////////

function arrowUp(){
  if (window.scrollY > 0){
    document.getElementsByClassName("backToTop")[0].style.display = "flex"
  } else {
    document.getElementsByClassName("backToTop")[0].style.display = "none"
  }
}
window.addEventListener("scroll", arrowUp)

