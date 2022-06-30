$(document).ready(function(){
	// 메인 슬라이드 영역
	$('#mainVisual').slick({
		autoplay: true,
		arrows: false,
		fade: true
	});
	$('.main_hallsilder').slick({
		dots: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 1178,
				settings: {
					arrows: false
				}
			}
		]
	});
	// 비전 슬라이드 영역
	$('.visionsdlr').slick({
		dots: true,
		arrows: true,
		centerMode: true,
		centerPadding: '325px',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 1178,
				settings: {
					arrows: true,
					centerMode: false,
					centerPadding: '0'
				}
			}
		]
	});
	// 다니엘TV 슬라이드 영역
	$('.subvis_slider').slick({
		autoplay: false,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1178,
				settings: {
					arrows: false
				}
			}
		]
	});

	// 다니엘TV whats new 슬라이드 영역
	$('.dtvslider').slick({
		arrows: true,
		dots: false
	});

	// 다니엘TV 방송프로그램 슬라이드 영역
	$('.onair_progslider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		centerPadding: '20px',
		variableWidth: true
	});
});