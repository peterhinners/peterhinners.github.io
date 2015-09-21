$(function() {
  $('.navbar').load('../navbar.html');
  $('#landing').load('../landing.html');
  
});

$(window).load(function() {
	console.log("purple");
  $(".navbar").on("click", "a", function(event){
  	var link = $(this).attr("href");
  	console.log(link);
  	event.preventDefault();
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

