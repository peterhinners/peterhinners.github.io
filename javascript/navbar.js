$(function() {
	$("#landing-page").hide();
	console.log("yikes");
  $('.navbar').load('../navbar.html');
  $('.navbar').load(function() {
  	console.log("yippee");
  	$("#landing-page").show();
	});

});