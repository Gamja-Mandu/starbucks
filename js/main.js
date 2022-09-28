const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
 searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색')
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','')
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간(s단위), 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
      // 문자로 입력해야 하는 값들은  '' !
    });
    //  버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else { gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
      // display속성처럼 값이 숫자가 아닌 속성은 전후값이 존재하지 않기 때문에 자연스러운 전환효과 사용할 수 없음
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간(ms단위))
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) { gsap.to(fadeEl, 1, {
  delay:(index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
  opacity: 1
});
});

// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,// 슬라이드 사이 여백
  centeredSlides: true,//1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택지
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //!->변수의 값을 반댓값으로 반환
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
    
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, //선택자
     random(1.5, 2.5), //애니메이션 동작 시간
      { //옵션
    y: size,
    repeat: -1, //라이브러리에 정해진 값이 -1임 gsap옵션 설명 확인
    yoyo: true, //거꾸로 애니메이션이 진행되게 함
    ease: Power1.easeInOut, //gsap easing 을 통해 옵션추가하여 애니메이션 효과 낼 수 있음
    delay: random(0, delay), //몇초 뒤에 애니메이션 실행
  } );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //triggerHook->내가 감시하고 있는 요소가 어느 지점에서 감시되었다고 판단할 것인가라는 것을 지정해주는 옵션 (뷰포트 제일 위지점이 0 맨아래가 1 0.5는 중간 따라서 0.8 밑에서 1/4지점쯤에서 triggerHook이 걸림.)
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//2021 반환됨