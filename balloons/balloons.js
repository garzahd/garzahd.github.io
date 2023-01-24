// Script file for Balloons

let bSizes = {red: 200, green: 200, blue: 200, orange: 200, pink: 200, white: 200};
let activeTool = 1;

let bClick = function(event) {
	// Event function called when a balloon is clicked 

	// "this" is a special keyword that identifies the html object
	// we use it to identify which balloon was clicked
	//console.log(this);
	//console.log($(this).attr('id'));

	// "event" contains a lot of details related to the click, such as the exact pixel clicked on
	//console.log(event);
	let id = $(this).attr('id');
	if (activeTool == 1) {
		let currentSize = bSizes[id];
		if (currentSize==0) return; // popped, can't inflate
		else if (currentSize<400) {
			currentSize = currentSize + 50;
			$('#' + id + ' img').width(currentSize);
			bSizes[id] = currentSize;
			return;
		}
		else {
			bSizes[id] = 0;
			$('#' + id + ' img').width(100);
			$('#' + id + ' img').attr('src', 'images/burst.png');
			return;
		}
	}
	if (activeTool == 2) {
		bSizes[id] = 0;
		$('#' + id + ' img').width(100);
		$('#' + id + ' img').attr('src', 'images/burst.png');
		return;
	}
	if (activeTool == 3) {
		bSizes[id] = 200;
		$('#' + id + ' img').width(200);
		$('#' + id + ' img').attr('src', 'images/' + id + '.png');
		return;
	}


}

let tClick = function(event) {
	// Event function called when a tool is clicked 

	let id = $(this).attr('id');
	if (id == 'pump') {
		activeTool = 1;
	}
	if (id == 'tack') {
		activeTool = 2;
	}
	if (id == 'bandaid') {
		activeTool = 3;
	}

	$('.front img').hide();
	$('#arrow' + activeTool + ' img').show();
}


$(document).ready(function() {
	console.log("Script file is awake!");

	// Add listeners for click events
	$('.balloon').on('click', bClick)
	$('.tool').on('click', tClick)
});
