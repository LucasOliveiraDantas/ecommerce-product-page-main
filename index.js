let btnCart = document.querySelector("#btn-cart")

btnCart.addEventListener("click", () =>{
    document.querySelector(".cart").classList.toggle("active")
})

//######################## menu mobile ############################//

let btnMenuOn = document.getElementById("btn-menu-m")
let btnMenuOff = document.getElementById("btn-menu-m-close")

btnMenuOn.addEventListener("click", () =>{
    document.querySelector(".menu").classList.add("active")
    document.querySelector(".menu").style.animationName = "menuOn"
})

btnMenuOff.addEventListener("click", () =>{
    setTimeout(() =>{
        document.querySelector(".menu").classList.remove("active")
    }
        
    , 950)
    
    document.querySelector(".menu").style.animationName = "menuOff"
    

})
//#################################################################//
const slideShow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

let currentSlideIndex = 0;

// Função para mostrar o slide selecionado
function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
}

// Função para avançar o slide
function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

// Função para retroceder o slide
function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
}

// Adiciona eventos de click aos botões
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// (Opcional) Exibe o slide inicial
showSlide(currentSlideIndex);
//####################################################//
let imgPreview = document.querySelectorAll(".img-product")
const imgThumbnail = document.querySelector(".img-preview-thumbnail-main")
imgPreview[0].addEventListener("click", ()=>{
  imgThumbnail.src = imgPreview[0].src
  imgPreview[0].style.outline = "2.5px solid hsl(26, 100%, 55%)"
  imgPreview[1].style.outline = "none"
  imgPreview[2].style.outline = "none"
  imgPreview[3].style.outline = "none"
})
imgPreview[1].addEventListener("click", ()=>{
  imgThumbnail.src = imgPreview[1].src
  imgPreview[1].style.outline = "2.5px solid hsl(26, 100%, 55%)"
  imgPreview[0].style.outline = "none"
  imgPreview[2].style.outline = "none"
  imgPreview[3].style.outline = "none"

})
imgPreview[2].addEventListener("click", ()=>{
  imgThumbnail.src = imgPreview[2].src
  imgPreview[2].style.outline = "2.5px solid hsl(26, 100%, 55%)"
  imgPreview[0].style.outline = "none"
  imgPreview[1].style.outline = "none"
  imgPreview[3].style.outline = "none"

})
imgPreview[3].addEventListener("click", ()=>{
  imgThumbnail.src = imgPreview[3].src
  imgPreview[3].style.outline = "2.5px solid hsl(26, 100%, 55%)"
  imgPreview[0].style.outline = "none"
  imgPreview[1].style.outline = "none"
  imgPreview[2].style.outline = "none"

})
//######################################################//
let btnAddItemPlus = document.getElementById("btn-number-plus")
let btnAddItemMinus = document.getElementById("btn-number-minus")
let counterNumberItem = document.querySelector(".value-item-product")


btnAddItemMinus.addEventListener("click", ()=>{
  counterNumberItem.textContent --
  if(counterNumberItem.textContent <= 0){
    counterNumberItem.textContent = 0
  }
  
})
btnAddItemPlus.addEventListener("click", ()=>{
  counterNumberItem.textContent ++
  
})