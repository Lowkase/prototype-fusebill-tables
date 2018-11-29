// CUSTOMERS SETTINGS
var gridDataCustomersSettings = [
    {
        "isHeader": true,

        "headerLeftActions": [
            {
                "action": "filter",
                "control": "/assets/controls/table/header/filter/view.html"
            },
            {
                "action": "search",
                "control": "/assets/controls/table/header/search/view.html"
            },
            {
                "action": "export",
                "control": "/assets/controls/table/header/export/view.html"
            },
            {
                "action": "customize",
                "control": "/assets/controls/table/header/customize/view.html"
            }
        ],

        "headerRightActions": [
            {
                "action": "add-customer",
                "control": "/assets/controls/table/header/add/customer/view.html"
            }
        ],

        "customizeControl": "/assets/controls/table/modal/customize/customers/view.html",

        "isBulk": true,
        "bulkActions": [
            {
                "bulkAction": "INCLUDE"
            },
            {
                "bulkAction": "EXCLUDE"
            },
            {
                "bulkAction": "DELETE"
            }
        ],

        "isExpand": true,

        "columns": [
            {
                "name": "Fusebill ID",
                "sort": true,
                "visible": false
            },
            {
                "name": "Customer ID",
                "sort": true,
                "visible": false
            },
            {
                "name": "Company",
                "sort": true,
                "visible": true
            },
            {
                "name": "Name",
                "sort": true,
                "visible": true
            },
            {
                "name": "Balance",
                "sort": true,
                "visible": true
            },
            {
                "name": "Net MRR",
                "sort": true,
                "visible": true
            },
            {
                "name": "Pay Method",
                "sort": true,
                "visible": true
            },
            {
                "name": "Terms",
                "sort": true,
                "visible": true
            },
            {
                "name": "Created",
                "sort": true,
                "visible": true
            },
            {
                "name": "Next Billing Date",
                "sort": true,
                "visible": true
            },
            {
                "name": "Account",
                "sort": true,
                "visible": true
            },
            {
                "name": "Accounting",
                "sort": true,
                "visible": true
            }
        ],

        "isActions": true,
        "actions": [
            "DELETE", 
            "INCLUDE", 
            "EXCLUDE"
        ],

        "isPagination": true

    }
]




// CUSTOMERS DATA
var gridDataCustomers = [
    {
        "isExpansionDrawer": false,
        "columns": [
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "3405959",
                "visible": false
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "23432fd3",
                "visible": false
            },
            {
                "align": "LEFT",
                "isEditLink": true,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "ACME Industries",
                "visible": true
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": true,
                "isStatus": false,
                "statusType": "NONE",
                "value": "Firstname Middlename Lastname Suffix",
                "visible": true
            },
            {
                "align": "RIGHT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "$999,999,999.99 USD",
                "visible": true
            },
            {
                "align": "RIGHT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "$999,999,999.99 USD",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "AR",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "Net30",
                "visible": true
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "November 21, 2017 14:31 EST",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "N/A",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": true,
                "statusType": "ACTIVE",
                "value": "Active",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": true,
                "statusType": "GOOD",
                "value": "Good",
                "visible": true
            }
        ]
    },
    {
        "isExpansionDrawer": true,
        "content": "<div><img src='https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=ed148ff29b9b874a299f8b38e2fb04f3' /><div><div class='m-button m-button-primary m-table-row-expand-close'>CLOSE</div>"
    },
    {
        "isExpansionDrawer": false,
        "columns": [
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "8984985",
                "visible": false
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "7723847",
                "visible": false
            },
            {
                "align": "LEFT",
                "isEditLink": true,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "Serge Inc",
                "visible": true
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": true,
                "isStatus": false,
                "statusType": "NONE",
                "value": "Firstname Middlename Lastname Suffix",
                "visible": true
            },
            {
                "align": "RIGHT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "$999,999,999.99 USD",
                "visible": true
            },
            {
                "align": "RIGHT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "$999,999,999.99 USD",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "AR",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "Net30",
                "visible": true
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "November 21, 2017 14:31 EST",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "N/A",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": true,
                "statusType": "NEUTRAL",
                "value": "Neutral",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": true,
                "statusType": "BAD",
                "value": "Bad",
                "visible": true
            }
        ]
    },
    {
        "isExpansionDrawer": true,
        "content": "<div><img src='https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=ed148ff29b9b874a299f8b38e2fb04f3' /><div><div class='m-button m-button-primary m-table-row-expand-close'>CLOSE</div>"
    }    

]




















// INVOICES - SETTINGS
var gridDataInvoicesSettings = [
    {
        "isHeader": true,

        "headerLeftActions": [
            {
                "action": "customize",
                "control": "/assets/controls/table/header/customize/view.html"
            }        
        ],

        "headerRightActions": [
        ],

        "customizeControl": "/assets/controls/table/modal/customize/invoices/view.html",

        "isBulk": false,
        "bulkActions": [
        ],

        "isExpand": false,

        "columns": [
            {
                "name": "Fusebill ID",
                "sort": true,
                "visible": false
            },
            {
                "name": "Customer ID",
                "sort": true,
                "visible": false
            },
            {
                "name": "Name",
                "sort": true,
                "visible": true
            },
            {
                "name": "Balance",
                "sort": true,
                "visible": true
            },
            {
                "name": "Available Funds",
                "sort": true,
                "visible": true
            },
            {
                "name": "Amount Due",
                "sort": true,
                "visible": true
            },
            {
                "name": "Due Within",
                "sort": true,
                "visible": true
            },
            {
                "name": "Terms",
                "sort": true,
                "visible": true
            },
            {
                "name": "Overdue Funds",
                "sort": true,
                "visible": true
            },
            {
                "name": "Service Status",
                "sort": true,
                "visible": true
            }
        ],

        "isActions": false,
        "actions": [
        ],

        "isPagination": true

    }
]




// INVOICES DATA
var gridDataInvoices = [
    {
        "isExpansionDrawer": false,
        "columns": [
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "3405959",
                "visible": false
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "23432fd3",
                "visible": false
            },
            {
                "align": "LEFT",
                "isEditLink": true,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "Bob Loblaw",
                "visible": true
            },
            {
                "align": "RIGHT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "$999,999,999.00 USD",
                "visible": true
            },
            {
                "align": "RIGHT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "$999,999,999.99 USD",
                "visible": true
            },
            {
                "align": "RIGHT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "$999,999,999.99 USD",
                "visible": true
            },
            {
                "align": "RIGHT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "$999,999,999.00 USD",
                "visible": true
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": " ",
                "visible": true
            },
            {
                "align": "LEFT",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": false,
                "statusType": "NONE",
                "value": "> 120: $999,999,999.00 USD",
                "visible": true
            },
            {
                "align": "CENTER",
                "isEditLink": false,
                "isInlineEdit": false,
                "isStatus": true,
                "statusType": "ACTIVE",
                "value": "Active",
                "visible": true
            }
        ]
    },
    {
        "isExpansionDrawer": false,
        "content": "<div><img src='https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=ed148ff29b9b874a299f8b38e2fb04f3' /><div><div class='m-button m-button-primary m-table-row-expand-close'>CLOSE</div>"
    }






]
