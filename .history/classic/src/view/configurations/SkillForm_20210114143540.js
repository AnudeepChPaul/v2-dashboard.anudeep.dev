Ext.define("Dashboard.view.configurations.SkillForm", {
    extend: "Ext.form.Panel",
    xtype: "dash-skill-form",

    requires: [
        'Ext.ux.rating.Picker'
    ],

    defaultType: 'textfield',
    bodyPadding: '10 20',
    buttonAlign: 'center',
    reference: 'skillsForm',
    defaults: {
        width: '100%',
        labelWidth: 144
    },
    items: [{
        fieldLabel: 'Skill Name',
        name: 'name',
        allowBlank: false,
        bind: '{skillsList.selection.name}'
    }, {
        fieldLabel: 'URL',
        name: 'url',
        allowBlank: false,
        bind: '{skillsList.selection.url}'
    }, {
        xtype: 'container',
        layout: {
            type: "hbox"
        },
        items: [{
            xtype: 'label',
            text: 'Rating',
            width: 144
        }, {
            name: 'rating',
            xtype: 'rating',
            limit: 10,
            nameable: true,
            bind: '{skillsList.selection.rating}'
        }]
    }, {
        xtype: 'checkbox',
        fieldLabel: 'Can Display',
        name: 'show',
        inputValue: true,
        allowBlank: false,
        nameHolder: 'show',
        checked: true,
        bind: '{skillsList.selection.show}'
    }],
    fbar: [{
        type: 'submit',
        text: 'Create',
        bind: {
            hidden: '{!!skillsList.selection}'
        },
        formBind: true,
        handler: 'addSkill'
    }]
});