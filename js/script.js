
//SMOOTH PAGE SCROLL
$('a').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

/*Preloader*/
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
//]]>

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween: 30,// 슬라이드 사이 여백
  slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수        
  centeredSlides: true,//센터모드        
  // autoplay: {//자동슬라이드 (false-비활성화)          
  //   delay: 6000, // 시간 설정          
  //   disableOnInteraction: false, // false-스와이프 후 자동 재생        
  // },
  loop : false,// 슬라이드 반복 여부
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정         
  pagination: { // 호출(pager) 여부          
    el: ".swiper-pagination", //버튼을 담을 태그 설정          
    clickable: true, // 버튼 클릭 여부        
  },
  breakpoints: {
    '@0.75': {
      spaceBetween: 20,
    },
    '@1.00': {
      spaceBetween: 40,
    },
    '@1.50': {
      spaceBetween: 50,
    }
  }
});

window.addEventListener('scroll', () => {
	let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
	if(scrollLocation >= 1056){
    let head = document.querySelector('.head');
    head.classList.add('bgw');
	} else {
    let head = document.querySelector('.head');
    head.classList.remove('bgw');
  }
});

let fun_facts = document.querySelector('.fun_facts');
function myFunction() {
  let x = fun_facts.getElementsByClassName('pro_link');
  for( let i = 0; i< x.length; i++){
    x[i].classList.add('opacity');
  }
}
let pro_link = fun_facts.querySelectorAll('.pro_link');
let img = fun_facts.querySelectorAll('.imac');
console.log(pro_link);
console.log(img);
for( let z = 0; z< 2; z++ ) {
  img[z].addEventListener('mouseover', function(){
    myFunction();
  });
  // img[z].addEventListener('mouseout', function(){
  //   for(let i = 0; i < 2; i++){
  //     pro_link[i].classList.remove('opacity');
  //   }
  // }); 
}




