Ext.define("Dashboard.view.dashboard.Tasks", {
    extend: "Ext.container.Container",
    xtype: "dash-tasks",

    requires: [
        "Ext.plugin.Viewport",
        "Ext.window.MessageBox"
    ],

    layout: {
        type: "border",
    },

    weight: '100%',
    height: '100%',
    defaults: {
        style: {},
    },
    items: [{
        region: "west",
        xtype: 'panel',
        split: true,
        title: 'To Do',
        height: '33%',
        width: '33%',
        items: [{
            xtype: 'button',
            text: 'a'
        }],
        listeners: {
            beforerender: function (scope) {
                // scope.on('render', function () {
                //     debugger
                //     scope.dropZone = new Ext.dd.DragZone(scope.getEl(), {
                //         getDragData: function (e) {
                //             var sourceEl = e.getTarget(scope.itemSelector, 10);
                //             if (sourceEl) {
                //                 d = sourceEl.cloneNode(true);
                //                 d.id = Ext.id();
                //                 return {
                //                     ddel: d,
                //                     sourceEl: sourceEl,
                //                     repairXY: Ext.fly(sourceEl).getXY(),
                //                     sourceStore: scope.store,
                //                     draggedRecord: scope.getRecord(sourceEl)
                //                 }
                //             }
                //         },

                //         getRepairXY: function () {
                //             return this.dragData.repairXY;
                //         }
                //     });
                // });
            }
        }
    }, {
        region: "center",
        xtype: 'panel',
        split: true,
        title: 'In Progress',
        width: '33%'
    }, {
        region: "east",
        xtype: 'panel',
        split: true,
        title: 'Done',
        width: '33%'
    }],
});