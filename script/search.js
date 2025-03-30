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
  /*메인페이지로 이동*/
  document.querySelector(".logo").addEventListener("click", function () {
    window.location.href = "index.html";
  })

  /*top-btn*/
  const topBtn = document.querySelector(".top-btn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
      topBtn.style.opacity = "1";
    } else {
      topBtn.style.opacity = "0"
      // topBtn.style.display = "none";
    }
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

  /*필터*/
  const tab = document.querySelector(".result-container > .left-result > ul > li > span");
  const content = document.querySelector(".result-container > .left-result > ul > li > form");
  tab.addEventListener("click", () => {
    content.classList.toggle("show")
  })

  /*하트버튼 클릭시 이미지 교체*/
  const hearts = document.querySelectorAll(".star > .heart");

  hearts.forEach(heart => heart.addEventListener("click", () => {
    let pNum = heart.getAttribute("src").substr(-5, 1)
    if (pNum == 1) {
      heart.setAttribute("src", `images/heart2.png`)
    } else {
      heart.setAttribute("src", `images/heart1.png`)
    }
  }))

  /*지도로보기*/
  const mapBtn = document.querySelector(".view-map");
  const mapModal = document.querySelector("#map");
  const cBtn = document.querySelector(".cBtn");

  mapBtn.addEventListener("click", (e) => {
    mapModal.style.display = "block"
    mapModal.style.opacity = "1"
  })
  cBtn.addEventListener("click", () => {
    mapModal.style.display = "none"
  })
  mapModal.addEventListener("click", (e) => {
    if (e.target === mapModal) {
      mapModal.style.display = "none"; // 모달 바깥을 클릭하면 닫힘
    }
  });
