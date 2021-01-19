Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.panel.Panel",
    xtype: "dash-config",
    requires: [
        'Ext.ux.rating.Picker'
    ],

    title: 'Configurations',
    referenceHolder: true,

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
        bodyPadding: '10 0'
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
                name: 'pageTitle',
            }, {
                fieldLabel: "Intro Text",
                name: 'introText',
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
            reference: 'skillsList',
            publishes: ['selection'],
            margin: '0 10 0 0',
            flex: 1,
            bind: {
                store: '{skills}'
            },
            scrollable: {
                scrollbars: false
            },
            selModel: {
                type: 'rowmodel',
                mode: 'SINGLE',
                allowDeselect: true
            },
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
                minWidth: 100,
                flex: 0.75,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                text: 'Rating',
                dataIndex: 'rating',
                minWidth: 196,
                flex: 1,
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
                text: 'URL',
                dataIndex: 'url',
                xtype: 'templatecolumn',
                minWidth: 144,
                flex: 1.5,
                hideable: false,
                menuDisabled: true,
                tpl: '<a href={url}>{url}</a>'
            }, {
                text: 'Visible',
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
                dataIndex: 'visible',
                hideable: false,
                menuDisabled: true,
                minWidth: 64,
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
                width: 32,
                hideable: false,
                menuDisabled: true,
                items: [{
                    iconCls: 'fa fa-trash',
                    tooltip: 'Delete',
                    width: 32,
                    handler: 'onRemoveSkill'
                }]
            }]
        }, {
            xtype: 'dash-skill-form',
            bind: {
                title: '{skillsList.selection ? "Update Skill" :"New Skill"}'
            },
            flex: 1,
        }]
    }, {
        xtype: 'panel',
        itemId: 'projectConfig',
        layout: {
            type: 'hbox'
        },
        minHeight: 480,
        cls: 'dash-config-project-config',
        height: 441,
        items: [{
            xtype: 'panel',
            cls: 'dash-config-project-config-panel',
            title: 'Own Projects',
            margin: '0 10 0 0',
            flex: 1,
            height: 441,
            items: [{
                xtype: 'dataview',
                reference: 'projectsList',
                publishes: ['selection'],
                bind: {
                    store: '{projects}'
                },
                itemSelector: 'div.dash-project-details-list',
                itemTpl: new Ext.XTemplate([
                    '<tpl for=".">',
                    '   <div class="dash-project-details-list">',
                    '       <div class="dash-project-details-list-inner">',
                    '           <h3>{[this.getIndex(values, xindex)]}. {projectName} ({role})</h3>',
                    '           <span style="flex: 1;"></span>',
                    '           <span class="{[this.getVisibleIconCls(values)]}"></span>',
                    '           <button name="deleteButton" projectIndex="{id}" class="fa fa-trash dash-project-details-list-button"></button>',
                    '       </div>',
                    '       <h5> {[this.getSkilNameFromSkillId(values)]}</h5>',
                    '       <p style="font-weight: bolder;">{tagLine}</p>',
                    '       <div>{description}</div>',
                    '   </div>',
                    '</tpl>',
                ].join(""), {
                    getVisibleIconCls: function (values) {
                        return values.visible ? 'fa fa-eye' : 'fa fa-eye-slash';
                    },
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
            bind: {
                title: '{!projectsList.selection ? "New": "Update"} Project',
            },
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
            reference: 'experiencesList',
            publishes: ['selection'],
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
                renderer(value, metaData, record, rowIndex, colIndex, store, view) {
                    const pStore = view.ownerGrid.up('dash-config').getController().getViewModel().getStore('projects');

                    return value.map(pId => {
                        const foundValue = pStore.getById(pId);
                        return foundValue ? foundValue.get('projectName') : ""
                    }).join(", ")
                }
            }, {
                text: 'Visible',
                dataIndex: 'visible',
                hideable: false,
                menuDisabled: true,
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
            }, {
                xtype: 'actioncolumn',
                width: 64,
                items: [{
                    iconCls: 'fa fa-edit',
                    tooltip: 'Edit',
                    width: 32,
                    handler: 'openNewExperienceWindowWithValues'
                }, {
                    iconCls: 'fa fa-trash',
                    tooltip: 'Delete',
                    width: 32
                }]
            }]
        }]
    }]
});