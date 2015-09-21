$(function() {
  $('.navbar').load('../navbar.html');
  $('#landing').load('../landing.html');
  
});

$(window).load(function() {
	console.log("808");
  $(".navbar").on("click", "a", function(event){
  	event.preventDefault();
  	$("#landing").hide();
  	$("#canvas").remove();
  	$("#audiotag1").pause();
  	$("#audiotag1").currentTime = 0;
		$("#audiotag2").pause();
  	$("#audiotag2").currentTime = 0;
  	var link = $(this).attr("href");
  	var request = $.ajax({url: link});
  	request.done(function(response){
	  	if(link == "http://peterhinners.github.io"){
	  		$(".main-content").html("");
	  		$("#landing").show();
	  		
	  	} else {
	  		$(".main-content").html(response);
	  	}
  	});
	});

	$(".main-content").on("click", "a", function(event){
		var link = $(this).attr("href");
		sound.pause();
		sound.currentTime = 0;
		if(link == "http://catbreak.herokuapp.com"){
			// } else if(link == "http://peterhinners.github.io/blog/TomJerry.html"){
			// event.preventDefault();
			// $(".navbar").hide();
			// // $(".main-content").html("");
			// var request = $.ajax({url: link});
			//   request.done(function(response){
			//   	// $(".navbar").hide();
			//   	$(".main-content").html(response);
			//   });
			}	else {
			event.preventDefault();
			$(".main-content").html("");
			var request = $.ajax({url: link});
			  request.done(function(response){
			  	$(".main-content").html(response);
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

