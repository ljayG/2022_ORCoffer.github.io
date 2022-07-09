const Wrapper = document.querySelector("#wrapper");

// 탭메뉴
const TabList = document.querySelectorAll(".tab-menu .list li");
const TabContents = document.querySelectorAll(".tab-view .tab-cont");
let activeCont = ""; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for (var i = 0; i < TabList.length; i++) {
  TabList[i].querySelector(".tab-btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < TabList.length; j++) {
      // 나머지 버튼 클래스 제거
      TabList[j].classList.remove("current");

      // 나머지 컨텐츠 display:none 처리
      TabContents[j].classList.remove("active");
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add("current");

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).classList.add("active");
  });
}

$.datepicker.setDefaults({
  dateFormat: "yy-mm-dd",
  prevText: "이전 달",
  nextText: "다음 달",
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
  showMonthAfterYear: true,
  yearSuffix: "년",
});

$(function () {
  $(".datepicker").datepicker();

  $(".popwrap").popup({
    scrolllock: true,
    transition: "all 0.3s",
  });

  $("#searchDateType").change(function () {
    let result = $("#searchDateType option:selected").val();
    let selector = $(".date-select");
    selector.removeClass("on");
    $("#" + result).addClass("on");
  });
});

const MemoWrt = document.querySelectorAll(".memowrt--btn");
const MemoPop = document.querySelector(".memowrite");

for (var i = 0; i < MemoWrt.length; i++) {
  MemoWrt[i].addEventListener("click", function (e) {
    e.preventDefault();
    if (!MemoPop.classList.contains("wrtopen")) {
      MemoPop.classList.add("wrtopen");
    } else {
      MemoPop.classList.remove("wrtopen");
    }
  });
}
