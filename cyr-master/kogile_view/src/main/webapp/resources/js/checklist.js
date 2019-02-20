(function($){
	$(function(){
		$('#insertCheck').on('click', function(){
			insertCheck();
		})
		
		
		checklist();
		
		
		
//		성공 
//		ckRemove(43); 
		
		
/*		$('#cklist').on('click', "#ck_no01", function(){
			console.log(ck_no01);
			ckRemove();
		});*/
		
		
		$('#cklist').on('click', "div div", function(){
			console.log($(this));
			
			
			var checklist_no = $(this).find("input[name='checklist_no']").val();
			
			console.log("콘솔" + checklist_no);
			ckRemove(checklist_no);
		});
		
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
		$.getJSON("/kogile	/checklist/pages/" + p_no + "/1"  + ".json")
			.then(function(data) {
				console.log(data);
				
			data.sort(function(a,b){
				if(a.no > b.no){
					return 1;
				}else{
					return -1;
				}
			})	

			// 깃에 추가 될대 12.52
			var txt = '<div id = "cklist01">'; 
			for(var i = 0; i<data.length; i++){
				
				txt += '<div class = input_check>' + data[i].check_title;  
//				txt += '<input type="hidden" id= ck_no01 name="checklist_no" value="'+ data[i].checklist_no + '"/>';
				txt += '<input type="hidden" name="checklist_no" value="'+ data[i].checklist_no + '"/>';
				txt += '<input type="hidden" name="checklist_no" value="'+ data[i].checklist_no + '"/>';

				
				txt += '<input type="hidden" name="check_title" value="'+ data[i].check_title +'"/>';
				txt += '<input type="hidden" name="p_no" value="'+ data[i].p_no +'"/>';
				txt += '</div>';  
				txt += '<textarea class="field" dir="auto">';
				txt += '</textarea>';
			}
				txt += '</div>';
				
				$("#cklist").html(txt);
			});
	}
	
	function ckRemove(checklist_no){
		
		console.log("일반콘솔" + checklist_no);
		
		$.ajax({
			type : 'delete',
			url : "/kogile/checklist/" + checklist_no,
			contentType : "application/json; charset=utf-8", 
//			dataType : 'JSON'
			
		}).then(function(data){
			console.log("성공");
			checklist();
			
		}).catch(function(e){
			console.log(e + "에러났어요..");
		});
	}
			

	
})(jQuery)

	console.log("CheckList Module...");
	