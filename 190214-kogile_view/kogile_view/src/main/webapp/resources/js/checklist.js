

console.log("Checklist ... Module")

var checklistService = (function() {
	
	// 1번 테스트
	/*return {name: "AAAA"};*/
	
	// 2번 테스트
	/*function add(check_title, callback){
		console.log("check_title......");
	}
	
	return {add:add};*/
	
	function add(check_title, callback, error){
		
		$.ajax({
			type: 'post',
			url : '/checklist/new',
			data: JSON.stringify(check_title),
			contentType : "application/json; charset=utf-8",
			success : function(result, status, xhr) {
				if(callback){
					callback(result);
				}
			},
			error : function(xhr, status, er) {
				if(error){
					error(er);
				}
			}
		})
	}
	return {
		add : add
	}
	
})();