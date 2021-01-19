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
        xtype: 'dash-email',
        height: '50%',
        width: '50%'
    }, {
        region: "north",
        xtype: 'dash-email',
        height: '50%'
    }, {
        region: "west",
        xtype: 'dash-email',
        width: '50%'
    }, {
        region: "east",
        xtype: 'dash-email',
        width: '50%'
    }],
});