Ext.define('Dashboard.view.dashboard.Emails', {
    extend: 'Ext.grid.Panel',
    xtype: 'dash-email',

    requires: [
        'Ext.selection.CellModel'
    ],

    autoLoad: true,
    actions: {
        read: {
            iconCls: 'fa fa-envelope',
            text: 'Mark as Read',
            disabled: true,
            handler: 'handleBuyAction'
        },
        unread: {
            iconCls: 'fa fa-envelope-open',
            text: 'Unread',
            disabled: true,
            handler: 'handleSellAction'
        }
    },


    tbar: ["@read", "@unread"],

    selModel: {
        type: 'cellmodel'
    },
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },

    columns: [{
        header: 'Common Name',
        dataIndex: 'common',

        flex: 1,
        editor: {
            allowBlank: false,
            selectOnFocus: false
        }
    }, {
        header: 'Light',
        dataIndex: 'light',

        width: 130,
        editor: {
            xtype: 'combo',
            typeAhead: true,
            triggerAction: 'all',
            selectOnFocus: false,
            store: [
                ['Shade', 'Shade'],
                ['Mostly Shady', 'Mostly Shady'],
                ['Sun or Shade', 'Sun or Shade'],
                ['Mostly Sunny', 'Mostly Sunny'],
                ['Sunny', 'Sunny']
            ]
        }
    }, {
        header: 'Price',
        dataIndex: 'price',

        width: 70,
        align: 'right',
        formatter: 'usMoney',
        editor: {
            xtype: 'numberfield',
            selectOnFocus: false,
            allowBlank: false,
            minValue: 0,
            maxValue: 100000
        }
    }, {
        xtype: 'datecolumn',
        header: 'Available',
        dataIndex: 'availDate',

        width: 95,
        format: 'M d, Y',
        editor: {
            xtype: 'datefield',
            selectOnFocus: false,
            format: 'm/d/y',
            minValue: '01/01/06',
            disabledDays: [0, 6],
            disabledDaysText: 'Plants are not available on the weekends'
        }
    }, {
        xtype: 'actioncolumn',

        width: 30,
        sortable: false,
        menuDisabled: true,
        items: [{
            iconCls: 'cell-editing-delete-row',
            tooltip: 'Delete Plant',
            handler: 'onRemoveClick'
        }]
    }]
})