/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Dashboard.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    markAllNotificationsRead: function (choice) {
        let data = this.getViewModel().getStore('notifications').getData();

        data.items.filter(item => !item.get('read')).forEach(rec => rec.set('read', 1));
        this.getViewModel().set('xxxx', null)

    },

    makrSelectedUnread: function () {
        debugger
        this.getViewModel().get('xxxx').set('read', 0);
        this.getViewModel().set('xxxx', null)
    },

    onGotoInbox: function () {
        this.getViewModel().set('selectedMenu', 'mails');
    },

    onGotoNotifications: function () {
        this.getViewModel().set('selectedMenu', 'notifications');
    }
});