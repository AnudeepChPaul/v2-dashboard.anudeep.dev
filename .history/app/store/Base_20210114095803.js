Ext.define('Dashboard.store.Base', {
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
            console.log('add: ', records);
        },

        update: function (store, records) {
            console.log('update: ', records);
        },

        remove: function (store, records) {
            console.log('remove: ', records);
        }
    },

    // constructor: function (config) {
    //     debugger
    //     this.initConfig(config);
    // }
});