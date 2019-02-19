//// step1
//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').addClass('large');
//	});
//});


// step2
//removeClass('large')
//$(function() {
//	$('#switcher-large').on('click', function() {
//	$('body').removeClass('narrow').addClass('large');
//});
//	$('#switcher-narrow').on('click', function() {
//		$('body').removeClass('large').addClass('narrow');
//	});
//	$('#switcher-default').on('click', function() {
//		$('body').removeClass('large').removeClass('narrow');
//	});
//});


// step3
// 클릭한 버튼만 selected 스타일이 적용 되도록 
//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').removeClass('narrow').addClass('large');
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//	});
//	$('#switcher-narrow').on('click', function() {
//		$('body').removeClass('large').addClass('narrow');
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//	});
//	$('#switcher-default').on('click', function() {
//		$('body').removeClass('large').removeClass('narrow');
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//	});
//
//})


// step 4
// 중복된 코드를 최소화 하기. 

/*$(function() {
	$('#switcher-large').on('click', function() {
		$('body').removeClass('narrow').addClass('large');
	});
	$('#switcher-narrow').on('click', function() {
		$('body').removeClass('large').addClass('narrow');
	});
	$('#switcher-default').on('click', function() {
		$('body').removeClass('large').removeClass('narrow');
	});

	
	$('#switcher .button').on('click', function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		
	})
});*/



/*// step 5
// 중복된 코드를 최소화 하기. 
$(function() {
	$('#switcher .button').on('click', function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
	});
	
	$('#switcher-large').on('click', function() {
		$('body').addClass('large');
	});
	$('#switcher-narrow').on('click', function() {
		$('body').addClass('narrow');
	});
});*/


/*// step 6
// $('#switcher .button') => 모두 포함 => id 로 구별 

$(function() {
	$('#switcher .button').on('click', function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').addClass('large');
		}else if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
		}
	});
});*/



// step 7
// on() => click() 이벤트로 바꾸기 
/*$(function() {
//	$('#switcher .button').on('click', function() {
	$('#switcher .button').click( function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').addClass('large');
		}else if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
		}
	});
});*/

// STEP 8
$(function() {
	$('#switcher .button').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
});



// step 9
// switcher => h3 클릭시 => 버튼 3개가 화면에서 사라지게 하라 . //css .hidden으로 하면 됨 
// h3 를 눌렀을때 

//$(function() {
//	
//	$('#switcher>h3').click(function() {
////		$('#switcher .button').addClass('hidden')
//		$('#switcher .button').toggleClass('hidden')
//	});
//	
//	$('#switcher .button').click( function() {
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		if(this.id == 'switcher-large'){
//			$('body').addClass('large');
//		}else if(this.id == 'switcher-narrow'){
//			$('body').addClass('narrow');
//		}
//	});
//});


// step10
/*$(function() {
	$('#switcher').click(function() {
//		$('#switcher .button').addClass('hidden')
		$('#switcher .button').toggleClass('hidden')
	}); 
	
	$('#switcher .button').click( function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').addClass('large');
		}else if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
		}
		event.stopPropagation();
	});
});*/

//step11
// on(): 통합 이벤트 발생, off(): 이벤트 해제 
// narrow, large 버튼을 클릭 후 버튼이 사라지는 이벤트를 해제 
$(function() {
	$('#switcher').on('click.kosta1',function() {
		$('#switcher .button').toggleClass('hidden')
	}); 
	
//	$('$#switcher').on('click.kosta2', function() {
//		alert('다른 이벤트 결과');
//	});
	
	$('#switcher .button').click( function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').addClass('large');
		}else if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
		}
		event.stopPropagation();
	});
	
	$('#switcher-large, #switcher-narrow').click(function() {
		$('#switcher').off('click.kosta1')
	});
	
	$('#switcher').trigger('click.kosta1');  
	
	
	
});

































