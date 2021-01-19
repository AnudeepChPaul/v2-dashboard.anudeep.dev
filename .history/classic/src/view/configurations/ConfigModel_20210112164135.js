/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Dashboard.view.configurations.ConfigModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.dash-config-model',

  data: {
    name: 'Dashboard',
    selectedMenu: 'configurations',
    selectedApp: 'resume',
    selectedNotifications: null
  },

  stores: {
    notifications: {
      autoLoad: true,
      autoSync: true,
      model: 'Dashboard.model.Notifications'
    }
  }
});