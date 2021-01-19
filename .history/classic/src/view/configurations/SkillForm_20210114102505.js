Ext.define("Dashboard.view.configurations.SkillForm", {
    extend: "Ext.form.Panel",
    xtype: "dash-skill-form",

    requires: [
        'Ext.ux.rating.Picker'
    ],

    title: 'New Skill',
    defaultType: 'textfield',
    bodyPadding: '10 20',
    buttonAlign: 'center',
    defaults: {
        width: '100%',
        labelWidth: 144
    },
    items: [{
        fieldLabel: 'Skill Name',
        name: 'name',
        allowBlank: false,
    }, {
        fieldLabel: 'Rating',
        name: 'rating',
        xtype: 'rating',
        limit: 10,
        nameable: true,
    }, {
        xtype: 'checkbox',
        fieldLabel: 'Can Display',
        name: 'show',
        inputValue: true,
        allowBlank: false,
        nameHolder: 'show',
        checked: true
    }],
    fbar: [{
        type: 'submit',
        text: 'Create',
        formBind: true,
        handler: 'addSkill'
    }]
});