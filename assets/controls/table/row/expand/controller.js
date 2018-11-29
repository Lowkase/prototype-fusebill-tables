// EXPAND ROW
//---------------------------------------------------------------------------------
$(document).on("click",'.m-table-expand-icon', function(e, ele){

    if ( $(this).hasClass("m-table-expand-icon-expanded") ) {
    	$(this).addClass("m-table-expand-icon-contracted");
		$(this).removeClass("m-table-expand-icon-expanded");
		$(this).parent().parent().parent().parent().next().removeClass("m-table-row-expanded-show");
    } else {
    	$(this).removeClass("m-table-expand-icon-contracted");
		$(this).addClass("m-table-expand-icon-expanded");
		$(this).parent().parent().parent().parent().next().addClass("m-table-row-expanded-show");
    }

});


$(document).on("click",'.m-table-row-expand-close', function(e, ele){
	var row = $(this).closest('tr');
	var prev = row.prev();

	prev.find(".m-table-expand-icon").addClass("m-table-expand-icon-contracted");
	prev.find(".m-table-expand-icon").removeClass("m-table-expand-icon-expanded");
	row.removeClass("m-table-row-expanded-show");
});