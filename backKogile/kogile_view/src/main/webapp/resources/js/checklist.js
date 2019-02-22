
(function($){

	console.log("===================");
	console.log("===================");
	console.log("test: checklist.js" );
	console.log("===delete List=====");
	console.log("===================");
	console.log("===================");
	
	
/*	$(document).on('click','#delete_list', function() {
		var checklist_no = $(this).parents('div').data('chno');
//		console.log("checklist_no parents: " + checklist_no);
		var list_no = $(this).closest('li').data('lno');
		console.log("list_no클릭:" + list_no);
		
		deleteList(list_no);
		
		listList(checklist_no);
		
	});
		
	function deleteList(list_no){
		console.log("xia-list_no :" + list_no);
		
		$.ajax({
			type : "GET",
			dataType: 'text',
			url: `/kogile/checklist/${list_no}`
		}).then(function(res){
			console.log("성공: " + res);
		}).catch(function(e) {
			console.log(e);
		});
	};*/
	
	
})(jQuery)
