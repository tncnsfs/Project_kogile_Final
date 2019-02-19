$(function() {
	$('<ol id="notes">zzz</ol>').insertBefore('#footer');
	$('span.footnote').each(function(index) {
		$(this).before('<a id="context-'+(index+1)+ '">[' + (index+1) + ']</a>')
				.appendTo('#notes')
				.append('&nbsp; <a href = "#context-'+(index+1)+'">context-'+(index+1)+'</a>')
				.wrap('<li></li>');
				
		
	});
});