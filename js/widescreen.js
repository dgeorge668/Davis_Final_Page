$(document).ready(function() {
	console.log($(window).width());
    console.log($(window).height());
    if ($(window).width() > 1500) {
        $("#style").attr('href', 'style-wide.css');
    }

    $(window).on('resize', function() {
    	if ($(window).width() > 1500) {
        	$("#style").attr('href', 'style-wide.css');
    	}
    	else {
    		$("#style").attr('href', 'style.css');
    	}
    });
});

