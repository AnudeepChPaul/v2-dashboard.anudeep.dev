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

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onGotoInbox: function () {
        this.getViewModel().set('selectedMenu', 'mails');
    },

    onGotoNotifications: function () {
        debugger
        this.getViewModel().set('selectedMenu', 'notifications');
    }
});