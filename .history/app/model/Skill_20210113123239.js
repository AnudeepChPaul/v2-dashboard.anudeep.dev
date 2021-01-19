Ext.define('Dashboard.model.Skill', {
    extend: 'DashModel',

    fields: ['name', 'rating', 'show', 'id'],

    proxy: {
        type: 'localstorage',
        id: 'skills',
    },
});