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
            autoLoad: true,
            autoSync: true,
            model: 'Dashboard.model.Notification'
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
            data: [{
                companyId: 'inq',
                companyName: 'InQuest Technologies',
                duration: '2.5yrs',
                designation: 'Software Engineer',
                technologies: [],
                projects: [{
                    index: 1,
                    projectName: 'Lorem Ipsum',
                    tagLine: 'Quisque commodo lorem quis nibh venenatis ullamcorper vitae ac orci.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac enim pellentesque ante venenatis luctus et vitae mi.',
                    role: 'Full Stack Developer',
                    totalResources: 4
                }, {
                    index: 2,
                    projectName: 'Morbi fringilla',
                    tagLine: 'Vestibulum nec posuere augue.',
                    description: 'Vestibulum nec posuere augue. Morbi interdum libero non lacus tempor fermentum. Vestibulum vel magna eu quam suscipit tincidunt.',
                    role: 'Lead Full Stack Developer',
                    totalResources: 5
                }]
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
        }
    }
});