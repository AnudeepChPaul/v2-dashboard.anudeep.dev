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
                scope.on('render', function () {
                    debugger
                    scope.dropZone = new Ext.dd.DragZone(scope.getEl(), {

                        getDragData: function (e) {

                            //          Use the DataView's own itemSelector (a mandatory property) to
                            //          test if the mousedown is within one of the DataView's nodes.
                            var sourceEl = e.getTarget(v.itemSelector, 10);

                            //          If the mousedown is within a DataView node, clone the node to produce
                            //          a ddel element for use by the drag proxy. Also add application data
                            //          to the returned data object.
                            if (sourceEl) {
                                d = sourceEl.cloneNode(true);
                                d.id = Ext.id();
                                return {
                                    ddel: d,
                                    sourceEl: sourceEl,
                                    repairXY: Ext.fly(sourceEl).getXY(),
                                    sourceStore: v.store,
                                    draggedRecord: v.getRecord(sourceEl)
                                }
                            }
                        },

                        //      Provide coordinates for the proxy to slide back to on failed drag.
                        //      This is the original XY coordinates of the draggable element captured
                        //      in the getDragData method.
                        getRepairXY: function () {
                            return this.dragData.repairXY;
                        }
                    });
                });
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