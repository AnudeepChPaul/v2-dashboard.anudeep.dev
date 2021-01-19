Ext.define('Dashboard.model.Project', {
    extend: 'DashModel',

    fields: ['projectName', 'tagLine', 'description', 'role', 'skills', 'id'],

    proxy: {
        type: 'localstorage',
        id: 'projects',
    },
});