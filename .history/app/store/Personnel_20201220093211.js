Ext.define('Dashboard.store.Notifications', {
    extend: 'Ext.data.Store',

    alias: 'store.notificatinos',

    // model: 'Dashboard.model.Personnel',
    model: {
        fields: ['text', 'received_on', 'priority', 'read']
    },

    data: {
        items: [{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            received_on: '2020-12-20',
            priority: '1',
            read: '1'
        }, {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            received_on: '2020-12-18',
            priority: '2',
            read: '0'
        }, {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            received_on: '2020-12-19',
            priority: '2',
            read: '0'
        }, {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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