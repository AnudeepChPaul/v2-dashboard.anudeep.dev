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
        listeners: {
            beforerender: function (scope) {
                scope.on('render', function () {
                    debugger
                    scope.dropZone = new Ext.dd.DropZone(scope.el, {

                        // If the mouse is over a grid row, return that node. This is
                        // provided as the "target" parameter in all "onNodeXXXX"
                        // node event handling functions
                        getTargetFromEvent: function (e) {
                            return e.getTarget(scope.getView().rowSelector);
                        },

                        // On entry into a target node, highlight that node.
                        onNodeEnter: function (target, dd, e, data) {
                            Ext.fly(target).addCls('my-row-highlight-class');
                        },

                        // On exit from a target node, unhighlight that node.
                        onNodeOut: function (target, dd, e, data) {
                            Ext.fly(target).removeCls('my-row-highlight-class');
                        },

                        // While over a target node, return the default drop allowed class which
                        // places a "tick" icon into the drag proxy.
                        onNodeOver: function (target, dd, e, data) {
                            return Ext.dd.DropZone.prototype.dropAllowed;
                        },

                        // On node drop we can interrogate the target to find the underlying
                        // application object that is the real target of the dragged data.
                        // In this case, it is a Record in the GridPanel's Store.
                        // We can use the data set up by the DragZone's getDragData method to read
                        // any data we decided to attach in the DragZone's getDragData method.
                        onNodeDrop: function (target, dd, e, data) {
                            var rowIndex = scope.getView().findRowIndex(target);
                            var r = scope.getStore().getAt(rowIndex);
                            Ext.Msg.alert('Drop gesture', 'Dropped Record id ' + data.draggedRecord.id +
                                ' on Record id ' + r.id);
                            return true;
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