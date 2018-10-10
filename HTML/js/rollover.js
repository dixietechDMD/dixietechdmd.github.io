// Faculty & Staff Image Rollover
$(function() {
	$(".section--info-body img")
		.mouseover(function() { 
			var src = $(this).attr("src");
			var fileList = src.split('/');
			var name = fileList[2];
			var newSrc = "faculty/COLOR/" + name;
			// console.log(fileList);
			$(this).attr("src", newSrc);
		})
		.mouseout(function() {
			var src = $(this).attr("src");
			var fileList = src.split('/');
			var name = fileList[2];
			var newSrc = "faculty/BW/" + name;
			// console.log(fileList);
			$(this).attr("src", newSrc);
		});
});