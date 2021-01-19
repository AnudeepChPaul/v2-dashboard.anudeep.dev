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
    }, {
        xtype: 'fieldset',
        defaultType: 'textfield',
        defaults: {
            width: '100%',
            labelWidth: 129
        },
        items: [{
            fieldLabel: 'Project Name',
            // name: 'projectName',
            bind: {
                value: '{projectName}'
            }
        }, {
            fieldLabel: 'Tag Line',
            // name: 'tagLine',
            bind: {
                value: '{tagLine}'
            }
        }, {
            xtype: 'textarea',
            fieldLabel: 'Description',
            // name: 'description',
            bind: {
                value: '{description}'
            }
        }, {
            fieldLabel: 'My Role',
            // name: 'role',
            bind: {
                value: '{role}'
            }
        }, {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [{
                xtype: 'button',
                type: 'button',
                text: 'Add this Project to Experience',
                handler: function () {
                    this.up('dash-config-addexperience').addProject()
                }
            }]
        }, {
            xtype: 'dataview',
            bind: {
                store: '{projects}'
            },
            itemSelector: 'div.project-details',
            itemTpl: new Ext.XTemplate([
                '<tpl for=".">',
                '<div class="project-details">',
                '<h3>{#}. {projectName}</h3>',
                '<p>{tagLine}</p>',
                '</div>',
                '</tpl>'
            ].join(""))
        }],
    }],
    fbar: [{
        type: 'submit',
        text: 'Save',
        formBind: true,
        handler: function () {
            this.up('dash-config-addexperience').submitExperience();
        }
    }],

    addProject: function () {
        // up('dash-config-addexperience').
        const projects = this.getViewModel().getStore('projects');
        const vm = this.getViewModel();

        projects.add({
            projectName: vm.get('projectName'),
            tagLine: vm.get('tagLine'),
            description: vm.get('description'),
            role: vm.get('role')
        })

        this.up('window').center();

        vm.set('projectName', '');
        vm.set('tagLine', '');
        vm.set('description', '');
        vm.set('role', '');
    },

    submitExperience() {
        if (!this.form.isValid()) {
            return
        }

        const formData = this.getValues();
        const vm = this.getViewModel();
        const finalData = {
            companyName: formData.companyName,
            designation: formData.designation,
            duration: formData.duration,
            show: formData.show,
            projects: []
        };

        Ext.each(vm.getStore('projects').getData().items, function (project) {
            finalData.projects.push(project.getData());
        }, this);



        console.log(finalData)
    }
})