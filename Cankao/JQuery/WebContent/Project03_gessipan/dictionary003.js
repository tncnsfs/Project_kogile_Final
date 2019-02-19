


// step06
/*$(function(){
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
	
});*/




// step2 change 


$(function(){
		$.ajax({
			url : 'my001.json',
			type: 'get',
			dataType: 'json',
			success : function(data){
				$('#dictionary01').empty();
				
				data.sort(function(a,b){
					if(a.No > b.No){
						return 1;
					}else if(a.No< b.No){
						return -1;
					}else{
						return 0;
					}
				});
				
				
				$.each(data, function(index, item) {
					var html = '<div class = "my002">';
					html += '<tr>';
					html += '<td colspan="2" align="center">';
					
					html += '<table width="99%"  border="0" cellpadding="0" cellspacing="0">';
					html += '<tbody>';
					
					html += '<tr>';
					html += '<td height="1" colspan="11" bgcolor="#E5E5E5"></td>';
					html += '</tr>';
					
					html += '<tr height="22"  style="cursor:pointer;" >';
					
					html += '<tr>';
					html += '<td colspan="11" style="padding:5px; class="No">' + item.No + '</td>';
					html += '</tr>';

					html += '<tr>';
					html += '<td style="padding:5px; class="Technical">' + item.Technical + '</td>';
					html += '</tr>';
					
					html += '<tr>';
					html += '<td class="career">' + item.career + '</td>';
					html += '</tr>';
					
					html += '<tr>';
					html += '<td style="padding:5px; class="area">' + item.area + '</td>';
					html += '</tr>';

					html += '<tr>';
					html += '<td style="padding:5px; class="car">' + item.car + '</td>';
					html += '</tr>';

					html += '<tr>';
					html += '<td style="padding:5px; class="phone">' + item.phone + '</td>';
					html += '</tr>';
					
					html += '<tr>';
					html += '<td height="1" colspan="11" bgcolor="#E5E5E5"></td>';
					html += '</tr>';

					html += '</tr>';
					html += '</tbody>';
					html += '</table>';
					html += '</td>';
					html += '</tr>';
					html += '</div>';
					
					$('#dictionary01').append(html);
					
				});
				
			}
		});
		return false;
});

/*$(function(){
	$('#letter-b a').click(function(){

		$.ajax({
			url : 'my001.json',
			type: 'get',
			dataType: 'json',
			success : function(data){
				$('#dictionary01').empty();
				
				data.sort(function(a,b){
					if(a.No > b.No){
						return 1;
					}else if(a.No< b.No){
						return -1;
					}else{
						return 0;
					}
				});
				
				$.each(data, function(index, item) {
					var html = '<div class = "my002">';
					html += '<tr>';
					html += '<td colspan="2" align="center">';
					
					html += '<table width="99%"  border="0" cellpadding="0" cellspacing="0">';
					html += '<tbody>';

					html += '<tr>';
					html += '<td height="1" colspan="11" bgcolor="#E5E5E5"></td>';
					html += '</tr>';
					
					html += '<tr height="22"  style="cursor:pointer;" >';
							html += '<td style="padding:5px; class="No">' + item.No + '</td>';
							html += '<td style="padding:5px; class="Technical">' + item.Technical + '</td>';
							html += '<td class="career">' + item.career + '</td>';
							html += '<td style="padding:5px; class="area">' + item.area + '</td>';
							html += '<td style="padding:5px; class="car">' + item.car + '</td>';
							html += '<td style="padding:5px; class="phone">' + item.phone + '</td>';
						html += '</tr>';
						
						html += '<tr>';
	 					html += '<td height="1" colspan="11" bgcolor="#E5E5E5"></td>';
	 					html += '</tr>';
					html += '</tbody>';
					html += '</table>';
					html += '</td>';
					html += '</tr>';
					html += '</div>';
					
					$('#dictionary01').append(html);
				});
				
				
			}
		});
		return false;
	});
});*/


