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
            title: 'New Experience',
            closeAction: 'method-destroy',
            floating: true,
            height: 320,
            width: 600,
            modal: true,
            items: [{
                xtype: 'dash-config-experienceform'
            }]
        })
        // .show();
        this.view.add(configWindow).showAt();
    },

    openNewProjectWindow: function () {
        const projectWindow = Ext.create({
            xtype: 'window',
            modal: true,
            closeAction: 'method-destroy',
            title: 'New Project',
            floating: true,
            height: 425,
            width: 600,
            items: [{
                xtype: 'dash-project-form'
            }]
        });

        this.view.add(projectWindow).showAt();
    },

    removeSkill: function (gridView, rIndex) {
        this.getViewModel().getStore('skills').removeAt(0);
    }
});