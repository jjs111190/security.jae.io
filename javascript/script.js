    // 스크롤 이벤트 추가
    window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav'); // 내비게이션 요소 선택
        const navLinks = document.querySelectorAll('nav ul li a'); // 내비게이션 링크 선택
        const scrollY = window.scrollY; // 현재 스크롤 위치
    
        // 스크롤이 100px 이상일 때 글씨 크기를 작게 조정
        if (scrollY > 100) {
          nav.style.padding = '10px 0'; // 내비게이션 패딩을 줄임
          navLinks.forEach(link => link.style.fontSize = '0.8em'); // 글씨 크기를 줄임
        } else {
          nav.style.padding = '20px 0'; // 내비게이션 기본 패딩
          navLinks.forEach(link => link.style.fontSize = '1em'); // 글씨 크기를 원래대로
        }
      });
      let currentSlide = 0; // 현재 슬라이드 인덱스
    const slides = document.querySelectorAll('.slide'); // 모든 슬라이드 요소를 선택
    const totalSlides = slides.length; // 슬라이드의 총 개수
  
    // 다음 슬라이드 보여주기
    function showNextSlide() {
      // 현재 슬라이드에서 'active' 클래스를 제거하여 숨김 처리
      slides[currentSlide].classList.remove('active');
  
      // 현재 슬라이드 인덱스를 다음 슬라이드로 업데이트
      currentSlide = (currentSlide + 1) % totalSlides; // 마지막 슬라이드 이후 다시 첫 번째로 돌아옴
  
      // 다음 슬라이드에 'active' 클래스를 추가하여 표시
      slides[currentSlide].classList.add('active');
    }
  
    // 일정 시간 간격으로 슬라이드를 자동으로 넘기도록 설정 (3초마다 슬라이드 변경)
    setInterval(showNextSlide, 10000);
  
    // 첫 번째 슬라이드에 'active' 클래스를 추가하여 초기 상태에서 표시
    slides[currentSlide].classList.add('active');
    document.addEventListener('DOMContentLoaded', function() {
      const myElement = document.querySelector('.my-element');
      if (myElement) {
          myElement.classList.add('new-class');
      } else {
          console.error('요소를 찾을 수 없습니다!');
      }
  });
  var element = document.getElementById('myElement');
if (element) {
    element.classList.add('newClass');
}
var element = document.querySelector('.myClass');
console.log(element); // null이면 해당 클래스를 가진 요소가 없음
if (element) {
    element.classList.add('newClass');
}