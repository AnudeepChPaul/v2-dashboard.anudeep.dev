Ext.define('Global.window.Toast', {
    override: 'Ext.window.Toast',

    align: 'tr',
    useXAxis: true,
    componentCls: 'global-toast-window',
    autoClose: true,
    autoCloseDelay: 5000,
    padding: 5
});