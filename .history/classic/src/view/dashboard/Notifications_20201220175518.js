Ext.define('Dashboard.view.dashboard.Notifications', {
    extend: 'Ext.grid.Panel',
    xtype: 'dash-notifications',

    requires: [
        'Ext.selection.CellModel'
    ],

    autoLoad: true,
    actions: {
        read: {
            iconCls: 'far fa-envelope-open',
            text: 'Mark all as Read',
            handler: 'markAllNotificationsRead'
        },
        unread: {
            iconCls: 'far fa-envelope',
            text: 'Mark selected Unread',
            handler: 'makrSelectedUnread',
            bind: {
                disabled: '{!selectedNotifications}'
            }
        }
    },
    tbar: ["@read", "@unread"],
    selModel: {
        type: 'rowmodel',
        mode: 'SIMPLE'
    },
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    bind: {
        store: '{notifications}',
        // selection: '{selectedNotifications}'
    },

    listeners: {
        selectionchange: function (rowmodel) {
            const allSelections = rowmodel.getSelection();
            this.up('dash-main').getViewModel().set('selectedNotifications', allSelections.length ? allSelections : null);
        }
    },

    columns: [{
        menuDisabled: true,
        dataIndex: 'read',
        width: 36,
        cellFocusable: false,
        renderer: (value) => {
            if (!value) {
                return 'o'
            }
        }
    }, {
        menuDisabled: true,
        dataIndex: 'priority',
        cellFocusable: false,
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
            handler: 'markSelectedRead'
        }]
    }]
});