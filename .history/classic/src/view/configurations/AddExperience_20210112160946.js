Ext.define('Dashboard.view.configurations.AddExperience', {
    extend: 'Ext.form.Panel',
    xtype: 'dash-config-addexperience',

    defaultType: 'textfield',
    flex: 1,
    width: 600,
    buttonAlign: 'center',
    bodyPadding: '10 20',

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
        // }, {
        //     xtype: 'fieldset',
        //     defaultType: 'textfield',
        //     items: [{
        //         fieldLabel: 'Project Name',
        //         name: 'projectName'
        //     }, {
        //         fieldLabel: 'Tag Line',
        //         name: 'tagLine'
        //     }, {
        //         fieldLabel: 'Description',
        //         name: 'description'
        //     }, {
        //         fieldLabel: 'My Role',
        //         name: 'role'
        //     }]
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