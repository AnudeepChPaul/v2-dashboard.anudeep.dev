Ext.define('DashModel', {
    extend: 'DashModel',
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