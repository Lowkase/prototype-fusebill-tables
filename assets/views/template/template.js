// --------------------------------------------------------------------------------
// CONTROLLER - TEMPLATE
//---------------------------------------------------------------------------------

$(document).on("click", '#t-aside-nav ul li .primary .expand', function(e, ele){
	// Collapse all secondaries
	$('#t-aside-nav ul li .secondary').hide();

	// Show secondary
	$(this).parent().parent().find('.secondary').show();
});

function updateMenu(activeItem) {
	var itemNumber = 1;

	if(activeItem === "HOME") {
		itemNumber = 1;
	}

	if(activeItem === "CUSTOMERS") {
		itemNumber = 2;
	}

	if(activeItem === "INVOICES") {
		itemNumber = 3;
	}

	$("#t-aside-nav ul li").removeClass("active");
	$("#t-aside-nav ul li:nth-child(" + itemNumber + ")").addClass("active");
}