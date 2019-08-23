var myChartTrafficPie = echarts.init(document.getElementById('typepie'));

var scaleData = [{
    'name': '路面类型',
    'value': 10
},
    {
        'name': '技术等级',
        'value': 10
    },
    {
        'name': '行政等级',
        'value': 10
    },
    {
        'name': '',
        'value': 10
    },

];
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
var color=['#0596ff','#17d6ff','#ebbe54','rgba(5, 150, 255, 0)'];
var shadowColor=['#0596ff','#17d6ff','#ebbe54','rgba(5, 150, 255, 0)'];
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor:color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var plantCap = [{
    name: '路面',
    value: '150',

}, {
    name: '隧道',
    value: '115',

},{
    name: '桥梁',
    value: '50',

},]

var datalist = [{
    offset: [64, 55],
    symbolSize: 50,
    opacity: .95,
    fontSize: '14'
}, {
    offset: [34, 63],
    symbolSize: 36,
    opacity: .95,
    fontSize: '12'
}, {
    offset: [44, 20],
    symbolSize: 40,
    opacity: .95,
    fontSize: '12'
}]
var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.name,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: itemToStyle.fontSize
                }
            },

        },
        itemStyle: {
            normal: {
                opacity: itemToStyle.opacity
            }
        },
    })
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: ['56%', '74%'],
    hoverAnimation: true,
    itemStyle: {
        normal: {
            label: {
                show: false,
                position: 'inside',
                align: 'center',
                rotate: 'tangential',
                color: '#ddd',
            },
            labelLine: {
                show: false,
            }
        }
    },
    data: data
},
    {
        type: 'scatter',
        symbol: 'circle',
        // symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },

        },

        itemStyle: {
            normal: {
                color: '#00acea'
            },
            emphasis: {
                // symbol: 'image://./img/circle_q_pr.png',
                color: '#eea631',
                opacity: 1
            }
        },
        data: datas
    }];
option = {
    color: ['rgba(5, 150, 255, 0.7)','rgba(23, 214, 255, 0.7)','rgba(235, 190, 84, 0.7)','rgba(235, 190, 84, 0)'],
    // tooltip: {
    //     show: false
    // },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30


    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30,
    }],
    series: seriesObj
}

myChartTrafficPie.setOption(option);
window.onresize = myChartTrafficPie.resize;