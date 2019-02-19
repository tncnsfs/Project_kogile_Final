(function($){
	$(function(){
		$('#insertCheck').on('click', function(){
			insertCheck();
		})
		
		$('#insertCheck').click(function(){
			checklist();
		})
		
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
		var p_no = $('#p_no').val();
		
		$.getJSON("/kogile/checklist/pages/" + p_no + "/1" + ".json")
			.then(function(data) {
				console.log(data);
				
			data.sort(function(a,b){
				if(a.no > b.no){
					return 1;
				}else{
					return -1;
				}
			})	


			var txt = '<div id = "cklist01">'; 
//				var txt = '';
				for(var i = 0; i<data.length; i++){
					txt += '<li>' + data[i].check_title + '</li>';  
					txt += '<textarea class="field full single-line" dir="auto">';
					txt += '</textarea>';
				}
				txt += '</div>';
				
				$("#cklist").html(txt);
			});
		
		 
	}
	// 자동 입력되게 하기
})(jQuery)

	console.log("CheckList Module...");
	