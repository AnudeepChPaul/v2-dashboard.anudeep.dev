Ext.define("Dashboard.view.configurations.ProjectForm", {
    extend: "Ext.form.Panel",
    xtype: "dash-project-form",

    requires: [
        'Ext.ux.rating.Picker'
    ],

    title: 'New Project',
    defaultType: 'textfield',
    buttonAlign: 'center',
    bodyPadding: '10 20',

    defaults: {
        width: '100%',
        labelWidth: 144
    },

    items: [{
        fieldLabel: 'Project Name',
        name: 'projectName',
        allowBlank: false,
    }, {
        fieldLabel: 'Tag Line',
        name: 'tagLine',
        allowBlank: false,
    }, {
        fieldLabel: 'Project Description',
        name: 'description',
        xtype: 'textarea',
        allowBlank: false,
        checked: true
    }, {
        fieldLabel: 'Role',
        name: 'role',
        allowBlank: false,
        checked: true
    }, {
        fieldLabel: 'Skill Used',
        name: 'skills',
        xtype: 'tagfield',
        bind: {
            store: '{skills}'
        },
        allowBlank: false,
        displayField: 'name',
        valueField: 'id',
        queryMode: 'local',
        filterPickList: false
    }, {
        fieldLabel: 'Can Display',
        name: 'show',
        allowBlank: false,
        xtype: 'checkbox',
        checked: true
    }],
    fbar: [{
        type: 'submit',
        text: 'Add',
        formBind: true,
        handler: 'addProject'
    }]
});