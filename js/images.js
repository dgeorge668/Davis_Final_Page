$(document).ready(function() {

	$('#pacman').hover(function() {
		$('.med').text("Pacman: Written in Java. Ghosts use a Breadth First Search algorithm to chase Pacman.");
	});
	$('#yelp').hover(function() {
		$('.med').text("Database Client: Written in Java. Can execute protected SQL queries for user to visualize.");
	});
	$('#eliza').hover(function() {
		$('.med').text("Eliza: Written in OCaml. Uses recursion to extract regular expressions and respond.");
	});
	$('#projects').hover(function() {
		$('.med').text("Hover over the images for more details. Click to see more.");
	});
	$('p').hover(function() {
		$('.med').text("Hover over the images for more details. Click to see more");
	});
});


