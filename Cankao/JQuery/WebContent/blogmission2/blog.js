/*$(function(){
	$(window).on('load', function(){
		$.ajax({
			url : 'server.jsp',
			type : 'post',
			dataType : 'json',
			data : $(this).serialize(),
			success : successHandler
		});
	});
	
	function successHandler(data){
		$('div').empty();
		$.each(data, function(index, blog){
			//entry에 배열의 첫번째.. 두번쨰..쭉  데이터가 들어온다
			var html = '<div class="blog">';
			html += '<p class="title">title:' + blog.title + '</h3>';
			html += '<p class = "writer">wirter:' + blog.writer + '</p>';
			html += 'content<br><p class = "contents">' + blog.contents + '</p>';
			html += '</div>';
			
		$('#list').append(html);
		});
	}
});*/


$(function(){
		$('form').submit(function() {
			$.ajax({
				url : 'server.jsp',
				type : 'post',
				dataType : 'json',
				data : $(this).serialize(),
				
				success : successHandler
			});
			return false;
		});
		
		function successHandler(data){
			$('div').empty();
			$.each(data, function(index, blog){
				//entry에 배열의 첫번째.. 두번쨰..쭉  데이터가 들어온다
				var html = '<div class="blog">';
				html += '<p class="title">title:' + blog.title + '</h3>';
				html += '<p class = "writer">wirter:' + blog.writer + '</p>';
				html += 'content<br><p class = "contents">' + blog.contents + '</p>';
				html += '</div>';
				
			$('#list').append(html);
			});
		}
});