Ext.define('Dashboard.store.Notifications', {
    extend: 'DashStore',

    alias: 'store.notifications',

    model: 'Dashboard.model.Notifications',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});