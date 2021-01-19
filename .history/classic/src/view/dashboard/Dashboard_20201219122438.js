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
    xtype: 'dash-email'
  }, {
    region: "west",
    xtype: 'dash-email',
    width: 225
  }, {
    region: "north",
    xtype: "dash-header"
  }],
});