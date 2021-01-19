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
        selectedNotifications: null
    },

    stores: {
        notifications: {
            autoLoad: true,
            autoSync: true,
            model: 'Dashboard.model.Notifications'
        },

        projects: {
            autoLoad: true,
            autoSync: true,
            model: 'Dashboard.model.Project',
            data: [{
                projectName: 'Lorem Ipsum',
                tagLine: 'Quisque commodo lorem quis nibh venenatis ullamcorper vitae ac orci.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac enim pellentesque ante venenatis luctus et vitae mi.',
                role: 'Full Stack Developer',
                totalResources: 4
            }, {
                projectName: 'Morbi fringilla',
                tagLine: 'Vestibulum nec posuere augue.',
                description: 'Vestibulum nec posuere augue. Morbi interdum libero non lacus tempor fermentum. Vestibulum vel magna eu quam suscipit tincidunt.',
                role: 'Lead Developer (Full Stack)',
                totalResources: 5
            }]
        }
    }
});