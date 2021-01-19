Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.panel.Panel",
    xtype: "dash-config",

    itemId: 'configurations',

    weight: '100%',
    height: '100%',
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
});