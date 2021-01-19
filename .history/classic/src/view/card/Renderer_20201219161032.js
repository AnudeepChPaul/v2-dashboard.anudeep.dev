Ext.define('Dashboard.view.card.Renderer', {
    extend: 'Ext.panel.Panel',
    xtype: 'dash-card-renderer',

    layout: {
        type: "card",
        deferredRender: false
    },
    padding: 0,
    margin: '0 0 1 0',
    height: 'auto',

    bind: {
        activeItem: '{selectedMenu}'
    },

    items: [{
        itemId: 'dashboard',
        xtype: 'dash-board'
    }, {
        itemId: 'configurations',
        html: 'Configs'
    }, {
        itemId: 'tasks',
        html: 'Task'
    }, {
        itemId: 'mails',
        xtype: 'dash-email',
        html: 'mails',
    }, {
        itemId: 'notifications',
        html: 'notifications',
        xtype: 'dash-notifications'
    }]
})