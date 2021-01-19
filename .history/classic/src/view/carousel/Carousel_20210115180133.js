Ext.define("Dashboard.view.carousel.Carousel", {
  extend: "Ext.container.Container",
  xtype: "dash-carousel",

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
    xtype: 'container',
    layout: {
      type: 'card'
    },
    items: [{
      html: 1
    }, {
      html: 2
    }]
  }, {
    region: "south",
    xtype: 'toolbar',
    height: 40,
    tools: [{
      type: 'refresh'
    }, {
      type: 'refresh'
    }, {
      type: 'refresh'
    }]
  }],
});