

// $(function() {
//   $('.navbar').load('../navbar.html');
//   $('#landing').load('../landing.html');
// });

// $(window).load(function() {

$(function() {	
	console.log("bar3");

	$('.navbar').load('../navbar.html');
  $('.main-content').load('../landing.html');

	

  $(".navbar").on("click", "a", function(event){
  	if(typeof pauseMusic == 'function') { 
  		pauseMusic();
  		pauseToons();
  		$("#canvas").remove();
			}


  	
  	var link = $(this).attr("href");

  	if(link == "http://peterhinners.github.io" || link == "mailto:peterhinners@gmail.com" || link == "https://www.linkedin.com/in/petehinners" || link == "https://github.com/peterhinners"){
  	} else if(link == "http://peterhinners.github.io/contact.html"){
  		event.preventDefault();
  		console.log("working");
  		var request = $.ajax({url: link});
  		request.done(function(response){
  			$('.navbar').html(response);
  		});
  	}	else if(link == "http://peterhinners.github.io/navbar.html"){
  			event.preventDefault();
  			$('.navbar').load('../navbar.html');
  	} else {
	  	event.preventDefault();
	  	var request = $.ajax({url: link});
	  	request.done(function(response){
		  		$(".main-content").html(response);
		  		window.scrollTo(0,0);
	  	});
	  }
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

