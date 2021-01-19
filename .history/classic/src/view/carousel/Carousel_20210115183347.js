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

  scrollable: {
    scrollbars: false
    y: false,
    x: 'auto'
  },

  items: [{
    html: 1,
    border: 1,
    width: 256,
    height: 400
  }, {
    html: 2,
    border: 1,
    width: 256,
    height: 400
  }, {
    html: 2,
    border: 1,
    width: 256,
    height: 400
  }, {
    html: 2,
    border: 1,
    width: 256,
    height: 400
  }, {
    html: 2,
    border: 1,
    width: 256,
    height: 400
  }],

  popout: function () {
    console.log('popout')
  },

  aToZOrder: function () {
    console.log('aToZOrder')
  },

  zToAOrder: function () {
    console.log('zToAOrder')
  }
});