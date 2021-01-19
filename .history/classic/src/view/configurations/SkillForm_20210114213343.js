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
    header: {},
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
            cls: 'dash-custom-label-cls',
            text: 'Rating',
            width: 149,
            height: 20
        }, {
            name: 'rating',
            xtype: 'rating',
            limit: 10,
            nameable: true,
            bind: '{skillsList.selection.rating}'
        }]
    }, {
        xtype: 'checkbox',
        fieldLabel: 'Visible',
        name: 'visible',
        inputValue: true,
        allowBlank: false,
        nameHolder: 'visible',
        checked: true,
        bind: '{skillsList.selection.visible}'
    }],

    getButtons: function () {
        return {
            submit: {
                xtype: 'button',
                type: 'submit',
                text: 'Create',
                bind: {
                    hidden: '{!!skillsList.selection}'
                },
                formBind: true,
                handler: 'addSkill'
            },
            clear: {
                xtype: 'button',
                type: 'button',
                text: 'Clear',
                bind: {
                    hidden: '{!skillsList.selection}'
                },
                handler: 'onClearSkillSelection'
            }
        }
    },

    showButtonsOnFooter: function () {
        const btns = this.getButtons();
        this.addDocked([{
            xtype: 'toolbar',
            dock: 'bottom',
            defaultType: 'button',
            buttonAlign: 'center',
            items: ['->', btns.submit, btns.clear, '->']
        }])
    },

    showButtonsOnHeader: function () {
        const btns = this.getButtons();
        this.getHeader().add([btns.submit, btns.clear])
    },

    listeners: {
        afterrender: function () {
            // this.showButtonsOnFooter();
            this.showButtonsOnHeader();
        }
    }
});