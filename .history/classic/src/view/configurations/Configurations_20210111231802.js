Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.panel.Panel",
    xtype: "dash-config",

    title: 'Configurations',

    layout: {
        type: 'vbox',
        align: 'strechmax'
    },
    bodyPadding: '10 20',

    defaults: {
        width: '100%',
        bodyPadding: '10 20',
        xtype: 'form',
        defaultType: 'textfield',

        defaults: {
            width: '100%',
            labelWidth: '49'
        }
    },

    items: [{
        title: 'Introductory',
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

    }, {
        title: 'Skills',
        items: [{
            fieldLabel: "Skills Header",
            name: 'skillsHeader'
        }]
    }]
});