Ext.define('Dashboard.view.configurations.ExperienceForm', {
    extend: 'Ext.form.Panel',
    xtype: 'dash-config-experienceform',

    defaultType: 'textfield',
    flex: 1,
    width: 600,
    buttonAlign: 'center',
    bodyPadding: '10 10 0',

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    height: 300,

    defaults: {
        width: '100%',
        labelWidth: 144
    },
    items: [{
        fieldLabel: 'Company Name',
        name: 'companyName',
        allowBlank: false,
        bind: '{experiencesList.selection.companyName}'
    }, {
        fieldLabel: 'Work Duration',
        name: 'duration',
        allowBlank: false,
        bind: '{experiencesList.selection.duration}'
    }, {
        fieldLabel: 'Designation',
        name: 'designation',
        allowBlank: false,
        bind: '{experiencesList.selection.designation}'
    }, {
        fieldLabel: 'Visible',
        name: 'visible',
        allowBlank: false,
        bind: '{experiencesList.selection.visible}',
        xtype: 'checkbox',
        checked: true
    }, {
        xtype: 'container',
        layout: {
            type: 'hbox'
        },
        items: [{
            fieldLabel: 'Projects Done',
            name: 'projects',
            xtype: 'tagfield',
            flex: 1,
            labelWidth: 144,
            bind: {
                store: '{projects}',
                value: '{experiencesList.selection.projects}',
            },
            allowBlank: false,
            displayField: 'projectName',
            valueField: 'id',
            queryMode: 'local',
            filterPickList: false,
            grow: true,
            growMax: 2
        }, {
            xtype: 'button',
            iconCls: 'fa fa-plus',
            handler: 'openNewProjectWindow'
        }]
    }],
    fbar: {
        paddingBottom: 40,
        items: [{
            type: 'submit',
            text: 'Create',
            formBind: true,
            handler: function () {
                this.up('dash-config-addexperience').submitExperience();
            }
        }]
    },

    addProject: function () {
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

        const formData = this.getValues(),
            vm = this.getViewModel(),
            finalData = {
                companyName: formData.companyName,
                designation: formData.designation,
                duration: formData.duration,
                visible: formData.visible,
                projects: []
            };

        Ext.each(vm.getStore('projects').getData().items, function (project) {
            finalData.projects.push(project.getData());
        }, this);

        console.log(finalData)
    }
})