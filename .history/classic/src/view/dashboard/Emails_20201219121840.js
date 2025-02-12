Ext.define('Dashboard.view.dashboard.Emails', {
    extend: 'Ext.grid.Panel',
    xtype: 'dash-email',

    requires: [
        'Ext.selection.CellModel'
    ],

    autoLoad: true,
    selModel: {
        type: 'cellmodel'
    },

    bind: {
        activeItem: '{selectedMenu}'
    },

    items: [{
        itemId: 'dashboard',
        html: 'Dashboard'
    }, {
        itemId: 'configurations',
        html: 'Configs'
    }, {
        itemId: 'tasks',
        html: 'Task'
    }]
})