Ext.define('Dashboard.view.dashboard.BoardViewModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.boardModel',

  data: {
    selectedNotifcations: []
  },

  stores: {
    notifications: {
      autoLoad: true,
      autoSync: true,
      model: 'Dashboard.model.Notifications'
    }
  }
});