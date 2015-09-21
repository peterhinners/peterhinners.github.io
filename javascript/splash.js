$(function() {
  $('.navbar').load('../navbar.html');
  $('#landing').load('../landing.html');
});

$(window).load(function() {
	console.log("black");
  $(".navbar").on("click", "a", function(event){
  	var link = $(this).attr("href");
  	console.log(link);
  	event.preventDefault();
  	$("#landing").toggle();
    var request = $.ajax({url: link});
    request.done(function(response){
    	console.log(response);
    	$(".main-content").append(response);
    });
	});
});

