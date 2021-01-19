Ext.define("Dashboard.view.carousel.Carousel", {
  extend: "Ext.panel.Panel",
  xtype: "dash-carousel",

  layout: {
    type: "border",
  },

  weight: '100%',
  height: '100%',
  buttonAlign: 'center',
  defaults: {
    style: {},
  },
  fbar: [{
    iconCls: 'fa fa-eye',
    handler: function () {
      this.up('dash-carousel').down('container').setActiveItem(0);
    }
  }, {
    iconCls: 'fa fa-eye',
    handler: function () {
      this.up('dash-carousel').down('container').setActiveItem(1);
    }
  }, {
    iconCls: 'fa fa-eye',
    handler: function () {
      this.up('dash-carousel').down('container').setActiveItem(2);
    }
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