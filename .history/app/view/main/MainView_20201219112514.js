/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("Dashboard.view.main.MainView", {
    extend: "Ext.container.Container",
    xtype: "dash-main",

    requires: [
        "Ext.plugin.Viewport",
        "Ext.window.MessageBox",

        "Dashboard.view.main.MainController",
        "Dashboard.view.main.MainModel",
        "Dashboard.view.main.List",
        "Dashboard.view.header.Header",
        'Dashboard.view.sidemenu.Menu'
    ],

    controller: "main",
    viewModel: "main",

    layout: {
        type: "border",
    },

    //   tabBarHeaderPosition: 1,
    //   titleRotation: 0,
    //   tabRotation: 0,

    // header: {
    //     layout: {
    //         align: 'stretchmax'
    //     },
    //     title: {
    //         bind: {
    //             text: '{name}'
    //         },
    //         flex: 0
    //     },
    //     iconCls: 'fa-th-list'
    // },

    // tabBar: {
    //     flex: 1,
    //     layout: {
    //         align: 'stretch',
    //         overflowHandler: 'none'
    //     }
    // },

    // responsiveConfig: {
    //     tall: {
    //         headerPosition: 'top'
    //     },
    //     wide: {
    //         headerPosition: 'left'
    //     }
    // },

    // defaults: {
    //     bodyPadding: 20,
    //     tabConfig: {
    //         responsiveConfig: {
    //             wide: {
    //                 iconAlign: 'left',
    //                 textAlign: 'left'
    //             },
    //             tall: {
    //                 iconAlign: 'top',
    //                 textAlign: 'center',
    //                 width: 120
    //             }
    //         }
    //     }
    // },

    weight: '100%',
    height: '100%',
    defaults: {
        style: {},
    },
    items: [{
        region: "center",
        title: 'Viewing Area',
        bind: {
            html: "{selectedMenu}",
        }
    }, {
        region: "west",
        xtype: "dash-sidemenu",
        width: 225
    }, {
        region: "north",
        xtype: "dash-header"
    }],
});