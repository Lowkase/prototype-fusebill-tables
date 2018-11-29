function initTable(gridSettings, gridData, target) {	

	// GRID SETTINGS
	var isActions = gridSettings[0].isActions;
	var isBulk = gridSettings[0].isBulk;
	var isExpand = gridSettings[0].isExpand;
	var isPagination = gridSettings[0].isPagination;

	// BUILD SECTIONS
	intiTableActions(gridSettings, isBulk);
	var headerOutput = initTableHeader(gridSettings, isBulk, isActions);
	var bodyOutput = initTableBody(gridData, isBulk, isExpand, isActions);
	initPagination(isPagination);

	// PUSH TABLE
	$("#" + target).html(headerOutput + bodyOutput);

}


function intiTableActions(gridSettings, isBulk) {

	// GET HEADER LEFT/RIGHT ACTIONS
	var isHeader = gridSettings[0].isHeader;
	var headerLeftActions = gridSettings[0].headerLeftActions;
	var headerRightActions = gridSettings[0].headerRightActions;

	if(isHeader) {

		// LOAD LEFT ACTIONS
		for (var headerLeftAction in headerLeftActions) {
	        var action = headerLeftActions[headerLeftAction].action;
	        var control = headerLeftActions[headerLeftAction].control;
			$( "#table-header-default > .lft" ).append( "<div class='table-header-section-" + action + "'></div>" );
			$( "#table-header-default > .lft .table-header-section-" + action ).load( control, function() {});
	    }

		// LOAD RIGHT ACTIONS
		for (var headerRightAction in headerRightActions) {
	        var action = headerRightActions[headerRightAction].action;
	        var control = headerRightActions[headerRightAction].control;
			$( "#table-header-default > .rgt" ).append( "<div class='table-header-section-" + action + "'></div>" );
			$( "#table-header-default > .rgt .table-header-section-" + action ).load( control, function() {});
	    }

	    // LOAD BULK
	    if(isBulk) {
	    	$( ".m-table-header" ).append( "<div class='bulk-section'></div>" );
			$( ".m-table-header .bulk-section" ).load( "/assets/controls/table/header/bulk/view.html", function() {});	
	    }

	} else {

		$(".m-table-header").addClass("m-table-header-no-header");
	}

}


function initTableHeader(gridSettings, isBulk, isActions) {

	// GET HEADER COLUMNS
	var headerColumns = gridSettings[0].columns;

	var headerOutput = "<thead><tr>";
		
		if(isBulk) {
			headerOutput += "<th><input class='bulk-checkbox-all' type='checkbox' name='bulk-checkbox' /></th>";
		}

	    for (var headerColumn in headerColumns) {

	        var columnName = headerColumns[headerColumn].name;
	        var columnSort = headerColumns[headerColumn].sort;
	        var columnVisible = headerColumns[headerColumn].visible;

	        if( columnVisible ){
	        	headerOutput += "<th>";
	        } else {
	        	headerOutput += "<th style='display: none'>";
	        }

		        headerOutput += "<div class='name'>" + columnName + "</div>";

		        if( columnSort ){
					headerOutput += "<div class='sort'>";
					headerOutput += '	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 401.998 401.998" style="enable-background:new 0 0 401.998 401.998;" xml:space="preserve"><g><path d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"/><path d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"/></g></svg>';
					headerOutput += "</div>";
		        }

			headerOutput += "</th>";
	    }

		if(isActions) {
			headerOutput += "<th>Actions</th>";
		}

	headerOutput += "</tr></thead>";

	return headerOutput;

}


function initTableBody(gridData, isBulk, isExpand, isActions) {
	// BODY - START
	var bodyOutput = "<tbody>";

	// BUILD ROWS
	for (var bodyRow in gridData) {
		var isExpansionDrawer = gridData[bodyRow].isExpansionDrawer;
		if(!isExpansionDrawer) {

			// NON - EXPANSION ROW
			bodyOutput += "<tr>";

				// BULK / EXPAND
				if(isBulk || isExpand) {
					bodyOutput += "<td>";

						if(isBulk) {
							bodyOutput += "<input class='bulk-checkbox-all' type='checkbox' name='bulk-checkbox' />";	
						}

						if(isExpand) {
							bodyOutput += "<div class='m-table-expand-con'>";
							bodyOutput += '		<div class="m-table-expand">';
							bodyOutput += '			<svg class="m-table-expand-icon" viewBox="0 0 492.004 492.004"><g><title>Expand</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/></g></svg>';
							bodyOutput += '		</div>';
							bodyOutput += "</div>";
						}

					bodyOutput += "</td>";
				}

				// DATA
				var bodyColumns = gridData[bodyRow].columns;
			    for (var bodyColumn in bodyColumns) {
					var columnAlign = bodyColumns[bodyColumn].align;
			        var columnIsEditLink = bodyColumns[bodyColumn].isEditLink;
			        var columnIsInlineEdit = bodyColumns[bodyColumn].isInlineEdit;
			        var columnIsStatus = bodyColumns[bodyColumn].isStatus;
			        var columnStatusType = bodyColumns[bodyColumn].statusType;
			        var columnValue = bodyColumns[bodyColumn].value;
			        var columnVisible = bodyColumns[bodyColumn].visible;

			        // TD - START
					bodyOutput += buildTD(columnAlign, columnIsEditLink, columnIsStatus, columnStatusType, columnVisible);

						// COLUMN VALUE - NORMAL OR INLINE EDIT
						if(columnIsInlineEdit) {
							bodyOutput += buildInlineEdit(columnValue)
						} else {
							bodyOutput += columnValue;
						}

					// TD - END
					bodyOutput += "</td>";
			    }

			    // ACTIONS
			    // ********** IF ACTIONS > 1 then show DOTA	
				if(isActions) {

				

					bodyOutput += '<td id="show-multiple-actions" class="m-table-actions">';
						bodyOutput += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210 210" style="enable-background:new 0 0 210 210;" xml:space="preserve"><g><title>Actions</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0"></rect><path d="M115,0H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V15C130,6.716,123.284,0,115,0z"></path><path d="M115,80H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V95C130,86.716,123.284,80,115,80z"></path><path d="M115,160H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15v-20C130,166.716,123.284,160,115,160z"></path></g></svg>';
					bodyOutput += '</td>';
				}

				// ********** ELSE - show only 1 button


			bodyOutput += "</tr>";
		}
		else {
			// EXPANSION ROW
			bodyOutput += "<tr class='m-table-row-expand'>";

				bodyOutput += '<td colspan="100">';
				bodyOutput += '		<div class="m-table-expand-con">';
				bodyOutput += 			gridData[bodyRow].content;
				bodyOutput += '		</div>';
				bodyOutput += '</td>';

			bodyOutput += "</tr>";
		}

	}

	// BODY - END
	bodyOutput += "</tbody>";

	return bodyOutput;

}


function buildTD(columnAlign, columnIsEditLink, columnIsStatus, columnStatusType, columnVisible) {

    // TD - START
	var bodyOutput = "<td ";

        if( !columnVisible ){
        	bodyOutput += "style='display: none' ";
        }

		bodyOutput += " class='";
        	if(columnIsEditLink) {
				bodyOutput += "m-table-edit "
        	}

	        if(columnAlign === "CENTER") {
	        	bodyOutput += "m-table-align-center ";
	        }

	        if(columnAlign === "RIGHT") {
	        	bodyOutput += "m-table-align-right ";
	        }

	        if(columnIsStatus) {
	        	bodyOutput += "m-table-status "

	        	if(columnStatusType === "ACTIVE") {
					bodyOutput += "m-table-status-green "
	        	}

	        	if(columnStatusType === "GOOD") {
					bodyOutput += "m-table-status-yellow "
	        	}

	        	if(columnStatusType === "BAD") {
					bodyOutput += "m-table-status-red "
	        	}

	        	if(columnStatusType === "NEUTRAL") {
					bodyOutput += "m-table-status-blue "
	        	}
	        }

		bodyOutput += "'";

	bodyOutput += ">";

	return bodyOutput;

}


function buildInlineEdit(columnValue) {

	var bodyOutput = '<div class="m-table-inline-edit">';

		// VALUE / EDIT
		bodyOutput += '<div class="m-table-inline-edit-value-edit">';
		bodyOutput += '		<div class="m-table-inline-edit-value">';
		bodyOutput += 			columnValue;
		bodyOutput += '		</div>';
		bodyOutput += '		<div class="m-table-inline-edit-edit">';
		bodyOutput += '			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;" xml:space="preserve"><g><title>Edit</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z"/></g></svg>';
		bodyOutput += '		</div>';
		bodyOutput += '</div>';

		// EDIT - OK / CANCEL
		bodyOutput += '<div class="m-table-inline-edit-input-actions">';
		bodyOutput += '		<div class="m-table-inline-edit-input">';
		bodyOutput += '			<input type="text" value="Firstname Middlename Lastname Suffix" />';
		bodyOutput += '		</div> ';
		bodyOutput += '		<div class="m-table-inline-edit-actions-ok-cancel">';
		bodyOutput += '			<div class="m-table-inline-edit-actions-ok">';
		bodyOutput += '				<svg viewBox="0 0 426.667 426.667"><g><title>Apply</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M213.333,0C95.518,0,0,95.514,0,213.333s95.518,213.333,213.333,213.333 c117.828,0,213.333-95.514,213.333-213.333S331.157,0,213.333,0z M174.199,322.918l-93.935-93.931l31.309-31.309l62.626,62.622 l140.894-140.898l31.309,31.309L174.199,322.918z"/></g></svg>';
		bodyOutput += '			</div>';
		bodyOutput += '			<div class="m-table-inline-edit-actions-cancel">';
		bodyOutput += '				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 44 44"><title>Cancel</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" />    <path d="m22,0c-12.2,0-22,9.8-22,22s9.8,22 22,22 22-9.8 22-22-9.8-22-22-22zm3.2,22.4l7.5,7.5c0.2,0.2 0.3,0.5 0.3,0.7s-0.1,0.5-0.3,0.7l-1.4,1.4c-0.2,0.2-0.5,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.5-7.5c-0.2-0.2-0.5-0.2-0.7,0l-7.5,7.5c-0.2,0.2-0.5,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l7.5-7.5c0.2-0.2 0.2-0.5 0-0.7l-7.5-7.5c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.2-0.2 0.5-0.3 0.7-0.3s0.5,0.1 0.7,0.3l7.5,7.5c0.2,0.2 0.5,0.2 0.7,0l7.5-7.5c0.2-0.2 0.5-0.3 0.7-0.3 0.3,0 0.5,0.1 0.7,0.3l1.4,1.4c0.2,0.2 0.3,0.5 0.3,0.7s-0.1,0.5-0.3,0.7l-7.5,7.5c-0.2,0.1-0.2,0.5 3.55271e-15,0.7z"/></svg>';
		bodyOutput += '			</div>';
		bodyOutput += '		</div>';
		bodyOutput += '</div>';

	bodyOutput += '</div>';

	return bodyOutput;

}


function initPagination(isPagination) {
	
	if(isPagination) {
		$( ".m-table-footer" ).load( "/assets/controls/table/pagination/view.html", function() {});	
	}

}

function tableCustomersNavReset() {
	$("#table-header-default > div > div > div").removeClass("active");
}