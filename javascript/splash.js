$(function() {
  $('.navbar').load('../navbar.html');
  $('#landing').load('../landing.html');
  
});

$(window).load(function() {
	console.log("teal");
  $(".navbar").on("click", "a", function(event){
  	event.preventDefault();
  	$("#landing").hide();
  	$(".main-content").html("");
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
});

