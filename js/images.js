$(document).ready(function() {

	$('#huffman').hover(function() {
		$('.med').text("Huffman: Written in Java. Utilizes a greedy algorithm to form a binary-search-tree used in file compression.");
	});
	$('#creditz').hover(function() {
		$('.med').text("Credit Analysis: Written in R. Modeled risk of loan default using Bayesian Model Averaging on dataset of >100,000 loan samples.");
	});
	$('#feedme').hover(function() {
		$('.med').text("FeedMe: A small business I started and sold which facilitated in-school food deliveries with an online form.");
	});
	$('#projects').hover(function() {
		$('.med').text("Hover over the images for more details. Click to see more.");
	});
	$('p').hover(function() {
		$('.med').text("Hover over the images for more details. Click to see more");
	});
});


