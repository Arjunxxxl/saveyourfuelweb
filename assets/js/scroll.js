
$(document).ready(function()
{
	$("#home").click(function() {
    		$('html, body').animate({
        		scrollTop: $("#myhome").offset().top
    								}, 2000);
			});
	
	$("#vision").click(function() {
    		$('html, body').animate({
        		scrollTop: $("#myvision").offset().top
    								}, 2000);
			});

	$("#about").click(function() {
    		$('html, body').animate({
        		scrollTop: $("#myabout").offset().top
    								}, 2000);
			});

	$("#contact").click(function() {
    		$('html, body').animate({
        		scrollTop: $("#mycontact").offset().top
    								}, 2000);
			});

	$("#app").click(function() {
    		$('html, body').animate({
        		scrollTop: $("#myapp").offset().top
    								}, 2000);
			});

});
