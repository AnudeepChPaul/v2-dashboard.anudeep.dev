Ext.override('DashModel', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],
    identifier: 'uuid',
    schema: {
        namespace: 'Dashboard.model'
    }
});