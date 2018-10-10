// Stellarnav stuff
$(window).load(function() {
	console.log($('#main-nav'));
	console.log("loaded");
	$('#main-nav').stellarNav({
		theme: 'dark',
		breakpoint: 1200,
		closingDelay: 500,
		childClosingDelay: 0,
		sticky: true,
	});
	console.log("stellarnav loaded");
});

window.onload = function() {
	$('#main-nav').stellarNav({
		theme: 'dark',
		breakpoint: 1200,
		closingDelay: 500,
		childClosingDelay: 0,
		sticky: true,
	});
}