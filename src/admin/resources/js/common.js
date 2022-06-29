const Wrapper = document.querySelector('#wrapper');


// 탭메뉴
const TabList = document.querySelectorAll('.tab-menu .list li');
const TabContents = document.querySelectorAll('.tab-view .tab-cont');
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < TabList.length; i++){
    TabList[i].querySelector('.tab-btn').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < TabList.length; j++){
            // 나머지 버튼 클래스 제거
            TabList[j].classList.remove('current');

            // 나머지 컨텐츠 display:none 처리
            TabContents[j].classList.remove('active');
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('current');

        // 버튼 클릭시 컨텐츠 전환
        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).classList.add('active');
    });
}