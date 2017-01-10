$(document).ready(function() {

	$('#compress').hover(function() {
		$('.med').text("Pacman: Written in Java. Ghosts use a Breadth First Search algorithm to chase Pacman.");
	});
	$('#creditz').hover(function() {
		$('.med').text("Database Client: Written in Java. Can execute protected SQL queries for user to visualize.");
	});
	$('#feedme').hover(function() {
		$('.med').text("Eliza: Written in OCaml. Uses recursion to extract regular expressions and respond.");
	});
	$('#projects').hover(function() {
		$('.med').text("Hover over the images for more details. Click to see more.");
	});
	$('p').hover(function() {
		$('.med').text("Hover over the images for more details. Click to see more");
	});
});


