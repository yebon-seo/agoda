/*로그인 모달창*/
 const login = document.querySelector("#login");

 function popup() {
   login.style.display = "block";
 }
 function pClose() {
   login.style.display = "none";
 }

 const tabs = document.querySelectorAll(".tab");
 const tabContent = document.querySelectorAll(".tab-content > form");

 tabs.forEach((tab, index) =>
   tab.addEventListener("click", function () {
    //console.log(index)
     tabs.forEach((tab) => tab.classList.remove("active"));
     tab.classList.add("active");

     tabContent.forEach((form) => (form.style.display = "none"));
     tabContent[index].style.display = "block";
   })
 );

/*top-btn*/
 const topBtn = document.querySelector(".top-btn");
 window.addEventListener("scroll", () => {
   if (window.scrollY > 300) {
     topBtn.style.display = "block";
     topBtn.style.opacity = "1";
   } else if (window.scrollY < 100) {
     topBtn.style.opacity = "0";

     // topBtn.style.display = "none";
   }
 });

 //탑버튼 클릭시
 topBtn.addEventListener("click", () => {
   scrollTo({ top: 0, behavior: "smooth" });
 });

 /* 전체메뉴*/
 const mega = document.querySelector(".mega");
 const menuBtn = document.querySelector(".menu");

 function toggleMenu() {
   mega.classList.toggle("open");
 }

 window.addEventListener("click", (e) => {
   const isClickInside = mega.contains(e.target); //메뉴 내부 클릭 여부
   const isClickMenuBtn = menuBtn.contains(e.target); //메뉴버튼 클릭
   // console.log(isClickInside, isClickMenuBtn)

   if (!isClickInside && !isClickMenuBtn) {
     mega.classList.remove("open");
   }
 });

 /*이미지 슬라이더*/
 document.addEventListener("DOMContentLoaded", function () {
   const slides = document.querySelectorAll(".slide");
   const banner = document.querySelector("#banner");

   let currentIndex = 0; //현재 슬라이드 인덱스~
   const intervalTime = 3000; /*3초 >3<*/
   let slideInterval; //setInterval 담아주세용

   /*배경색*/
   const bgColors = [
     "#BDE9FF",
     "#8E627B",
     "#A9A3A4",
     "#FFBFD1",
     "#B39992",
   ];
   /*h1*/
   const h1Colors = [
     "#155781",
     "#C4FCF0",
     "#F1F1F1",
     "#963669",
     "#4D1011",
   ];
   /*h2*/
   const h2Colors = [
     "#F1F1F1",
     "#F1F1F1",
     "#F05C64",
     "#F1F1F1",
     "#F1F1F1",
   ];

   function showSlide(index) {
     slides.forEach((slide, i) => {
       slide.classList.toggle("show", i === index);
     });

     //배경색 변경
     banner.style.backgroundColor = bgColors[index];
     //글자색 변경
     const changeSlides = slides[index];
     const h1 = changeSlides.querySelector("h1");
     const h2 = changeSlides.querySelector("h2");

     h1.style.color = h1Colors[index];
     h2.style.color = h2Colors[index];
   }

   function nextSlide() {
     currentIndex = (currentIndex + 1) % slides.length;
     showSlide(currentIndex);
   }

   function startSlideShow() {
     slideInterval = setInterval(nextSlide, intervalTime);
   }
   function stopSlideshow() {
     clearInterval(slideInterval);
   }

   //초기 설정
   showSlide(currentIndex); //0번 인덱스부터 시쟉ㅋ
   startSlideShow();

   //마우스 올리면 슬라이드 멈춤
   banner.addEventListener("mouseenter", stopSlideshow);
   banner.addEventListener("mouseleave", startSlideShow);
 });

 //인기 지역별 추천호텔 슬라이드
 const lBtn = document.querySelector("section > .btn > .lbtn");
 const rBtn = document.querySelector("section > .btn > .rbtn");
 const hotels = document.querySelectorAll("section > div > .hotel");
 const cardWidth = 320;//카드 한장의 너비

 let index = 0; //현재위치
 
 rBtn.addEventListener("click", () => {
   if (index < hotels.length -3){
     index++;
     hotels.forEach((hotel)=>{
       hotel.style.transform = `translateX(${-index * cardWidth}px)`;
       hotel.style.transition = "transform 0.3s ease-in-out"; // 부드러운 이동 추가
     });
   }
 })
 lBtn.addEventListener("click", () => {
   if (index > 0){
     index--;
     hotels.forEach((hotel)=>{
       hotel.style.transform = `translateX(${-index * cardWidth}px)`;
       hotel.style.transition = "transform 0.3s ease-in-out";
     });
   }
 })

 




 //나에게 맞는 추천 여행지
 const lists = document.querySelectorAll(".wrap ul li");
 const sections = document.querySelectorAll(".pic-container");

 lists.forEach((list, idx) => {
   list.addEventListener("click", (e) => {
     e.preventDefault(); //기본 이벤트 방지

     lists.forEach((list) => (list.className = ""));
     list.classList.add("active");

     sections.forEach((section) => (section.style.display = "none"));

     sections[idx].style.display = "flex";
   });
 });

 const swiper = new Swiper(".swiper", {
   slidesPerView: "5", // 한 번에 4장 표시 (이미지와 텍스트가 한 번에 보이도록)
   loop: true, // 무한 루프
   loopedSlides: 2,
   spaceBetween: 30, // 이미지 간격 조정
   centeredSlides: true, //중앙 정렬
   autoplay: {
     delay: 2000, // 자동 슬라이드 (3초 간격)
     disableOnInteraction: false, // 조작 후에도 자동 슬라이드 계속
   },
 });
