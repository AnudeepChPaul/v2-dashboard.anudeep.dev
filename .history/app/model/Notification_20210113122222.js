Ext.define('Dashboard.model.Notification', {
    extend: 'DashModel',

    fields: ['text', 'received_on', {
        name: 'priority',
        type: 'number'
    }, {
        name: 'read',
        type: 'number'
    }, 'id'],

    proxy: {
        type: 'localstorage',
        id: 'notifications',
    },
});