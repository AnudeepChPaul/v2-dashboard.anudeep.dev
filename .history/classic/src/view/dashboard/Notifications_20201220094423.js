Ext.define('Dashboard.view.dashboard.Notifications', {
    extend: 'Ext.grid.Panel',
    xtype: 'dash-notifications',

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
    bind: {
        store: '{notifications}'
    },

    columns: [{
        dataIndex: 'read',
        width: 36,
        editor: {
            allowBlank: false,
            selectOnFocus: false
        },
        renderer: (value) => {
            if (value) {
                return 'o'
            }
        }
    }, {
        dataIndex: 'priority',
        width: 36,
        editor: {
            allowBlank: false,
            selectOnFocus: false
        }
    }, {
        header: 'Message',
        dataIndex: 'text',
        flex: 1,
        // editor: {
        //     xtype: 'combo',
        //     typeAhead: true,
        //     triggerAction: 'all',
        //     selectOnFocus: false,
        //     store: [
        //         ['Shade', 'Shade'],
        //         ['Mostly Shady', 'Mostly Shady'],
        //         ['Sun or Shade', 'Sun or Shade'],
        //         ['Mostly Sunny', 'Mostly Sunny'],
        //         ['Sunny', 'Sunny']
        //     ]
        // }
    }, {
        xtype: 'actioncolumn',
        width: 36,
        sortable: false,
        menuDisabled: true,
        items: [{
            iconCls: 'cell-editing-delete-row',
            tooltip: 'Delete Plant',
            handler: 'onRemoveClick'
        }]
    }]
});