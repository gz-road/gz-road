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
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: ['56%', '74%'],
    hoverAnimation: false,
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
}];
option = {
    color: ['rgba(5, 150, 255, 0.7)','rgba(23, 214, 255, 0.7)','rgba(235, 190, 84, 0.7)','rgba(235, 190, 84, 0)'],
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}

myChartTrafficPie.setOption(option);
window.onresize = myChartTrafficPie.resize;