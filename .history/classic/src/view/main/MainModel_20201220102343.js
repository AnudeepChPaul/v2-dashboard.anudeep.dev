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
            model: 'Dashboard.model.Notifications',
            data: {
                items: [{
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    received_on: '2020-12-20',
                    priority: '1',
                    read: '1'
                }, {
                    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
                    received_on: '2020-12-18',
                    priority: '2',
                    read: '0'
                }, {
                    text: 'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
                    received_on: '2020-12-19',
                    priority: '2',
                    read: '0'
                }, {
                    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
                    received_on: '2020-12-20',
                    priority: '3',
                    read: '0'
                }]
            },

            proxy: {
                type: 'localstorage',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        }
    }
});