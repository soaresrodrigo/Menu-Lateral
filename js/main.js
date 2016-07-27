$(function(){
	$(".abreMenu").click(function(){
		$(this).toggleClass("rotation");
	});

	$(".submenu").click(function(){
		$(".submenu ul").slideToggle(200);
		$(this).toggleClass("treva");
	});
	$("ul").click(function(p){
			p.stopPropagation();
		});

});
