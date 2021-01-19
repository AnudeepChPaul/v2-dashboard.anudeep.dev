Ext.define("Dashboard.view.carousel.Carousel", {
  extend: "Ext.panel.Panel",
  xtype: "dash-carousel",

  layout: {
    type: "border",
  },

  weight: '100%',
  height: '100%',
  defaultAlign: 'center',
  defaults: {
    style: {},
  },
  fbar: [{
    iconCls: 'fa fa-eye'
  }, {
    iconCls: 'fa fa-eye'
  }, {
    iconCls: 'fa fa-eye'
  }],
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
  }],
});