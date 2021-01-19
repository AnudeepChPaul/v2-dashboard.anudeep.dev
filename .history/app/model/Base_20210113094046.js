Ext.define('DashModel', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],

    idProperty: 'id',
    identifier: {
        type: 'uuid',
        prefix: 'ID_'
    },

    schema: {
        namespace: 'Dashboard.model'
    },

    proxy: {
        type: 'localstorage',
        id: 'notifications',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
});