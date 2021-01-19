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
            width: 169,
            scale: 'medium',
            enableToggle: true,
            minHeight: 36
        },
        bind: {
            value: '{selectedMenu}'
        },
        items: [{
            text: "Dashboard",
            iconCls: 'fa fa-tasks',
            value: "dashboard"
        }, {
            text: "Configurations",
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
            text: "Tasks",
            value: "tasks"
        }]
    }],
})