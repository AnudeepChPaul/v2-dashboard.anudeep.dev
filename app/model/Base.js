Ext.define('Dashboard.model.Base', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],

    idProperty: 'id',
    identifier: {
        type: 'uuid'
    },

    schema: {
        namespace: 'Dashboard.model'
    },

    proxy: {
        type: 'localstorage',
    }
});