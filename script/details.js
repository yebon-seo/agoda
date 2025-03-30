
/*top-btn*/
const topBtn = document.querySelector(".top-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
    topBtn.style.opacity = "1";
  } else if (window.scrollY < 100) {
    topBtn.style.opacity = "0"

    // topBtn.style.display = "none";
  }
})
//탑버튼 클릭시
topBtn.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" })
})

/* 전체메뉴*/
const mega = document.querySelector(".mega");
const menuBtn = document.querySelector(".menu");

function toggleMenu() {
  mega.classList.toggle("open");
}

window.addEventListener("click", (e) => {
  const isClickInside = mega.contains(e.target);//메뉴 내부 클릭 여부
  const isClickMenuBtn = menuBtn.contains(e.target);//메뉴버튼 클릭
  // console.log(isClickInside, isClickMenuBtn)

  if (!isClickInside && !isClickMenuBtn) {
    mega.classList.remove("open");
  }
})

/*로그인 모달창*/
const login = document.querySelector("#login");

function popup() {
  login.style.display = "block"
}
function pClose() {
  login.style.display = "none"
}

const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content > form");

tabs.forEach((tab, index) =>
  tab.addEventListener("click", function () {
    //console.log(index)
    tabs.forEach(tab => tab.classList.remove("active"));
    tab.classList.add("active");

    tabContent.forEach(form => form.style.display = "none")
    tabContent[index].style.display = "block";
  })
)
/*물음표 버튼 클릭시 안내 팝업창*/

const question = document.querySelector("#question-popup");
const qBtns = document.querySelectorAll(".qBtn");
const qclose = document.querySelector(".qclose");

qBtns.forEach(qBtn => {
  qBtn.addEventListener("click", () => {
    question.style.display = "block"
  })
})

//닫기 버튼 클릭시
qclose.addEventListener("click", () => {
  question.style.display = "none"
})
/*하트버튼 클릭시 이미지 교체*/
const hearts = document.querySelectorAll(".pic > .heart");

hearts.forEach(heart => heart.addEventListener("click", () => {
  let pNum = heart.getAttribute("src").substr(-5, 1)
  if (pNum == 1) {
    heart.setAttribute("src", `images/heart2.png`)
  } else {
    heart.setAttribute("src", `images/heart1.png`)
  }
}))

/*이미지 클릭시 대표이미지 창으로 변경되는 이벤트*/
const pics = document.querySelectorAll(".s-img img");
const tImg = document.querySelector(".t-img img");

pics.forEach(pic => {
  pic.addEventListener("click", (e) => {
    e.preventDefault()

    // 클릭한 이미지의 src 저장
    const imgUrl = pic.getAttribute("src");

    // 현재 대표 이미지의 src를 클릭한 이미지에 적용
    pic.src = tImg.src;

    // 대표 이미지 변경
    tImg.src = imgUrl;
  })
})

/*예약하기 버튼 클릭시 로그인 팝업창*/
const loginPopup = document.querySelector("#login-popup");
const bookBtn = document.querySelectorAll(".price h3");
const no = document.querySelector(".no");
const yes = document.querySelector(".yes");

bookBtn.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    loginPopup.style.display = "block"
    // console.log("예약하기 버튼 클릭됨!");
  })
})

no.addEventListener("click", () => {
  loginPopup.style.display = "none"
})
yes.addEventListener("click", () => {
  loginPopup.style.display = "none"
  login.style.display = "block"
})

/*탭메뉴 클릭시 각 메뉴가 보여지게 해줘*/
const tabMenu = document.querySelectorAll(".tab-btn.on");
const content = document.querySelectorAll(".tab-btn-content");
tabMenu.forEach((tab, idx) => {
  tab.addEventListener("click", () => {

    tabMenu.forEach(t => t.classList.remove("active"))
    tab.classList.add("active");
    content.forEach(c => c.style.display = "none")
    content[idx].style.display = "block"

  })
})

tabMenu[0].classList.add("active")
content[0].style.display = "block"
