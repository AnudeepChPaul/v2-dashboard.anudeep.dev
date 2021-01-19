Ext.define("Dashboard.view.configurations.SkillForm", {
    extend: "Ext.form.Panel",
    xtype: "dash-skill-form",

    requires: [
        'Ext.ux.rating.Picker'
    ],

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
        bind: '{skillsList.selection.name}'
    }, {
        fieldLabel: 'Rating',
        name: 'rating',
        xtype: 'rating',
        limit: 10,
        nameable: true,
        bind: '{skillsList.selection.rating}'
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
        reference: 'skillSubmit',
        bind: {
            text: '{skillsList.selection ? "Update" :"Create"}'
        },
        formBind: true,
        handler: 'addSkill'
    }]
});