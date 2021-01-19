Ext.define('Dashboard.model.Project', {
    extend: 'Dashboard.model.Base',

    fields: ['projectName', 'tagLine', 'description', 'role', 'skills'],

    proxy: {
        type: 'localstorage',
        id: 'projects',
    },
});