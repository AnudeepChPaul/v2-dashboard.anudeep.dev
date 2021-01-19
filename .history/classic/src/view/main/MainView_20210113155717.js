/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("Dashboard.view.main.MainView", {
    extend: "Ext.container.Container",
    xtype: "dash-main",

    requires: [
        "Ext.plugin.Viewport",
        "Ext.window.MessageBox"
    ],

    controller: "main",
    viewModel: {
        type: "main"
    },

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
        xtype: 'dash-appview',
        disabled: true
    }],
});