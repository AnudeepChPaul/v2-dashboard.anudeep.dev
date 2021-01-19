Ext.define('Dashboard.model.Skills', {
    extend: 'DashModel',

    fields: ['projectName', 'tagLine', 'description', 'role', 'skills'],

    proxy: {
        type: 'localstorage',
        id: 'projects',
    },
});