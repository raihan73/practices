$(function() {
    const clients = new Swiper('.clients-slider', {
      autoplay: true,
      speed: 1500,
      spaceBetween: 30,
      slidesPerView: 6,
      breakpoints: {
          1024: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          640: {
              slidesPerView: 2,
              spaceBetween: 0,
          },
          320: {
              slidesPerView: 1,
              spaceBetween: 0,
          }
      }
  })
})