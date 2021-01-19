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
        selections: []
    },

    formulas: {
        xxxx: {
            bind: '{selections}',
            get: (selections) => {
                debugger
                return selections;
            },
            set: function (value) {
                this.set({
                    selections: this.selection.concat(value)
                })
            }
        }
    },

    stores: {
        notifications: {
            autoLoad: true,
            autoSync: true,
            model: 'Dashboard.model.Notifications'
        }
    }
});