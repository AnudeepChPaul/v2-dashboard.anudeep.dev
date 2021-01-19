Ext.define("Dashboard.view.tasks.TaskPanel", {
  extend: "Ext.grid.Panel",
  xtype: "dash-taskpanel",

  weight: '100%',
  height: '100%',

  split: true,
  title: 'To Do',
  height: '33%',
  width: '33%',
  store: {
    autoLoad: true,
    autoRefresh: true,
    idProperty: 'id',
    data: []
  },

  columns: [{
    dataIndex: 'title',
    flex: 1,
    renderer: function (value, metaData, record, recordIndex) {
      metaData.tdAttr = `record-id=${recordIndex}`
      return value;
    }
  }],

  getDragRecordId: function (e) {
    var sourceEl = e.getTarget(this.itemSelector, 10);
    return Number(sourceEl.getAttribute('record-id') || sourceEl.parentElement.getAttribute('record-id'))
  },

  listeners: {
    beforerender: function (scope) {
      scope.store.loadData([{
        title: 'Some task title' + parseInt(Math.random() * 100000),
        type: 'story',
        description: 'task description',
        currentState: 0, // todo,
        id: parseInt(Math.random() * 100000)
      }, {
        title: 'Some task title 2' + parseInt(Math.random() * 100000),
        type: 'story',
        description: 'task description 2',
        currentState: 1, // progress,
        id: parseInt(Math.random() * 100000)
      }, {
        title: 'Some task title 3' + parseInt(Math.random() * 100000),
        type: 'story',
        description: 'task description 3',
        currentState: 2, // done,
        id: parseInt(Math.random() * 100000)
      }])
    },
    render: function (scope) {
      scope.dragZone = new Ext.dd.DragZone(scope.getEl(), {
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
              draggedRecord: scope.store.getAt(scope.getDragRecordId(e))
            }
          }
        },
        getRepairXY: function () {
          return this.dragData.repairXY;
        }
      });

      scope.dropZone = new Ext.dd.DropZone(scope.el, {
        getTargetFromEvent: function (e) {
          return e.getTarget((e.target.getAttribute('record-id') ? e.target : e.target.parentElement).id)
        },
        onNodeEnter: function (target, dd, e, data) {
          Ext.fly(target).addCls('my-row-highlight-class');
        },
        onNodeOut: function (target, dd, e, data) {
          Ext.fly(target).removeCls('my-row-highlight-class');
        },
        onNodeOver: function (target, dd, e, data) {
          return Ext.dd.DropZone.prototype.dropAllowed;
        },
        onNodeDrop: function (target, dd, e, data) {
          if (!data.draggedRecord) {
            return;
          }
          var recordId = scope.getDragRecordId(e);
          data.draggedRecord.store.remove(data.draggedRecord);
          data.draggedRecord.store = null;
          scope.store.insert(recordId + 1, data.draggedRecord.getData());
          return true;
        }
      });
    }
  }
});