// --------------------------------------------------------------------------------
// CONTROLLER - INDEX
//---------------------------------------------------------------------------------
function initInvoices() {

	var grid = new Muuri('.grid', {
		dragEnabled: true,
		dragSortInterval: 0,

		dragSortPredicate: {
			threshold: 75,
			action: 'swap'
		},

		layout: {
			fillGaps: true
	  	}
	});

	grid.refreshItems().layout();

}