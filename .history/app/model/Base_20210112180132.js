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
    }
});