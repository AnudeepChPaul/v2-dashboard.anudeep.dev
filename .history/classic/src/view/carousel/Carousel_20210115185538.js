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
    scrollbars: true,
    y: false,
    x: 'auto'
  },

  items: [{
    html: 1,
    border: 1,
    width: 256,
    height: 400,
    listeners: {
      focusenter: 'popout'
    }
  }, {
    html: 2,
    border: 1,
    width: 236,
    height: 360,
    listeners: {
      focusenter: 'popout'
    }
  }, {
    html: 2,
    border: 1,
    width: 216,
    height: 320,
    listeners: {
      focusenter: 'popout'
    }
  }, {
    html: 2,
    border: 1,
    width: 196,
    height: 280,
    listeners: {
      focusenter: 'popout'
    }
  }, {
    html: 2,
    border: 1,
    width: 176,
    height: 240
  }],

  popout: function () {
    console.log('popout')
  },

  aToZOrder: function () {
    console.log('aToZOrder')
  },

  zToAOrder: function () {
    console.log('zToAOrder')
  },

  listeners: {
    afterrender: function () {
      console.log('afterrender');
    }
  }
});