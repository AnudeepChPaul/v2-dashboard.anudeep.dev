Ext.define('Dashboard.model.Notifications', {
    extend: 'DashModel',

    fields: ['text', 'received_on', {
        name: 'priority',
        type: 'number'
    }, 'read']
});