Ext.define('Dashboard.view.dashboard.Emails', {
    extend: 'Ext.grid.Panel',
    xtype: 'dash-email',

    requires: [
        'Ext.selection.CellModel'
    ],

    autoLoad: true,
    actions: {
        read: {
            iconCls: 'far fa-envelope',
            disabled: true,
            handler: 'handleBuyAction'
        },
        unread: {
            iconCls: 'far fa-envelope-open',
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
        header: 'Name',
        dataIndex: 'name',
        editor: {
            allowBlank: false,
            selectOnFocus: false
        }
    }, {
        text: 'Info',
        columns: [{
            header: 'Message',
            dataIndex: 'light',
            flex: 1,
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
            header: 'Received On',
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
        }]
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