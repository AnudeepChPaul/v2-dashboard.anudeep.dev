Ext.define('Dashboard.model.Notification', {
    extend: 'Dashboard.model.Base',

    fields: ['text', 'received_on', {
        name: 'priority',
        type: 'number'
    }, {
        name: 'read',
        type: 'number'
    }],

    proxy: {
        type: 'localstorage',
        id: 'notifications',
    },
});