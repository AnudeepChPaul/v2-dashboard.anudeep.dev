Ext.define("Dashboard.view.card.Renderer", {
    extend: "Ext.panel.Panel",
    xtype: "dash-card-renderer",

    layout: {
        type: "card",
        deferredRender: true,
    },
    padding: 0,
    margin: "0 0 1 0",
    height: "auto",

    bind: {
        activeItem: "{selectedMenu}",
    },

    items: [{
            itemId: "dashboard",
            xtype: "dash-board",
        },
        {
            itemId: "configurations",
            xtype: "dash-config",
        },
        {
            itemId: "tasks",
            xtype: "dash-tasks",
        },
        {
            itemId: "mails",
            xtype: "dash-email",
        },
        {
            itemId: "notifications",
            xtype: "dash-notifications",
        },
    ],
});