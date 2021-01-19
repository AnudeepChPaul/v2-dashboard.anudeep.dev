Ext.define("Dashboard.view.configurations.ProjectForm", {
    extend: "Ext.form.Panel",
    xtype: "dash-project-form",

    requires: [
        'Ext.ux.rating.Picker'
    ],

    defaultType: 'textfield',
    buttonAlign: 'center',
    bodyPadding: '10 20',
    height: 300,

    defaults: {
        width: '100%',
        labelWidth: 144
    },

    items: [{
        fieldLabel: 'Project Name',
        name: 'projectName',
        allowBlank: false,
        bind: '{projectsList.selection.projectName}'
    }, {
        fieldLabel: 'Tag Line',
        name: 'tagLine',
        allowBlank: false,
        bind: '{projectsList.selection.tagLine}'
    }, {
        fieldLabel: 'Project Description',
        name: 'description',
        xtype: 'textarea',
        allowBlank: false,
        checked: true,
        bind: '{projectsList.selection.description}'
    }, {
        fieldLabel: 'Role',
        name: 'role',
        allowBlank: false,
        checked: true,
        bind: '{projectsList.selection.role}'
    }, {
        fieldLabel: 'Skill Used',
        name: 'skills',
        xtype: 'tagfield',
        bind: {
            store: '{skills}',
            value: '{projectsList.selection.skills}'
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
        text: 'Create',
        formBind: true,
        handler: 'addProject'
    }]
});