Ext.define("Dashboard.view.dashboard.Dashboard", {
    extend: "Ext.container.Container",
    xtype: "dash-board",

    requires: [
        "Ext.plugin.Viewport",
        "Ext.window.MessageBox"
    ],

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
        xtype: 'dash-infoslide',
        height: 441
    }, {
        region: "north",
        xtype: 'dash-email',
        width: '100%',
        height: 324
    }, {
        region: "east",
        xtype: 'dash-notifications',
        width: 600
    }],
});