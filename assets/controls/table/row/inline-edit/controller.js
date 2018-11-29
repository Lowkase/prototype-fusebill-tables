// INLINE EDIT
//---------------------------------------------------------------------------------
$(document).on("click",'.m-table-inline-edit-edit svg', function(e, ele){
	// Hide value/edit
	$(this).parent().parent().hide();

	// Show input/actions
	$(this).parent().parent().parent().find(".m-table-inline-edit-input-actions").show();
});

$(document).on("click",'.m-table-inline-edit-actions-ok, .m-table-inline-edit-actions-cancel', function(e, ele){
	// Hide input/actions
	$(this).parent().parent().hide();

	// Show value/edit
	$(this).parent().parent().parent().find(".m-table-inline-edit-value-edit").show();
});