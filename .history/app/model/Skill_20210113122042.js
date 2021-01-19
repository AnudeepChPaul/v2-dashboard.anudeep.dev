Ext.define('Dashboard.model.Skill', {
    extend: 'DashModel',

    fields: ['skillName', 'rating', 'canDisplay'],

    proxy: {
        type: 'localstorage',
        id: 'projects',
    },
});