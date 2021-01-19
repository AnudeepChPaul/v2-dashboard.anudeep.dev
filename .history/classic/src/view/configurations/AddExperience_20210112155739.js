Ext.define('Dashboard.view.configurations.AddExperience', {
    extend: 'Ext.form.Panel',
    xtype: 'dash-config-addexperience',
    defaultType: 'textfield',
    bodyPadding: '10 20',
    flex: 1,
    buttonAlign: 'center',

    width: 600,

    defaults: {
        width: '100%',
        labelWidth: 144
    },
    items: [{
        fieldLabel: 'Company Name',
        name: 'companyName',
        allowBlank: false,
    }, {
        fieldLabel: 'Work Duration',
        name: 'duration',
        allowBlank: false,
    }, {
        fieldLabel: 'Designation',
        name: 'designation',
        allowBlank: false,
    }, {
        fieldLabel: 'Can Display',
        name: 'show',
        allowBlank: false,
        xtype: 'checkbox',
        checked: true
    }, {
        xtype: 'fieldset',
        items: [{
            fieldLabel: 'Project Name',
            name: 'projectName'
        }, {
            fieldLabel: 'Description',
            name: 'description'
        }]
    }],
    fbar: [{
        type: 'submit',
        text: 'Save',
        formBind: true,
        handler: function () {
            const form = this.up('form').getForm();
            form.submit({
                success: function () {
                    debugger
                },
                failure: function () {
                    debugger
                }
            })
            form.reset();
        }
    }]
})