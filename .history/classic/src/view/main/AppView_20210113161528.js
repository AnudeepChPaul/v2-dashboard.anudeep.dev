/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("Dashboard.view.main.AppView", {
    extend: "Ext.container.Container",
    xtype: "dash-appview",

    requires: [
        "Ext.plugin.Viewport",
        "Ext.window.MessageBox",

        "Dashboard.view.main.MainController",
        "Dashboard.view.main.MainModel",
        "Dashboard.view.header.Header",
        'Dashboard.view.sidemenu.Menu',
        'Ext.ux.StatusBar'
    ],

    // controller: "main",
    // viewModel: {
    //     type: "main"
    // },

    layout: {
        type: "border",
    },

    weight: '100%',
    height: '100%',
    defaults: {
        style: {},
    },
    items: [{
        region: "center",
        layout: {
            type: "card",
            deferredRender: true,
        },
        padding: 0,
        margin: "0 0 1 0",
        height: "auto",

        bind: {
            activeItem: "{selectedMenu}",
        },

        items: [{
            itemId: "dashboard",
            xtype: "dash-board",
        }, {
            itemId: "configurations",
            xtype: "dash-config",
        }, {
            itemId: "tasks",
            xtype: "dash-tasks",
        }, {
            itemId: "mails",
            xtype: "dash-email",
        }, {
            itemId: "notifications",
            xtype: "dash-notifications",
        }]
    }, {
        region: "west",
        xtype: "dash-sidemenu"
    }, {
        region: "north",
        xtype: "dash-header"
    }, {
        region: 'south',
        xtype: 'statusbar',
        id: 'dash-stat',

        defaultText: 'All Looks Good',
        defaultIconCls: 'fa fa-ready',

        text: 'Ready',
        iconCls: 'ready-icon',
    }],
});