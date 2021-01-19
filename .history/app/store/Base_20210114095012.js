Ext.define('DashStore', {
    override: 'Ext.data.Store',

    listeners: {
        load: function (store, records) {
            debugger
            if (!records.length) {
                return
            }

            Ext.each(records, function (rec, index) {
                rec.set('index', index + 1)
            }, this)
        }
    },

    onCreateRecords: function (records, operation, success) {
        console.log(records);
    },

    onUpdateRecords: function (records, operation, success) {
        console.log(records);
    },

    onDestroyRecords: function (records, operation, success) {
        console.log(records);
    },
});