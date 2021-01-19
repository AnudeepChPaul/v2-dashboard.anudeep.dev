/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Dashboard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Dashboard',
        selectedMenu: 'configurations',
        selectedApp: 'resume',
        selectedNotifications: null,

        projectName: '',
        tagLine: '',
        description: '',
        role: ''
    },

    stores: {
        notifications: {
            model: 'Dashboard.model.Notification',
            autoLoad: true,
            autoSync: true
        },

        projects: {
            model: 'Dashboard.model.Project',
            autoLoad: true,
            autoSync: true,
        },

        skills: {
            model: 'Dashboard.model.Skill',
            autoLoad: true,
            autoSync: true
        },

        experiences: {
            autoLoad: true,
            autoSync: true,
            data: []
        }
    }
});