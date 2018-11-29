// --------------------------------------------------------------------------------
// CONTROLLER - TABLE - MODAL - EXPORT
//---------------------------------------------------------------------------------

var exportInPlay = false;

$(document).on("click",'#show-export', function(e, ele){
	var self = $(this);

	$("#show-export").addClass("active");
	tableCustomersNavReset();

	// Load modal
	$( "#m-table-modal-placeholder" ).load( "/assets/controls/table/modal/export/view.html", function() {
		placeTableModal(self, "#modal-export");
		$("#modal-export").show();
		
		$("#modal-table-mask").addClass("modal-table-mask-export");
		$("#modal-table-mask").show();
	});
});

// HIDE
$(document).on("click", '.modal-export-cancel-action, .m-table-modal-mask.modal-table-mask-export, #exported-close', function(e, ele){
	if(!exportInPlay) {
		$("#show-export").removeClass("active");
		$("#m-table-modal-placeholder .m-table-modal").remove();
		
		$("#modal-table-mask").removeClass("modal-table-mask-export");	
		$("#modal-table-mask").hide();

		// Reset modal state
		$("#modal-export .cls, #modal-export .nav, #modal-export .bdy, #modal-export .ftr").show();
		$("#modal-export .exported").hide();
	}
});

$(document).on("click", '#modal-export-apply', function(e, ele){
	exportInPlay = true;

	$("#modal-export .cls, #modal-export .nav, #modal-export .bdy, #modal-export .ftr").hide();
	$("#modal-export .ldr").show();

	setTimeout(function(){ 
		$("#modal-export .ldr").hide();
		$("#modal-export .cls").show();
		$("#modal-export .exported").show();
		exportInPlay = false;
	}, 3000);
});

$(document).on("click",'#show-export-basic', function(e, ele){
	$("#modal-export > .con").css("height", "300px");
	$("#modal-export .nav > div").removeClass("active");
	$("#modal-export .nav #show-export-basic").addClass("active");
	$("#modal-export .nav-content > div").removeClass("active");
	$("#modal-export .nav-content #export-content-basic").addClass("active");
});

$(document).on("click",'#show-export-scheduled', function(e, ele){
	$("#modal-export > .con").css("height", "520px");
	$("#modal-export .nav > div").removeClass("active");
	$("#modal-export .nav #show-export-scheduled").addClass("active");
	$("#modal-export .nav-content > div").removeClass("active");
	$("#modal-export .nav-content #export-content-scheduled").addClass("active");
});