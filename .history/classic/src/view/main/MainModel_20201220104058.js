/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Dashboard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Dashboard',
        selectedMenu: 'dashboard',
        selectedApp: 'resume',
        xxxx: null
    },

    stores: {
        notifications: {
            autoLoad: true,
            model: 'Dashboard.model.Notifications',
            proxy: {
                type: 'localstorage',
                id: 'notifications',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            listerners: {
                load: () => {
                    debugger
                }
            }
        }
    }
});