Ext.define("Dashboard.view.dashboard.Tasks", {
    extend: "Ext.container.Container",
    xtype: "dash-tasks",

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
        height: '33%',
        width: '33%'
    }, {
        region: "west",
        xtype: 'dash-email',
        width: '33%'
    }, {
        region: "east",
        xtype: 'dash-email',
        width: '33%'
    }, {
        region: "south",
        xtype: 'dash-email',
        height: '33%'
    }],
});