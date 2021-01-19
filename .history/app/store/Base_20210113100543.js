Ext.define('DashStore', {
    override: 'Ext.data.Store',

    listeners: {
        load: function (store, records) {
            if (!records.length) {
                return
            }

            debugger
        }
    }
});