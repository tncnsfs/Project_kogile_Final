$(function(){
	var $container = $('.slideshow');				// 슬라이더 쇼 전체 컨테이너 
	var $slideGroup = $('.slideshow-slides'); 		//슬라이더 그룹 
	var $slides = $slideGroup.find('.slide'); 		// 각각의 슬라이드 이미지 
	var $nav = $container.find('.slideshow-nav');	// 네비게이션(prev,next)
	var $indicator = $container.find('.slideshow-indicator'); // 인디게이터 
	
	var currentIndex = 0;
	var indicatorHTML = '';
	var timer;
	
	
	$slides.each(function(i) {
		$(this).css({
			left: 100 * i + '%'
		});
		indicatorHTML += '<a href = "#">' + (i+1) + '</a>';
	});
	
	$indicator.html(indicatorHTML);
	
	// 인디게이터 이벤트 걸기 
	$indicator.on('click', 'a',function(event){
		event.preventDefault();
		goToSlide($(this).index());
	});
	
	// 슬라이드 이동함수 
	function goToSlide(index){
		$slideGroup.animate({
			left: -100 * index + '%'
		}, 500);
		currentIndex = index;
		updateNav();
	}
	
	// 네비게이션 업데이트 
	function updateNav(){
		var $navPrev = $nav.find('.prev');
		var $navNext = $nav.find('.next');
		
		if(currentIndex == 0){
			$navPrev.addClass('disabled');
		}else{
			$navPrev.removeClass('disabled');
		}
	
		if(currentIndex == 3){
			$navNext.addClass('disabled');
		}else{
			$navNext.removeClass('disabled');
		}

	}
	
	// 네비게이션 이벤트 
	$nav.find('a').click(function(event) {
		event.preventDefault();
		if($(this).hasClass('prev')){// prev => 음수
			goToSlide(currentIndex -1);
		}else{						// next => 양수 
			goToSlide(currentIndex + 1);
		}
	});
	
	//타이머 시작함수
	function startTimer() {
		timer = setInterval(function() {
			nextIndex = (currentIndex + 1)%4;
			goToSlide(nextIndex);
		}, 2000)
	}
	
	// 타이머 정지함수 
	function stopTimer(){
		clearInterval(timer);
	}
	
	// $container
	$container.on({
		mouseenter : stopTimer,
		mouseleave : startTimer
	});
	
	startTimer();
	updateNav();
	
});





















