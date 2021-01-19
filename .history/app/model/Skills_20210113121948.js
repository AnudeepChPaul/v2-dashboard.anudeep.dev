Ext.define('Dashboard.model.Project', {
    extend: 'DashModel',

    fields: ['projectName', 'tagLine', 'description', 'role', 'skills'],

    proxy: {
        type: 'localstorage',
        id: 'projects',
    },
});