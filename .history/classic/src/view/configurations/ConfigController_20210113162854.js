/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Dashboard.view.configurations.ConfigController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.dash-config-controller',

    addSkill: function () {
        const skillConfig = this.view.down('[itemId=skillConfig]');

        const form = skillConfig.down('form').getForm();
        const rating = skillConfig.down('[name=rating]');

        this.getViewModel().getStore('skills').add({
            ...form.getValues(),
            rating: rating.getValue()
        });
        debugger
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
        this.fireEvent('updatestatus', {
            text: 'Saving...'
        })
    },

    init: function () {
        console.log("init configcontrol")
    }
});