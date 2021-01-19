Ext.define('Dashboard.model.Project', {
    extend: 'DashModel',

    fields: ['projectName', 'tagLine', 'description', 'role'],

    proxy: {
        type: 'localstorage',
        id: 'projects',
    },
});