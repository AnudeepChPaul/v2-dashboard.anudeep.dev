Ext.define('DashStore', {
    override: 'Ext.data.Store',

    listeners: {
        load: function (store, records) {
            if (!records.length) {
                return
            }

            Ext.each(records, function (rec, index) {
                rec.set('index', index + 1)
            }, this)
        },

        add: function (store, records) {
            console.log(records);
        },

        update: function (store, records) {
            console.log(records);
        },

        remove: function (store, records) {
            console.log(records);
        }
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});