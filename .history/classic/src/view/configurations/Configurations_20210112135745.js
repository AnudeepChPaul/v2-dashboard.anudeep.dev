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
            title: 'Introductions',
            tools: [{
                type: 'refresh'
            }]
        },
        xtype: 'form',
        defaultType: 'textfield',
        buttonAlign: 'center',
        bodyPadding: '10 10',
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
            flex: 1,
            title: 'Add to Skill',
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
                allowBlank: false,
            }, {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Can Display',
                    name: 'show',
                    allowBlank: false,
                    xtype: 'checkbox',
                    checked: true
                }]
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
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        minHeight: 400,
        items: [{
            xtype: 'gridpanel',
            header: {
                title: 'Experiences',
                tools: [{
                    type: 'Add'
                }]
            },
            flex: 1,
            margin: '0 10 0 0',
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
        }, {
            xtype: 'form',
            defaultType: 'textfield',
            bodyPadding: '10 20',
            flex: 1,
            title: 'Add to Experience',
            buttonAlign: 'center',
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
        }]
    }]
});