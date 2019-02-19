(function($){
	$(function(){
		$('#insertCheck').on('click', function(){
			insertCheck();
		})
		
		checklist();
	});
	
	function insertCheck(){
		const data= {
				p_no : $('#p_no').val(),
				check_title : $("input[name=check_title]").val()
		};
		
		console.log(data);
		
		$.ajax({
			contentType : "application/json; charset=utf-8", 
			data : JSON.stringify(data),
			type : 'POST',
			dataType : 'JSON',
			url : "/kogile/checklist/new"
		}).then(function(res){
			console.log("성공");
		}).catch(function(e){
			console.log(e);
		});
	}
	
	function checklist(){
		var p_no = $('#p_no').val()
		
// /kogile/checklist/pages/{p_no}/{page}
		$.getJSON("/kogile/checklist/pages/" + p_no + "/1" + ".json")
			.then(function(data){
				console.log(data);
				
			for (var i =0; i<data.length; i++){
			var txt = '';
			txt += '<div>';
			txt += data.check_title;
			txt += '</div>';
				
				if(data.p_no == null){
					$('div').find('#checklist').html(txt);
				}else{
					$('div').find('#checklist').html(txt);
				}
			}
		}).catch(function(err){
			console.log(err);
		})
	}
	// 자동 입력되게 하기
})(jQuery)

	console.log("CheckList Module...");
	