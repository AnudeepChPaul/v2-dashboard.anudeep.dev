Ext.define('Dashboard.view.dashboard.BoardViewController', {
  extend: 'Ext.app.ViewController',

  alias: 'viewcontroller.boardController',

  data: {
    notificationSelection: null
  },

  stores: {
    notifications: {
      autoLoad: true,
      autoSync: true,
      model: 'Dashboard.model.Notifications'
    }
  }
});