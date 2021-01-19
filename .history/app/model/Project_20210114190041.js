Ext.define('Dashboard.model.Project', {
    extend: 'Dashboard.model.Base',

    fields: ['projectName', 'tagLine', 'description', 'role', 'skills', 'visible'],

    proxy: {
        type: 'localstorage',
        id: 'projects',
    },
});