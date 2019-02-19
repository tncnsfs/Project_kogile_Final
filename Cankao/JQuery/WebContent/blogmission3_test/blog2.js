$('#get').click(function(){
	$.ajax({
		url: 'study01.html',
		type: 'get',
		dataType: 'text',
	success: function(data){
		$('#output').val(data);
		}
	});
});