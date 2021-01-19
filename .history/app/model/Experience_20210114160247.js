Ext.define('Dashboard.model.Skill', {
    extend: 'Dashboard.model.Base',

    fields: ['name', 'rating', 'show', 'id', 'url'],

    proxy: {
        type: 'localstorage',
        id: 'skills',
    },
});