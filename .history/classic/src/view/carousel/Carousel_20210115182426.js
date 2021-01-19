Ext.define("Dashboard.view.carousel.Carousel", {
  extend: "Ext.container.Container",
  xtype: "dash-carousel",

  layout: {
    type: "hbox",
  },

  weight: '100%',
  height: 441,
  buttonAlign: 'center',
  defaults: {
    style: {},
  },
  items: [{
    html: 1,
    border: '1px solid red',
    width: 200,
    height: 400
  }, {
    html: 2,
    border: '1px solid red',
    width: 256,
    height: 400
  }]
});