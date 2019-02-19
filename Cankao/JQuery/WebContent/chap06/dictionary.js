// step06
$(function(){
	$('#letter-f form').submit(function(){ 
		$.ajax({
			url : 'server3.jsp',
			type: 'post',
			dataType: 'text',
			data : $(this).serialize(), // 데이타 값을 전달 
			success : successHandler
		});
		return false;
	});
	
	function successHandler(data){
		$('#dictionary').empty();
		$('#dictionary').html(data);
	};
	
});



// step05
$(function(){
	$('#letter-e a').click(function(){
		$.get('server3.jsp', {'term': $(this).text()}, function (data) {
			$('#dictionary').html(data);
		});
		
		return false;
	});
});


// step04
$(function(){
	$('#letter-d a').click(function(){
		$.get("d.xml", function (data) {
			$(data).find('entry').each(function(index) {
				var $entry = $(this);
				var html = '<div class = "entry">';
				html += '<h3 class="term">' + $entry.attr('term') + '</h3>';
				html += '<div class ="part">' + $entry.attr('part') + '</div>';
				html += '<div class = "definition">' + $entry.find('devinition').text() + '</div>';
				html += '</div>';

				$('#dictionary').append(html);
			})
		});
		return false;
	});
});


// step03
$(function(){
	$('#letter-c a').click(function(){
		$.getScript('c.js');
		return false;
	});
});

// step02_1(ajax()이용)

$(function(){
		$.aj
		$.ajax({
			url : 'b.json',
			type: 'get',
			dataType: 'json',
			
			success : function(data){
				$('#dictionary').empty();
				
				data.sort(function(a,b){
					if(a.term<b.term){
						return 1;
					}else if(a.term > b.term){
						return -1;
					}else{
						return 0;
					}
				});
				
				$.each(data, function(index, item) {
					var html = '<div class = "entry">';
					html += '<h3 class="term">' + item.term + '</h3>';
					html += '<div class ="part">' + item.part + '</div>';
					html += '<div class = "definition">' + item.definition + '</div>';
					html += '</div>';
					
					$('#dictionary').append(html);
				});
			}
		});
		return false;
	});

// step02
/*$(function(){
	$('#letter-b a').click(function(){
			$.getJSON('b.json',function(data){
				$('#dictionary').empty();
				$.each(data, function(index, item) {
					var html = '<div class = "entry">';
					html += '<h3 class="term">' + item.term + '</h3>';
					html += '<div class ="part">' + item.part + '</div>';
					html += '<div class = "definition">' + item.definition + '</div>';
					html += '</div>';
					
					$('#dictionary').append(html);
			});
		});
	});
});*/



// step01
$(function(){
	$('#letter-a a').click(function(){
		$('#dictionary').hide().load('a.html', function(){
			$(this).fadeIn();
		});
		
		return false;
	});
});


