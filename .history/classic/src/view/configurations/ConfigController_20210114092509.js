/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Dashboard.view.configurations.ConfigController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.dash-config-controller',

    init: function () {
        console.log("init configcontrol")
    },

    addSkill: function () {
        const skillConfig = this.view.down('[itemId=skillConfig]');

        const form = skillConfig.down('form').getForm();
        const rating = skillConfig.down('[name=rating]');
        debugger
        this.getViewModel().getStore('skills').add({
            ...form.getValues(),
            rating: rating.getValue()
        });

        rating.setValue(null);
        form.reset();
    },

    addProject: function () {
        const projectConfig = this.view.down('[itemId=projectConfig]'),
            form = projectConfig.down('form').getForm();

        this.getViewModel().getStore('projects').add({
            ...form.getValues()
        });

        form.reset();
    },

    saveIntroduction: function () {
        const introductionConfig = this.view.down('[itemId=introductionConfig]');
        Ext.GlobalEvents.fireEvent('updatestatus', {
            text: 'Saving...'
        });

        introductionConfig.getForm().submit();
    },

    openNewExperienceWindow: function () {
        const configWindow = Ext.create({
            xtype: 'window',
            title: 'Add Experience',
            closeAction: 'method-destroy',
            modal: true,
            items: [{
                xtype: 'dash-config-experienceform'
            }]
        });
        configWindow.show();
    },

    openNewProjectWindow: function () {
        this.newProject = Ext.create({
            xtype: 'dash-project-form',
            modal: true
        })
    }
});