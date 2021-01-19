Ext.define('Dashboard.view.header.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'dash-header',

    controller: 'main',

    layout: {
        type: "hbox",
        pack: "start",
        align: 'center'
    },
    padding: 0,
    margin: '0 0 1 0',
    height: 'auto',

    header: {
        titlePosition: 0,
        padding: '8 20 8 10',
        defaults: {
            margin: '0 20',
            enableToggle: false
        },
        title: 'Dashboard',

        tools: [{
            xtype: 'combobox',
            store: {
                fields: ['app', 'name'],
                data: [{
                    "app": "resume",
                    "name": "xResume"
                }],
            },
            autoLoadOnValue: true,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'app',
            bind: {
                value: '{selectedApp}'
            }
        }, {
            iconCls: 'fa fa-inbox',
            listeners: {
                click: 'onGotoInbox'
            }
        }, {
            iconCls: 'fa fa-bells',
            listeners: {
                click: 'onGotoNotifications'
            }
        }, ],
    },
})