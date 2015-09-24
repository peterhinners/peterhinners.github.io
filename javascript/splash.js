


// $(function() {
//   $('.navbar').load('../navbar.html');
//   $('#landing').load('../landing.html');
// });

$(window).load(function() {

	console.log("oops");

	// $('#landing').load('../landing.html');

  $(".navbar").on("click", "a", function(event){
  	event.preventDefault();
  	if(typeof pauseMusic == 'function') { 
  		pauseMusic();
  		pauseToons();
			}
  	$("#landing").hide();
  	$("#canvas").remove();
  	var link = $(this).attr("href");
  	var request = $.ajax({url: link});
  	request.done(function(response){
	  	if(link == "http://peterhinners.github.io"){
	  		$(".main-content").html("");
	  		$("#landing").show();
	  		window.scrollTo(0,0);
	  	} else {
	  		$(".main-content").html(response);
	  		window.scrollTo(0,0);
	  	}
  	});
	});

	$(".main-content").on("click", "a", function(event){
		var link = $(this).attr("href");
		if(link == "http://catbreak.herokuapp.com" || link == "http://devbootcamp.com/"){
			}	else if(link == "http://peterhinners.github.io/blog/TomJerry.html"){
				event.preventDefault();
				var request = $.ajax({url: link});
			  request.done(function(response){
			  	$(".main-content").html(response);
			  });
			}	else {
				event.preventDefault();
				var request = $.ajax({url: link});
			  request.done(function(response){
			  	$(".main-content").html(response);
				  window.scrollTo(0,0);
				});
		}	
	});
});

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

