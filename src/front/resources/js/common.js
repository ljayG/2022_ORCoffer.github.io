$(window).ready(function(){
	ShowMobileMenu();
	devChk();
	topFixed_m();

	/* location */
	$('.location_txt').on('click' , function(e){
		e.preventDefault();
		if ($(this).parents('.location_list').is('.on')){
			$('.location_list').removeClass('on');
		}else{
			$(this).parents('.location_list').addClass('on').siblings('.location_list').removeClass('on');
			$(this).find('ul').focus();
		}	
	});

	$('.input_box .text, .textarea_box textarea, .select_box select').on('focus' , function(){
		$('.input_box').removeClass('on');
		$('.textarea_box').removeClass('on');
		$(this).parents('.input_box').toggleClass('on');
		$(this).parents('.textarea_box').toggleClass('on');
		$(this).parents('.select_box').toggleClass('on');
	}).blur(function(){
		$(this).parents('.input_box').removeClass('on');
		$(this).parents('.textarea_box').removeClass('on');
		$(this).parents('.select_box').removeClass('on');
	})

	$('.gnb_menu_pc li').on('mouseover' , function(){
		$('.gnb_menu_pc li').removeClass('active');
		$(this).addClass('active');
	});

	$('.gnb_menu_pc li').on('mouseleave' , function(){
		$(this).removeClass('active');
	});

	$( '.btn_Top a' ).click( function() {
	  $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	  return false;
	});


});



/* GNB mobile */
var winH = $(window).height();
var _hChk = function(){
	var winH2 = $(window).height();
	var _openmenuH = $('.header_gnbwrap').outerHeight(true);
	var _hsel = Math.max(_openmenuH,winH2);
	$('#wrap').height(_hsel);
	$('.pos_wrap').height(_hsel);
};

function menuAreaClose(){
	$('.pos_wrap').removeClass('open_menu');
	$('body').removeClass('mobilemenu-open');
	$('.gnb_menu li').removeClass('active');
	$('.dimd').hide();
	$("body").css({overflow:''}).unbind('touchmove');
};

function ShowMobileMenu(){
	$('#gnbMenu').on('click' , function(e){
		$('.pos_wrap').addClass('open_menu');
		$('body').addClass('mobilemenu-open');
		$('.dimd').show();
		_hChk();

		$('.dimd').on("touchstart",function(e){
			menuAreaClose();
			return false;
		});
	});

	$('.gnb_title').on('click' , function(e){
		var _this = $(this);
		if (_this.parent('li').is('.active')){
			$('.gnb_menu li').removeClass('active');
			
		}else{
			$('.gnb_menu li').removeClass('active');
			$(_this).parents('li').addClass('active');
		}
		_hChk();
	});
	$('.btn_close').on('click' , function(e){
		menuAreaClose();
	});

	var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';
	$(window).on(transitionEnd,function(){
	  if (!$('.open_menu').get(0)) {
		$('#wrap').css('height' , '');
		$('.pos_wrap').css('height' , '');
	  }
	});
	var ajaxClearTimer;
	$(window).on("orientationchange", function(event){
		clearTimeout(ajaxClearTimer);
		ajaxClearTimer = setTimeout(function(){
			if ($('.open_menu').get(0)) {
				_hChk();
			} 
		},50);
	});
};



/* GNB web */
function _Gnbpc(){
	var gnbPc = $('.header_pc').find('#header');
	$('.gnb_menu_pc').on('mouseover' , function(){
		gnbPc.stop().animate({'height' : '452'}, 400);
		gnbPc.addClass('gnb_open');
	});
	gnbPc.on('mouseleave' , function(){
		gnbPc.stop().animate({'height' : '94'}, 400);
		var timer =  setInterval(function () {
			clearInterval(timer);
			gnbPc.removeClass('gnb_open');
		}, 210);
	});
};

function devChk(){
	var winWidth = $(window).width();
	if (winWidth >= 1148){//web
		mapTab();
		return _Gnbpc()
	}else{//mobile
		mapTab_m();
		agencyTab_m();
	}
}

$(window).resize(function() {
	var winHeight = $(window).height();
	var winW = $(window).width();
	if (winW < 1148){
		$('#header').css('height' , '42');
	}else{
		_Gnbpc()
		$('#header').css('height' , '94');
	}
});


/* btn top */
function topFixed_pc(){
	var footerTop_Pc = $('#footer').offset().top - 30;
	if ($(window).scrollTop() + $(window).height() >= footerTop_Pc){
		$('.btn_Top').css('bottom', + ($(window).scrollTop() + $(window).height() - footerTop_Pc))
	}else{
		$('.btn_Top').css('bottom', '30px');
	}
}

function topFixed_m(){
	var footerTop_m = $('#footer').offset().top - 15;
	if ($(window).scrollTop() + $(window).height() >= footerTop_m){
		$('.btn_Top').css('bottom', + ($(window).scrollTop() + $(window).height() - footerTop_m))
	}else{
		$('.btn_Top').css('bottom', '15px');
	}
}


$(window).scroll(function(){
	var _scrollTop = $(this).scrollTop();
	var _winW = $(window).width();

	if (_winW < 1148){
		topFixed_m();
	}else{
		topFixed_pc();
		if (_scrollTop > 429){
			$('#location').addClass('fixed');
		}else{
			$('#location').removeClass('fixed');
		}
	}
});



/* 정보광장 지도탭 */
function mapTab_m(){
	$('.map_tab').each(function(){
		$('.map_tab .title').on('click' , function(e){
			e.preventDefault();
			$(this).parents('.map_tab').toggleClass('on');
			$(this).next('ul').slideToggle()
		});
		
		$('.map_tab ul li a').on('click' , function(e){
			e.preventDefault();
			$('.map_tab ul li').removeClass('active');
			$(this).parents('li').addClass('active');
			if ($(this).parents('li').is('.active')){
				var _title = $('.map_tab ul li.active a').text();
				$('.map_tab .title a').text(_title);
				$('.map_tab').removeClass('on');
				$(this).parents('ul').slideUp();
			}
		});
	});
}

function mapTab(){
	$('.map_tab ul li a').on('click' , function(e){
		e.preventDefault();
		$('.map_tab ul li').removeClass('active');
		$(this).parents('li').addClass('active');
	});
}

function agencyTab_m(){
	$('.agency_tab').each(function(){
		$('.agency_tab .title').on('click' , function(e){
			e.preventDefault();
			$(this).parents('.agency_tab').toggleClass('on');
			$(this).next('ul').slideToggle()
		});
		
		$('.agency_tab ul li').on('click' , function(){
			$('.agency_tab ul li').removeClass('active');
			$(this).addClass('active');
		});
	});

	$('.disposal_tab').each(function(){
		$('.disposal_tab .title').on('click' , function(e){
			e.preventDefault();
			$(this).parents('.disposal_tab').toggleClass('on');
			$(this).next('ul').slideToggle()
		});
		
		$('.disposal_tab ul li').on('click' , function(){
			$('.disposal_tab ul li').removeClass('active');
			$(this).addClass('active');
		});
	});
}


var ddm = {
	body : function(type , cont){
		var layer = $("<div>");
		layer.addClass("alertWrap w420 " + type);
		var htm = "";
		htm += '';
		htm += '<div class="layerBody">';
		htm += '	<div class="layerContWrap">';
		htm += '		<div class="layerCont">';
		if(cont) htm += cont;
		htm += '		</div>';
		htm += '	</div>';
		if(type == 'alert' || type == 'alert2'){
			htm += '		<div class="alert_btn">';
			htm +=	'		<a href="#" class="alertBtn"><span class="">확인</span></a>';
			htm += '		</div>';
		}else{
			htm += '		<div class="confirm_btn">';
			htm +=	'		<a href="#" class="confirmTrue"><span class="">확인</span></a>';
			htm +=	'		<a href="#" class="confirmFalse"><span class="">취소</span></a>';
			htm += '		</div>';
		}
		htm += '</div>';
		layer.html(htm)

		function setHeight(){
			if($(".layerBody").height() > 60){
				var hei = $(".layerBody").height();
				$(".layerBody").css({
					top: ($("body").height()/2) - (hei/2)
				})
			}else{
				setTimeout(function(){
					setHeight()
				},30)
			}
		}
		DimmLayer.show();
		$("body").append(layer);
		setHeight();
		return layer;
	}
	,alert : function(ment){
        if(typeof ment != "string"){
            var ment = ment.ment
        }
        var body = this.body("alert", ment );
        $(".alertBtn").click(function(){
            body.remove();
            DimmLayer.close();
        });

    }
    ,alert2 : function(mess){
        var ment = mess.ment;
        var body = this.body("alert2", ment );
        $(".alertBtn").click(function(){
            body.remove();
            DimmLayer.close();
            mess["true"]();
        });
	}
	,confirm : function(mess){
		var ment = mess.ment;
		var body = this.body("confirm", ment );
		$(".confirmTrue").click(function(){
			body.remove();
			DimmLayer.close();
			mess["true"]();
		});
		$(".confirmFalse").click(function(){
			body.remove();
			DimmLayer.close();
			mess["false"]()
		});

	}
}
