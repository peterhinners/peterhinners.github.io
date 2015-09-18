$(function() {
	$("#landing-page").hide();
	console.log("yeppers");
  $('.navbar').load('../navbar.html');
  $('.navbar').load(function() {
  	$("#landing-page").show();
	});

});