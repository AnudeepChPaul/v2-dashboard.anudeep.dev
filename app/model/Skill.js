Ext.define('Dashboard.model.Skill', {
    extend: 'Dashboard.model.Base',

    fields: ['name', 'rating', 'visible', 'id', 'url'],

    proxy: {
        type: 'localstorage',
        id: 'skills',
    },
});