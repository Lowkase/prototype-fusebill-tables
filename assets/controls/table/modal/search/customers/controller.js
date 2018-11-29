// --------------------------------------------------------------------------------
// CONTROLLER - TABLE - MODAL - SEARCH - CUSTOMERS
//---------------------------------------------------------------------------------

// SHOW
$(document).on("click",'#show-search', function(e, ele){
	var self = $(this);

	$("#show-search").addClass("active");
	tableCustomersNavReset();

	// Load modal
	$( "#m-table-modal-placeholder" ).load( "/assets/controls/table/modal/search/customers/view.html", function() {
		placeTableModal(self, "#modal-search");
		$("#modal-search").show();
		$("#modal-table-mask").addClass("modal-table-mask-search");
		$("#modal-table-mask").show();
	});
});

// HIDE
$(document).on("click",'.modal-search-cancel-action, .m-table-modal-mask.modal-table-mask-search, #modal-search-apply', function(e, ele){
	$("#show-search").removeClass("active");
	$("#m-table-modal-placeholder .m-table-modal").remove();
	$("#modal-table-mask").removeClass("modal-table-mask-search");
	$("#modal-table-mask").hide();
});

$(document).on("click",'#show-search-basic', function(e, ele){
	$("#modal-search > .con").css("height", "290px");
	$("#modal-search .nav > div").removeClass("active");
	$("#modal-search .nav #show-search-basic").addClass("active");
	$("#modal-search .nav-content > div").removeClass("active");
	$("#modal-search .nav-content #search-content-basic").addClass("active");
});

$(document).on("click",'#show-search-advanced', function(e, ele){
	$("#modal-search > .con").css("height", "520px");
	$("#modal-search .nav > div").removeClass("active");
	$("#modal-search .nav #show-search-advanced").addClass("active");
	$("#modal-search .nav-content > div").removeClass("active");
	$("#modal-search .nav-content #search-content-advanced").addClass("active");
});

$(document).on("click",'#show-search-tracked-items', function(e, ele){
	$("#modal-search > .con").css("height", "290px");
	$("#modal-search .nav > div").removeClass("active");
	$("#modal-search .nav #show-search-tracked-items").addClass("active");
	$("#modal-search .nav-content > div").removeClass("active");
	$("#modal-search .nav-content #search-content-tracked-items").addClass("active");
});