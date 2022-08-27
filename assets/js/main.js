// const slideWrapperEl = document.querySelector(".slider-wrapper");

// let sliderItem = slideWrapperEl.getElementsByClassName("slide-img");
// let  swipperC = document.querySelector(".swipper-container");
// let swipperItem = swipperC.getElementsByClassName("swipper-btn");




// let currentItem = 0;
// setInterval(()=>{
//    slideWrapperEl.append(sliderItem[0])
//    sliderItem[0].style.cssText = `background:red; padding:10px; border-radius:5px;`
//    setTimeout(()=>{
//     sliderItem[0].style.backgroundColor = null;
//     },7000)
   
//    swipper();
// },6000)


// function change(btn){
//     slideWrapperEl.prepend(sliderItem[btn.id])
//     btn.classList.toggle("active");
// }


// function arrowLeft(){
//     slideWrapperEl.prepend(sliderItem[sliderItem.length -1]) 
// }


// function arrowRight(){
//     slideWrapperEl.append(sliderItem[0]) ;  
// }




// function swipper(){
//     currentItem++; 
//     if(currentItem < 0){
//         currentItem = 7;
//     }
//     if(currentItem > 7){
//         currentItem = 0;
//     }  

//     console.log(currentItem)
//     swipperItem[currentItem].classList.add("active");

//     if(currentItem == 0){
//         swipperItem[7].classList.remove("active")
//      }
 
//     swipperItem[currentItem - 1].classList.remove("active");

// }

var mySwiper = new Swiper('.client .swiper-container', {
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    414: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
})


