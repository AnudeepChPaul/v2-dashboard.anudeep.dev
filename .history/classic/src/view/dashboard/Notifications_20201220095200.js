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
        dataIndex: 'read',
        width: 36,
        renderer: (value) => {
            if (value) {
                return 'o'
            }
        }
    }, {
        dataIndex: 'priority',
        width: 36
    }, {
        header: 'Message',
        dataIndex: 'text',
        flex: 1
    }, {
        xtype: 'actioncolumn',
        width: 36,
        sortable: false,
        menuDisabled: true,
        items: [{
            iconCls: 'fa fa-remove',
            tooltip: 'Delete Plant',
            handler: 'onRemoveClick'
        }]
    }]
});