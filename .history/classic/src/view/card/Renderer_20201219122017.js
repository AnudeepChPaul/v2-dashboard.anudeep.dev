Ext.define('Dashboard.view.card.Renderer', {
  extend: 'Ext.panel.Panel',
  xtype: 'dash-card-renderer',

  layout: {
    type: "card",
    deferredRender: true
  },
  padding: 0,
  margin: '0 0 1 0',
  height: 'auto',

  bind: {
    activeItem: '{selectedMenu}'
  },

  items: [{
    itemId: 'dashboard',
    items: [{
      xtype: 'dash-email'
    }]
  }, {
    itemId: 'configurations',
    html: 'Configs'
  }, {
    itemId: 'tasks',
    html: 'Task'
  }]
})