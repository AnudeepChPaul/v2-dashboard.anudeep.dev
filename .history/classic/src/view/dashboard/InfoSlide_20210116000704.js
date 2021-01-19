Ext.define("Dashboard.view.dashboard.InfoSlide", {
    extend: "Ext.container.Container",
    xtype: "dash-infoslide",

    layout: {
        type: "hbox",
    },

    weight: '100%',
    height: '100%',

    items: [{
        xtype: 'cartesian',
        margin: '0 0 0 20',
        innerPadding: '20 10 0 10',
        width: 500,
        height: 324,
        store: {
            fields: ['name', 'g1', 'g2'],
            data: []
        },

        interactions: {
            type: 'panzoom'
        },

        legend: {
            docked: 'right'
        },
        colors: ['#02243d', '#e03c31'],

        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true
        }, {
            type: 'category',
            position: 'bottom',
            visibleRange: [0, 0.4]
        }],
        series: [{
            type: 'area',
            xField: 'name',
            yField: ['g1', 'g2'],
            title: ['G1', 'G2'],
            style: {
                stroke: '#666666',
                fillOpacity: 0.8
            }
        }, {
            type: 'line',
            xField: 'name',
            yField: 'g1',
            title: 'Normal',
            style: {
                fill: "#11abd4",
                stroke: "#11abd4",
                fillOpacity: 0.6,
                miterLimit: 3,
                lineCap: 'miter',
                lineWidth: 2
            }
        }, {
            type: 'line',
            xField: 'name',
            yField: 'g2',
            title: 'Smooth',
            style: {
                smooth: true,
                stroke: "#1ca56c",
                fillOpacity: 0.6,
                miterLimit: 3,
                lineCap: 'miter',
                lineWidth: 2
            }
        }]
    }, {
        xtype: 'cartesian',
        width: 500,
        height: 324,
        innerPadding: '0 10 0 10',
        margin: '0 0 0 10',
        colors: ['#02243d', '#e03c31'],

        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['apples', 'oranges'],
            title: {
                text: 'Inventory',
                fontSize: 15
            }
        }, {
            type: 'category',
            position: 'bottom',
            title: {
                text: 'People',
                fontSize: 15
            },
            fields: 'name'
        }],
        series: {
            type: 'bar',
            xField: 'name',
            yField: ['apples', 'oranges']
        }
    }],
});