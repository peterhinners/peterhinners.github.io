$(window).load(function() {
	console.log("hungry");
  $(".entries").on("click", "a", function(event){
  	var link = $(this).attr("href");
  	console.log(link);
  	// event.preventDefault();
  	$(".entries").hide();
    var request = $.ajax({url: link});
    request.done(function(response){
    	console.log(response);
    });
	});
});

