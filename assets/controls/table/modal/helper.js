//---------------------------------------------------------------------------------
// MODAL - HELPER
//---------------------------------------------------------------------------------
function placeTableModal(showControl, modalControl) {

	var maxTableWidth = 1015;

	// Get position of show modal control
	var showControlPostion = showControl.position();
	var showControlPositionLeft = showControlPostion.left;

	// Set left position for the modal
	$( modalControl + " > .con").css("left", showControlPositionLeft);

	// Get width of modal
	var modalControlWidth = $( modalControl + " > .con").width();

	// Get width of modal + position left value of modal
	var modalControlWidthLeft = modalControlWidth + showControlPositionLeft;

	// If modal width + position left value of modal > maxTableWidth then adust modal width to fit into table
	if( modalControlWidthLeft > maxTableWidth) {
		var newModalControlWidth = maxTableWidth - showControlPositionLeft;
		newModalControlWidth = Math.round(newModalControlWidth);
		$( modalControl + " > .con").width(newModalControlWidth + "px");
	}
	
}