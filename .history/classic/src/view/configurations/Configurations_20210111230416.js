Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.panel.Panel",
    xtype: "dash-config",

    title: 'Configurations',

    layout: {
        type: 'vbox',
        align: 'strechmax'
    },
    bodyPadding: '10 20',

    items: [{
        xtype: 'formpanel',
        defaultType: 'textfield',
        defaults: {
            width: '100%'
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
            fieldLabel: "Living-in Tag Lines",
            name: 'livingInTagLine'
        }]

    }]
});