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
    xtype: 'dash-email',
    height: '33%',
    width: '33%'
  }, {
    region: "south",
    xtype: 'toolbar',
    height: 40
  }],
});