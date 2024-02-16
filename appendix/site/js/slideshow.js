var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

showSlides(current); // 현재 이미지 표시
prev.onclick = prevSlide; // 이전 이미지 표시
next.onclick = nextSlide; // 다음 이미지 표시

function showSlides(n) {
  for (var  i = 0; i < slides.length; i++) { // 배열의 처음부터 끝까지 반복
    slides[i].style.display = "none"; // 모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = "block"; // n번째 이미지만 화면에 표시
}