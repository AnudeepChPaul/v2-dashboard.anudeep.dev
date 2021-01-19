Ext.define('DashStore', {
    override: 'Ext.data.Store',

    listeners: {
        beforeload: function (store, records) {
            debugger
            if (!records.length) {
                return
            }

            Ext.each(records, function (rec, index) {
                rec.set('index', index + 1)
            }, this)
        }
    }
});