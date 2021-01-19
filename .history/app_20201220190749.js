/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.baseCSSPrefix = Ext.buildSettings.baseCSSPrefix = 'dash-';
Ext.application({
    extend: 'Dashboard.Application',

    name: 'Dashboard',

    requires: [
        'Dashboard.*'
    ],

    // The name of the initial view to create.

    mainView: 'Dashboard.view.main.MainView',
    baseCSSPrefix: 'dash-'
});