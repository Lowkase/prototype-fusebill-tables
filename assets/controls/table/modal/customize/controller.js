// --------------------------------------------------------------------------------
// CONTROLLER - TABLE - MODAL - CUSTOMIZE
//---------------------------------------------------------------------------------

// SHOW
$(document).on("click",'#show-customize', function(e, ele){
	var self = $(this);

	$("#show-customize").addClass("active");

	// Get customization control
	var control = customizeControlInit;

	// Load modal
	$( "#m-table-modal-placeholder" ).load( control, function() {
		placeTableModal(self, "#modal-customize");
		$("#modal-customize").show();
		$("#modal-table-mask").addClass("modal-table-mask-customize");
		$("#modal-table-mask").show();
	});
});

// HIDE
$(document).on("click",'.modal-customize-cancel-action, .m-table-modal-mask.modal-table-mask-customize, #modal-customize-apply', function(e, ele){
	$("#show-customize").removeClass("active");
	$("#m-table-modal-placeholder .m-table-modal").remove();
	$("#modal-table-mask").removeClass("modal-table-mask-customize");	
	$("#modal-table-mask").hide();
});

// CHECK CLICK
$(document).on("click", '.customize-columns-check', function(e, ele){
	var checkCount = 0;
	var checkedCount = 0;
	var checkboxOffset = 0;

	// Determine if bulk column is visiable
	var isBulk = tableCustomersSettings[0].isBulk;

	if (isBulk) {
		checkboxOffset = 1;
	}

	// Enable all checks
	enableAllCustomizationChecks();

	// Hide all columns
	$( "table thead tr th" ).hide();
	$( "table tbody tr td" ).hide();

	if (isBulk) {
		$( "table thead tr th:first-child" ).show();
		$( "table tbody tr td:first-child" ).show();
	}

	$('input.customize-columns-check').each(function () {
		checkCount = checkCount + 1;

		// Deterime if checked
		if( $(this).is(':checked') ) {
			checkedCount = checkedCount + 1;

			$( "table th:nth-child(" + (checkCount + checkboxOffset) + ")" ).show();
			$( "table td:nth-child(" + (checkCount + checkboxOffset) + ")" ).show();
		}
	});

	// Update counter
	$("#column-count-selected").text(checkedCount);

	if(checkedCount === 10) {
		// Disable all uncheked
		disableAllUncheckedCustomizationChecks();
	}
});

function enableAllCustomizationChecks() {
	$('input.customize-columns-check').each(function () {
		$(this).removeAttr('disabled');
	});
}

function disableAllUncheckedCustomizationChecks() {
	$('input.customize-columns-check').each(function () {
		if( $(this).not(':checked').length ) {
			$(this).attr('disabled', 'disabled');
		}
	});
}