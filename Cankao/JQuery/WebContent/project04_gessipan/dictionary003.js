
// step3 target




// step2 Ajax

$(function(){
		$.ajax({
			url : 'my001_1.json',
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
					
					html += '<table>';
					html += '<tbody id="myTable">';
					
					html += '<tr id = "myList" height="22"  style="cursor:pointer;" >';
					html += '<td width="240px" colspan="11"  class="No">' + item.No + '</td>';
					html += '<td width="265px" colspan="11"  class="Technical">' + item.Technical + '</td>';
					html += '<td width="280px" colspan="11"  class="career">' + item.career + '</td>';
					html += '<td width="500px" colspan="11"  class="area">' + item.area + '</td>';
					html += '<td width="300px" colspan="11"  class="car">' + item.car + '</td>';
					html += '<td width="400px" colspan="11"  class="phone">' + item.phone + '</td>';
					html += '<td height="1" colspan="11" bgcolor="#E5E5E5"></td>';

					html += '</tr>';
					html += '</tbody>';
					html += '</table>';
					html += '</div>';
					
					var $dict01 = $('#dictionary01').append(html);
						  $("#myInput").on("keyup", function() {
						    var value = $(this).val().toLowerCase();
						    $("#myTable tr").filter(function() {
						        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
						    });
						  });
				});
				
			}
		});
		return false;
});


// step 001 click 

/*$(function(){
	$('#letter-b a').click(function(){

		$.ajax({
			url : 'my001_1.json',
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
					
					html += '<table>';
					html += '<tbody>';
					
					html += '<tr height="22"  style="cursor:pointer;" >';
					
					html += '<td width="300px" colspan="11"  class="No">' + item.No + '</td>';
					html += '<td width="200px" colspan="11"  class="Technical">' + item.Technical + '</td>';
					html += '<td width="200px" colspan="11"  class="career">' + item.career + '</td>';
					html += '<td width="400px" colspan="11"  class="area">' + item.area + '</td>';
					html += '<td width="300px" colspan="11"  class="car">' + item.car + '</td>';
					html += '<td width="320px" colspan="11"  class="phone">' + item.phone + '</td>';
					html += '<td height="1" colspan="11" bgcolor="#E5E5E5"></td>';

					html += '</tr>';
					html += '</tbody>';
					html += '</table>';
					html += '</div>';
					
					$('#dictionary01').append(html);
				});
				
				
			}
		});
		return false;
	});
});
*/

