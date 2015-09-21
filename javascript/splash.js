$(function() {
  $('.navbar').load('../navbar.html');
  $('#landing').load('../landing.html');
  
});

$(window).load(function() {
	console.log("purple");
  $(".navbar").on("click", "a", function(event){
  	event.preventDefault();
  	var link = $(this).attr("href");
  	console.log(link);
  	if(link == "http://peterhinners.github.io/blog/index.html"){
  		console.log("pink");
  	} else if (link == "http://peterhinners.github.io/blog/projects.html"){
  		console.log("dog");
  	}
  	$("#landing").hide();
  	$(".main-content").hide();
    var request = $.ajax({url: link});
    request.done(function(response){
    	console.log(response);
    	$(".main-content").append(response);
    	$(".main-content").show();
    });
	});
});

