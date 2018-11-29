// --------------------------------------------------------------------------------
// CONTROLLER - TABLE - MODAL - ACTIONS
//---------------------------------------------------------------------------------

// SHOW
$(document).on("click",'#show-multiple-actions', function(e, ele){

	var self = $(this);

	// Load modal
	$( "#m-table-modal-placeholder" ).load( "/assets/controls/table/modal/actions/view.html", function() {

		// Get coordinates of clicked element
		var position = self.position();

		// Get number of actions, multiply by 21 (height of 1 action) + 1 for border
		var actionsHeight = ( $("#modal-multiple-actions .m-table-button").length * 28 ) + 1;

		$("#modal-multiple-actions > .con").css("top", position.top + 95);
		$("#modal-multiple-actions > .con").css("left", position.left - 16);
		$("#modal-multiple-actions > .con").css("height", actionsHeight);

		$("#modal-multiple-actions").show();

		$("#modal-table-mask").addClass("modal-table-mask-table-actions");		
		$("#modal-table-mask").show();
	});

});

// HIDE
$(document).on("click",'.m-table-modal-mask.modal-table-mask-table-actions', function(e, ele){
	$("#m-table-modal-placeholder .m-table-modal").remove();
	$("#modal-table-mask").removeClass("modal-table-mask-table-actions");
	$("#modal-table-mask").hide();
});

