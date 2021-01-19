Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.panel.Panel",
    xtype: "dash-config",

    title: 'Configurations',

    layout: {
        type: 'vbox',
        align: 'strechmax'
    },
    bodyPadding: '10 20',
    scrollable: {
        scrollbars: false,
        y: 'auto',
        x: false
    },

    defaults: {
        width: '100%',
        bodyPadding: '10 0',
    },

    items: [{
        header: {
            title: 'Introductions'
        },
        xtype: 'form',
        defaultType: 'textfield',
        buttonAlign: 'center',
        defaults: {
            width: '100%',
            labelWidth: 144
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
        }],

        fbar: [{
            text: 'Save'
        }]

    }, {
        // title: 'Skills',
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        minHeight: 360,
        items: [{
            xtype: 'gridpanel',
            title: 'Skills',
            margin: '0 10 0 0',
            flex: 1,
            store: {
                data: [{
                    techId: 'python',
                    name: 'Python',
                    rating: '4',
                    show: true
                }, {
                    techId: 'js',
                    name: 'Javascript',
                    rating: '5',
                    show: true
                }]
            },
            columns: [{
                text: '#',
                xtype: 'rownumberer'
            }, {
                text: 'Skill',
                dataIndex: 'name',
                hideable: false,
                menuDisabled: true,
                flex: 1
            }, {
                text: 'Rating',
                dataIndex: 'rating',
                hideable: false,
                menuDisabled: true
            }, {
                text: 'Can Display',
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
                dataIndex: 'show',
                hideable: false,
                menuDisabled: true
            }]
        }, {
            xtype: 'form',
            defaultType: 'textfield',
            bodyPadding: '10 20',
            title: 'Add to Skill',
            buttonAlign: 'center',
            items: [{
                fieldLabel: 'ID',
                name: 'skillId',
                allowBlank: false,
            }, {
                fieldLabel: 'Display Text',
                name: 'name',
                allowBlank: false,
            }, {
                fieldLabel: 'Rating',
                name: 'rating',
                allowBlank: false,
            }, {
                fieldLabel: 'Can Display',
                name: 'show',
                allowBlank: false,
                xtype: 'checkbox',
                checked: true
            }],
            fbar: [{
                type: 'submit',
                text: 'Save',
                formBind: true,
                handler: function () {
                    const form = this.up('form').getForm();
                    form.reset();
                }
            }]
        }]
    }, {
        title: 'Experiences',
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        minHeight: 400,
        items: [{
            xtype: 'gridpanel',
            flex: 1,
            store: {
                data: [{
                    companyId: 'inq',
                    companyName: 'InQuest Technologies',
                    duration: '2.5yrs',
                    designation: 'Software Engineer',
                    technologies: [],
                    projects: []
                }, {
                    companyId: 'zy',
                    companyName: 'Zycus',
                    duration: '2months',
                    designation: 'Software Engineer',
                    technologies: [],
                    projects: []
                }, {
                    companyId: 'manh',
                    companyName: 'Manhattan Associates',
                    duration: '2.4yrs',
                    designation: 'Sr. Software Engineer',
                    technologies: [],
                    projects: []
                }]
            },
            columns: [{
                text: '#',
                xtype: 'rownumberer'
            }, {
                text: 'Company Name',
                dataIndex: 'companyName',
                hideable: false,
                menuDisabled: true,
                flex: 2
            }, {
                text: 'Designation',
                dataIndex: 'designation',
                hideable: false,
                menuDisabled: true,
                flex: 2
            }, {
                text: 'Duration',
                dataIndex: 'duration',
                hideable: false,
                menuDisabled: true,
                flex: 1
            }]
        }]
    }]
});