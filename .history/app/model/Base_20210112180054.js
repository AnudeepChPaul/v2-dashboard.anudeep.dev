Ext.define('DashModel', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],

    idProperty: 'id',
    identifier: {
        type: 'sequential',
        seed: 1000,
        prefix: 'ID_'
    },

    schema: {
        namespace: 'Dashboard.model'
    }
});