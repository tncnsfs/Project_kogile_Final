(function($){
	$(function(){
		$('#insertCheck').on('click', function(){
			insertCheck();
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
	
})(jQuery)


	console.log("CheckList Module...");
	
//	var ckService = 
		
		/* var ckService = (function(){
				function add(data, callback, error){
			const data = {
				p_no : $('#p_no').val(),
				check_title : $("input[name=check_title]").val()
			}
			console.log("add checklist.=> "+ data);*/
		
		/*$.ajax({
			type : "post",
			url : "/kogile/checklist/new",
			data : JSON.stringify("data"),
			contentType : "application/json; charset=utf-8", 
			
			success : function(result, status, xhr){
				if(callback){
					callback(result);
				}
			},
			error : function(xhr, status, er){
				if(error){
					error(er);
				}
			}
		})
		}
		
			
		return {add:add};
})(jQuery);*/
	