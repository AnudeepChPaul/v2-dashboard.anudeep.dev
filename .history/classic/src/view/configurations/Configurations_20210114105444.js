Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.panel.Panel",
    xtype: "dash-config",
    requires: [
        'Ext.ux.rating.Picker'
    ],

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
    controller: 'dash-config-controller',
    defaults: {
        width: '100%',
        height: 'auto',
        bodyPadding: '10 0',
    },

    items: [{
        header: {
            title: 'Introductions',
            tools: [{
                type: 'save',
                handler: 'saveIntroduction'
            }]
        },
        xtype: 'form',
        itemId: 'introductionConfig',
        defaultType: 'textfield',
        buttonAlign: 'center',
        bodyPadding: '10 10',
        layout: 'column',
        defaults: {
            xtype: 'container',
            defaultType: 'textfield',
            width: '50%',
            padding: '0 10',
            defaults: {
                width: '100%',
                labelWidth: 144
            }
        },
        items: [{
            items: [{
                fieldLabel: "Page Title",
                name: 'pageTitle'
            }, {
                fieldLabel: "Intro Text",
                name: 'introText'
            }, {
                fieldLabel: "Tag Lines",
                name: 'tagLines'
            }],
        }, {
            items: [{
                fieldLabel: "Experience Tag Lines",
                name: 'experienceTagLine'
            }, {
                fieldLabel: "Living-in Tag Lines",
                name: 'livingInTagLine'
            }]
        }]

    }, {
        xtype: 'panel',
        itemId: 'skillConfig',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'gridpanel',
            title: 'Skills',
            margin: '0 10 0 0',
            referenece: 'skillsList',
            flex: 1.5,
            bind: {
                store: '{skills}'
            },

            setSelection: function (selection) {
                this.callParent(arguments);
                this.publishState('selection', selection)
            },

            selModel: 'rowmodel',
            plugins: {
                cellediting: {
                    clicksToEdit: 2
                }
            },
            columns: [{
                text: '#',
                xtype: 'rownumberer'
            }, {
                text: 'Skill',
                dataIndex: 'name',
                hideable: false,
                menuDisabled: true,
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                text: 'Rating',
                dataIndex: 'rating',
                flex: 2,
                xtype: 'widgetcolumn',
                widget: {
                    xtype: 'rating',
                    limit: 10,
                    disabled: true,
                    trackOver: false
                },
                hideable: false,
                menuDisabled: true
            }, {
                text: 'Visible',
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
                dataIndex: 'show',
                hideable: false,
                menuDisabled: true,
                editor: {
                    xtype: 'combobox',
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    store: {
                        data: [{
                            text: 'Yes',
                            value: true
                        }, {
                            text: 'No',
                            value: false
                        }]
                    }
                }
            }, {
                xtype: 'actioncolumn',
                width: 64,
                hideable: false,
                menuDisabled: true,
                items: [{
                    iconCls: 'fa fa-cog',
                    tooltip: 'Edit',
                    width: 32
                }, {
                    iconCls: 'fa fa-trash',
                    tooltip: 'Delete',
                    width: 32,
                    handler: 'onRemoveSkill'
                }]
            }]
        }, {
            xtype: 'dash-skill-form',
            flex: 1,
        }]
    }, {
        xtype: 'panel',
        itemId: 'projectConfig',
        layout: {
            type: 'hbox'
        },
        cls: 'dash-config-project-config',
        height: 441,
        items: [{
            xtype: 'panel',
            cls: 'dash-config-project-config-panel',
            title: 'Own Projects',
            margin: '0 10 0 0',
            flex: 1.5,
            height: 441,
            items: [{
                xtype: 'dataview',
                bind: {
                    store: '{projects}'
                },
                itemSelector: 'div.dash-project-details-list',
                itemTpl: new Ext.XTemplate([
                    '<tpl for=".">',
                    '   <div class="dash-project-details-list">',
                    '       <div class="dash-project-details-list-inner">',
                    '           <h3>{[this.getIndex(values, xindex)]}. {projectName} ({role})</h3>',
                    '           <button name="deleteButton" projectIndex="{id}" class="fa fa-trash dash-project-details-list-button"></button>',
                    '       </div>',
                    '       <h5> {[this.getSkilNameFromSkillId(values)]}</h5>',
                    '       <p style="font-weight: bolder;">{tagLine}</p>',
                    '       <span>{description}</span>',
                    '   </div>',
                    '</tpl>',
                ].join(""), {
                    getIndex: function (values, xindex, b, id) {
                        return xindex
                    },
                    getSkilNameFromSkillId: function (values) {
                        const skillsStore = this.owner.up('dash-config').getController().getViewModel().getStore('skills');
                        var skills = [];

                        Ext.each(values.skills, function (skill) {
                            var record = skillsStore.getById(skill);
                            record && skills.push(record.get('name'))
                        }, this);
                        skills = skills.join(",");

                        return `Skills Used: ${skills || "None"}`;
                    }
                }),

                listeners: {
                    itemclick: 'onProjectItemClick'
                }
            }]
        }, {
            xtype: 'dash-project-form',
            title: 'New Project',
            flex: 1
        }]
    }, {
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'gridpanel',
            header: {
                title: 'Experiences',
                tools: [{
                    type: 'plus',
                    handler: 'openNewExperienceWindow'
                }]
            },
            flex: 1.5,
            margin: '0 10 0 0',
            bind: {
                store: '{experiences}'
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
            }, {
                text: 'Projects',
                dataIndex: 'projects',
                hideable: false,
                menuDisabled: true,
                flex: 3,
                renderer(value) {
                    return value.map(value => value.projectName).join(", ")
                }
            }, {
                text: 'Visible',
                dataIndex: 'show',
                hideable: false,
                menuDisabled: true,
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
            }, {
                xtype: 'actioncolumn',
                width: 64,
                items: [{
                    iconCls: 'fa fa-cog',
                    tooltip: 'Edit',
                    width: 32
                }, {
                    iconCls: 'fa fa-trash',
                    tooltip: 'Delete',
                    width: 32
                }]
            }]
            // }, {
            //     xtype: 'dash-config-experienceform',
            //     flex: 1,
            //     title: 'New Experience'
        }]
    }]
});