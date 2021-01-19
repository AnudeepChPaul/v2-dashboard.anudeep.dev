Ext.define('Dashboard.store.Notifications', {
    extend: 'DashStore',

    alias: 'store.notifications',

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
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});