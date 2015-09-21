$(function() {
  $('.navbar').load('../navbar.html');
  $('#landing').load('../landing.html');
  
});

$(window).load(function() {
	console.log("beige");
  $(".navbar").on("click", "a", function(event){
  	event.preventDefault();
  	$("#landing").hide();
  	$(".main-content").remove();
  	var link = $(this).attr("href");
  	var request = $.ajax({url: link});
  	request.done(function(response){
  		console.log(response);
	  	if(link == "http://peterhinners.github.io/entries.html"){
	  		console.log("pink");
	  		console.log(link);
	  		$(".main-content").append(response);
	  		$(".main-content").show();
	  		
	  	} else if (link == "http://peterhinners.github.io/project-description.html"){
	  		console.log("dog");
	  		$(".main-content").append(response);
	  		$(".main-content").show();
	  	}
  	});
  	
	});
});

