Ext.define("Dashboard.view.carousel.Carousel", {
  extend: "Ext.container.Container",
  xtype: "dash-carousel",

  layout: {
    type: "hbox",
    align: 'center'
  },

  weight: '100%',
  height: 441,
  defaults: {
    style: {
      border: '1px solid black',
      margin: '0 10px',
      boxShadow: '5px 0 9px 5px rgba(0,0,0,0.5)'
    },
    listeners: {

      el: {
        click: function () {
          this.component.up('dash-carousel').popout();
        }
      }
    }
  },

  scrollable: {
    scrollbars: false,
    y: false,
    x: 'auto'
  },

  items: [{
    html: 1,
    xtype: 'container',
    width: 256,
    height: 400,
    zIndex: 2,
  }, {
    html: 2,
    xtype: 'container',
    width: 236,
    height: 360,
    zIndex: 1,
  }, {
    html: 2,
    xtype: 'container',
    width: 216,
    height: 320,
  }, {
    html: 2,
    xtype: 'container',
    width: 196,
    height: 280,
  }, {
    html: 2,
    xtype: 'container',
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