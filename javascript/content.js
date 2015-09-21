$(window).load(function() {
	console.log("orange");
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

