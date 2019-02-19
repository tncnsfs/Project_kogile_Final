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



// step05
/*$(function(){
	$('#letter-e a').click(function(){
		$.get('server3.jsp', {'term': $(this).text()}, function (data) {
			$('#dictionary').html(data);
		});
		
		return false;
	});
});*/


// step04
/*$(function(){
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
});*/


// step03
/*$(function(){
	$('#letter-c a').click(function(){
		$.getScript('c.js');
		return false;
	});
});*/


/*// step02_1(ajax()이용)
/*	{
		"No.": 76,
		"Technical": "도배",
		"career": "5년(완전..",
		"area": "수원 안성 평택 오산 천안..",
		"car": "유",
		"phone": "0102031.."
	},*/

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



/*$(function(){
//	$('#letter-b a').click(function(){
		$.getJSON('my001.json',function(data){
			$('#dictionary01').empty();
			
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
		});
	});*/

	// step02
	/*$(function(){
	$('#letter-b a').click(function(){
			$.getJSON('b.json',function(data){
				$('#dictionary01').empty();
				$.each(data, function(index, item) {
					var html = '<div class = "entry">';
					html += '<h3 class="term">' + item.term + '</h3>';
					html += '<div class ="part">' + item.part + '</div>';
					html += '<div class = "definition">' + item.definition + '</div>';
					html += '</div>';
					
					$('#dictionary01').append(html);
			});
		});
	});
});*/




// step01

/*$(function(){
		$('#dictionary01').hide().load('proj_001_2.html', function(){
			$(this).fadeIn();
		});
		
		return false;
});*/

/*$(function(){
	$('#letter-a a').click(function(){
		$('#dictionary').hide().load('a.html', function(){
			$(this).fadeIn();
		});
		
		return false;
	});
});
*/
