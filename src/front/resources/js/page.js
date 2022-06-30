$(document).ready(function(){
	// 나노스크롤
	$(".nano").nanoScroller();

	$(".tbview-openlink").bind('click',function(e){
		e.preventDefault();
		var tdview = $(this).parent().parent().next('.viewtd');
		$(".tbl-onview").find(".viewtd").removeClass('open');
		if(tdview.hasClass('open') == false){
			tdview.addClass('open');
		} else {
			tdview.removeClass('open');
		}
	});

	// 아코디언 메뉴1
	$('.acd_list1 > dt > a').bind('click',function(e){
		e.preventDefault();
		if($(this).parent('dt').hasClass('open') == false){
			$(this).parent('dt').addClass('open');
		} else {
			$(this).parent('dt').removeClass('open');
		}
	});

	// 내지역교회 찾기 검색창 제어
	$('.bt_mymapsta').bind('click', function(e) {
		e.preventDefault();
		$('.mymap_aerasrhfrm').toggleClass('opened');
	});

	// 내지역교회 클릭시 리스트 노출
	$(".myarea_btmbtn > a").bind('click',function(e){
		e.preventDefault();
		var element = $("#mobileMap").height();
		var mstatus = $("#mobileAreaList").hasClass('active');

		if ( mstatus == false) {
			$("#mobileAreaList").css('height', $("#mobileMap").height()-42).addClass('active');
		} else {
			$("#mobileAreaList").css('height', 'auto').removeClass('active');
		}
	});

	/* FAQ */
	$('.faq_list ul li .title').bind('click' , function(e){
		e.preventDefault();
		$('.faq_list ul li').removeClass('active');
		$(this).parent('li').addClass('active');
	});

	// 앵커 이동
	$('.agrwrap .agr_cate a[href*=\\#]').on('click', function(e){
		e.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	// 상단 내 버튼 클릭시
	$("#headMypage").bind('click' , function(e){
		e.preventDefault();
		$('.lang_menu .mymenu').toggleClass('active');
	});

	//전체검색 펼침
	$('.allsearch_btn').click(function(){
		$('#allsearch').stop().addClass('on').animate({left:0,"opacity":1},400);			
	});
	$('#allsearch_close_btn').click(function(){
		$('#allsearch').stop().removeClass('on').animate({left:"-100%","opacity":0.5},400);
	});

	$('#btnNetArea').bind('click', function(e){
		e.preventDefault();
		$('.netarea_wrap').addClass('on');
	});
	$('#btnNetAreaColose').bind('click', function(e){
		e.preventDefault();
		$('.netarea_wrap').removeClass('on');
	});

	// 앱부분 글쓰기 버튼 클릭
	$("#appBtnWrite, #appBtnWriteClose").bind('click', function(e){
		e.preventDefault();
		$('#frmWriteArea').toggleClass('appshow');
	});


	// 앱부분 댓글보기 버튼 클릭
	$(".btn_apprepfrm").bind('click', function(e){
		e.preventDefault();
		$('.appreply_afrm').removeClass('appshow');
		$(this).parent('.ap_actbtnwrap').next('.appreply_afrm').toggleClass('appshow');
	});


	// hash smooth scroll
	$(".scroll-down, .top").bind('click', function(e) {
	//	event.preventDefault();
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({scrollTop: $(hash).offset().top}, 500, function(){});
	});

});
