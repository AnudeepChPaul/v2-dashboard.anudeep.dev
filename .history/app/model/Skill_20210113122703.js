Ext.define('Dashboard.model.Skill', {
    extend: 'DashModel',

    fields: ['name', 'rating', 'show'],

    proxy: {
        type: 'localstorage',
        id: 'skills',
    },
});