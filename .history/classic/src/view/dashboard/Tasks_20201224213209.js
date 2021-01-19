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
        xtype: 'gridpanel',
        split: true,
        title: 'To Do',
        height: '33%',
        width: '33%',
        store: {
            data: [{
                title: 'Some task title',
                type: 'story',
                description: 'task description',
                currentState: 0
            }, {
                title: 'Some task title 2',
                type: 'story',
                description: 'task description 2',
                currentState: 1 // progress
            }, {
                title: 'Some task title 3',
                type: 'story',
                description: 'task description 3',
                currentState: 2 // done
            }]
        },

        columns: [{
            dataIndex: 'title',
            flex: 1,
            renderer: function (value, metaData, record) {
                debugger
                return value;
            }
        }],
        listeners: {
            beforerender: function (scope) {
                scope.on('render', function () {
                    debugger
                    scope.dropZone = new Ext.dd.DragZone(scope.getEl(), {
                        getDragData: function (e) {
                            var sourceEl = e.getTarget(scope.itemSelector, 10);
                            if (sourceEl) {
                                d = sourceEl.cloneNode(true);
                                d.id = Ext.id();
                                return {
                                    ddel: d,
                                    sourceEl: sourceEl,
                                    repairXY: Ext.fly(sourceEl).getXY(),
                                    sourceStore: scope.store,
                                    draggedRecord: scope.getRecord(sourceEl)
                                }
                            }
                        },

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