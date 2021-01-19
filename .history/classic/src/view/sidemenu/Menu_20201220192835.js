Ext.define('Dashboard.view.sidemenu.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'dash-sidemenu',

    title: 'Menu',

    padding: 0,
    height: 'auto',
    margin: '0 1 0 0',

    layout: {
        type: "vbox",
        pack: 'start',
        align: 'center'
    },
    collapsible: true,
    items: [{
        xtype: 'segmentedbutton',
        layout: {
            type: 'vbox'
        },
        defaults: {
            margin: '8 4 0 4',
            width: 40,
            scale: 'medium',
            enableToggle: true,
            minHeight: 36
        },
        bind: {
            value: '{selectedMenu}'
        },
        items: [{
            // text: "Dashboard",
            bind: {
                pressed: '{selectedMenu === dashboard}'
            },
            iconCls: 'fa fa-home',
            value: "dashboard"
        }, {
            // text: "Configurations",
            bind: {
                pressed: '{selectedMenu === configurations}'
            },
            iconCls: 'fa fa-cogs',
            value: "configurations",
        }, {
            text: "Emails",
            value: "mails",
            hidden: true
        }, {
            text: "Notifications",
            value: "notifications",
            hidden: true
        }, {
            // text: "Tasks",
            bind: {
                pressed: '{selectedMenu === tasks}'
            },
            iconCls: 'fa fa-tasks',
            value: "tasks"
        }]
    }],
})