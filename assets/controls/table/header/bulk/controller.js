// BULK
//---------------------------------------------------------------------------------
$(document).on("click", '.bulk-checkbox-all', function(e, ele){
	if ( $(this).is(':checked') ) {
		$('.bulk-checkbox').prop('checked', 'checked');
		var checkCount = countBulkCheckboxes();

		toggleBulkSection(true);
		$(".bulk-section-count").text(checkCount);
	} else {
		$('.bulk-checkbox').prop('checked', false);
		toggleBulkSection(false);
	}
});

$(document).on("click", '.bulk-checkbox', function(e, ele){
	var checkCount = countBulkCheckboxes();

	if(checkCount > 0){
		toggleBulkSection(true);
		$(".bulk-section-count").text(checkCount);
	} else {
		$('.bulk-checkbox-all').prop('checked', false);
		toggleBulkSection(false);
	}
});

$(document).on("click", '#table-header-bulk-cancel', function(e, ele){
	$('.bulk-checkbox-all').prop('checked', false);
	$('.bulk-checkbox').prop('checked', false);
	toggleBulkSection(false);
});

function toggleBulkSection(visible) {
	if( visible === true ) {
		$("#table-header-bulk").show();
		$("#table-header-default").hide();
	} else {
		$("#table-header-bulk").hide();
		$("#table-header-default").show();
	}
}

function countBulkCheckboxes() {
	var checkCount = 0;

	$('input.bulk-checkbox:checkbox:checked').each(function () {
		checkCount = checkCount + 1;
	});

	return	checkCount;
}