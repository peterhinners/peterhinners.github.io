$(function() {
  $('.navbar').load('../navbar.html');
  $('#landing').load('../landing.html');
  
});

$(window).load(function() {
	console.log("madrid");
  $(".navbar").on("click", "a", function(event){
  	event.preventDefault();
  	$("#landing").hide();
  	$(".main-content").html("");
  	$("#canvas").remove();
  	var link = $(this).attr("href");
  	var request = $.ajax({url: link});
  	request.done(function(response){
  		console.log(response);
	  	if(link == "http://peterhinners.github.io"){
	  		$(".main-content").html("");
	  		$("#landing").show();
	  		
	  	} else {
	  		console.log("dog");
	  		$(".main-content").html(response);
	  	}
  	});
	});

	$(".main-content").on("click", "a", function(event){
		var link = $(this).attr("href");
		console.log(link);
		event.preventDefault();
		$(".main-content").html("");
		var request = $.ajax({url: link});
		  request.done(function(response){
		  	console.log(response);
		  	$(".main-content").html(response);
		  });
	});
  	


});

