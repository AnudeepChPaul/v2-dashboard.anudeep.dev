/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Dashboard.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        controller: {
            '*': {
                updatestatus: 'onUpdateStatus'
            }
        }
    },

    markAllNotificationsRead: function (choice) {
        let data = this.getViewModel().getStore('notifications').getData();

        data.items.filter(item => !item.get('read')).forEach(rec => rec.set('read', 1));

        this.clearNotificationSelection();
    },

    markSelectedRead: function (row, rowId, colId, target, event, data) {
        data.set('read', 1);
    },

    makrSelectedUnread: function () {
        const selectedNotifications = this.getViewModel().get('selectedNotifications');

        if (!selectedNotifications) {
            return;
        }

        if (selectedNotifications instanceof Array) {
            selectedNotifications.forEach(rec => {
                rec.set('read', 0);
            });
        } else {
            selectedNotifications.set('read', 0);
        }

        this.clearNotificationSelection();
    },

    clearNotificationSelection: function () {
        this.getView().down('dash-notifications').setSelection(null);
        this.getViewModel().set('selectedNotifications', null);
    },

    onGotoInbox: function () {
        this.getViewModel().set('selectedMenu', 'mails');
    },

    onGotoNotifications: function () {
        this.getViewModel().set('selectedMenu', 'notifications');
    },

    onUpdateStatus: function (evtData) {
        const appView = this.view.down('dash-appview');
        appView.setStatus(evtData.text);
    },

    init: function () {
        console.log("init maincontrol")
    }
});