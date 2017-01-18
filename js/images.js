$(document).ready(function() {

	$('#huffman').hover(function() {
		$('.med').text("Huffman: Written in Java. Utilizes a greedy algorithm to form a binary-search-tree used in file compression. Click for a full explanation of how a Huffman Compression works.");
	});
	$('#creditz').hover(function() {
		$('.med').text("Credit Analysis: Written in R. Modeled risk of loan default using Bayesian Model Averaging on dataset of >100,000 loan samples. Click to go to the web app and view the full report.");
	});
	$('#feedme').hover(function() {
		$('.med').text("FeedMe: A small business I started and sold which facilitated in-school food deliveries with an online form. Click to see the official website and form I created. ");
	});
	$('#projects').hover(function() {
		$('.med').text("Hover over the images for more details. Click to see more.");
	});
	$('p').hover(function() {
		$('.med').text("Hover over the images for more details. Click to see more");
	});
});


