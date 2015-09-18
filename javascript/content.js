$(function() {
	console.log("sweet");
  $(".entries").on("click", "a", function(){
    $(this).text("It works!");
	});
});

