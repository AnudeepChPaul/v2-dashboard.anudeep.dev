Ext.define('Dashboard.model.Skill', {
    extend: 'Dashboard.model.Base',

    fields: ['name', 'rating', 'show', 'id'],

    proxy: {
        type: 'localstorage',
        id: 'skills',
    },
});