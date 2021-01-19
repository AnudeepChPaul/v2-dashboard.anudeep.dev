Ext.define("Dashboard.view.dashboard.InfoSlide", {
    extend: "Ext.container.Container",
    xtype: "dash-infoslide",

    // layout: {
    //     type: "border",
    // },

    weight: '100%',
    height: '100%',
    defaults: {
        style: {},
    },
    items: [{
        xtype: 'carousel',
        defaults: {
            styleHtmlContent: true
        },

        items: [{
                html: 'Item 1',
                style: 'background-color: #5E99CC'
            },
            {
                html: 'Item 2',
                style: 'background-color: #759E60'
            },
            {
                html: 'Item 3'
            }
        ]
    }],
});