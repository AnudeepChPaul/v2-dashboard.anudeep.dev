Ext.define('Dashboard.model.Experience', {
    extend: 'Dashboard.model.Base',

    fields: ['companyName', 'duration', 'designation', 'visible', 'id', 'url', 'projects'],

    proxy: {
        type: 'localstorage',
        id: 'experiences',
    },
});