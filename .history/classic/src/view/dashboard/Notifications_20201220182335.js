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
        },
        clearSelection: {
            iconCls: 'fa fa-times',
            text: 'Clear Selection',
            ui: 'red',
            handler: 'clearNotificationSelection',
            bind: {
                hidden: '{!selectedNotifications}'
            }
        }
    },
    tbar: ["@read", "@unread", "->", "@clearSelection"],
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
        store: '{notifications}'
    },

    listeners: {
        selectionchange: function (rowmodel) {
            const allSelections = rowmodel.getSelection();
            this.up('dash-main').getViewModel().set('selectedNotifications', allSelections.length ? allSelections : null);
        }
    },

    columns: {
        defaults: {
            menuDisabled: true,
            width: 36
        },
        items: [{
            dataIndex: 'read',
            cellFocusable: false,
            renderer: (value) => {
                if (!value) {
                    return 'o'
                }
            }
        }, {
            dataIndex: 'priority',
            cellFocusable: false,
            renderer: function (value) {
                switch (value) {
                    case 1:
                        return '<div class="fa fa-exclamation"></div>';
                    case 2:
                        return '<div class="fa fa-angle-double-up"></div>';
                    case 3:
                        return '<div class="fa fa-chevron-down"></div>';
                }
            }
        }, {
            header: 'Date',
            dataIndex: 'received_on',
            width: 121
        }, {
            header: 'Message',
            dataIndex: 'text',
            flex: 1
        }, {
            xtype: 'actioncolumn',
            width: 49,
            sortable: false,
            items: [{
                iconCls: 'far fa-envelope-open',
                tooltip: 'Mark Read',
                handler: 'markSelectedRead'
            }]
        }]
    }
});