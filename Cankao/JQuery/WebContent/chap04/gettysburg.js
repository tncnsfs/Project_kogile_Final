$(function() {
	var $speech = $('div.speech');
	var defaultSize = $speech.css('fontSize');

	//	alert(defaultSize);
	$('#switcher button').click(function() {
		var num = parseInt($speech.css('fontSize')); //12px

		switch (this.id) {
		case "switcher-large":
			num *= 1.2;
			break;
		case "switcher-small":
			num /= 1.2;

			break;
		default:
			num = parseInt(defaultSize);
			break;
		}

		$speech.animate({
			fontSize : num + 'px'
		}, 'slow');

	});
});

$(function() {
	$('div.label').click(function() {
		var pWidth = $('div.speech p').outerWidth();//패딩포함, outerWidth(true)마진 포함 
		var divWidth = $('#switcher').outerWidth();
		num = parseInt(pWidth) - parseInt(divWidth);

		$('#switcher').fadeTo('fast', 0.5).animate({
			marginLeft : num
		}, 'slow').fadeTo("fast", 1.0).slideUp('slow', function() {
			$(this).css('background', 'red');
		}).slideDown('slow');

	});

	$(function() {
		//	2번째 p태그를 숨기세요. 
		//	slideToggle('slow'), readmore 클릭시 유무 
		//	read more 클릭후 열림 <-> read less클릭후 닫힘 => text() 함수로
		// /innerHTML/html 가능 

		$('div.speech p').eq(1).hide('slow');
		$('a.more').click(function() {
			$('p:eq(1)').slideToggle('slow');
			var $link = $(this);
			if($link.text() == 'read more'){
				$link.text('read less');
			}else{
				$link.text('read more');
			}
		})

	});
});
