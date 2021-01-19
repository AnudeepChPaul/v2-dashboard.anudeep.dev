Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.form.Panel",
    xtype: "dash-config",

    title: 'Configurations',

    defaults: {
        style: {},
    },

    items: [{
        fieldLabel: "Page Title",
        name: 'pageTitle'
    }, {
        fieldLabel: "Intro Text",
        name: 'introText'
    }, {
        fieldLabel: "Tag Lines",
        name: 'tagLines'
    }, {
        fieldLabel: "Experience Tag Lines",
        name: 'experienceTagLine'
    }, {
        fieldLabel: "Livingin Tag Lines",
        name: 'livingInTagLine'
    }],

    initComponent: function (config) {
        this.callParent(config);
        debugger
    }
});