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
        type: 'rowmodel',
        mode: 'MULTI'
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
        menuDisabled: true,
        dataIndex: 'read',
        width: 36,
        renderer: (value) => {
            if (value) {
                return 'o'
            }
        }
    }, {
        menuDisabled: true,
        dataIndex: 'priority',
        width: 36
    }, {
        menuDisabled: true,
        header: 'Date',
        dataIndex: 'received_on'
    }, {
        menuDisabled: true,
        header: 'Message',
        dataIndex: 'text',
        flex: 1
    }, {
        menuDisabled: true,
        xtype: 'actioncolumn',
        width: 49,
        sortable: false,
        items: [{
            iconCls: 'far fa-envelope-open',
            tooltip: 'Mark Read',
            handler: 'onRemoveClick'
        }]
    }]
});