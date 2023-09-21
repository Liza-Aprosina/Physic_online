// let div=document.querySelector('.btn2');
// title.addEventListener('click', function(){
//     title.textContent='Рады сотрудничеству';
//     confirm('Вы согласны?');
// }) ;

let burger = document.querySelector('.burger-menu'); 
let nav = document.querySelector('.main-nav');
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

$('.carousel').slick({
    prevArrow:'<img src="arrow_carous_left.png">',
    nextArrow:'<img src="arrow_carous.png">',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });

