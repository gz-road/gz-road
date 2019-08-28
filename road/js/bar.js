var bar = echarts.init(document.getElementById('bar'));
option = {
    tooltip: {},
    xAxis: {
       data: ["工费", "材料费", "机使费","其他"],
           top:'15%',
        axisTick: {
            show: false,
              lineStyle: {
                color: '#01295b',
            }
        },
        axisLine: {
            show: false,
              lineStyle: {
                color: '#01295b',
            }
        },
        axisLabel: {
            show: true,
           textStyle: {
                    color: '#00aaff',
                    fontSize: 12,
                }
        },
         offset:24,
    },
   yAxis: {
            nameTextStyle: {
                 color: '#00aaff',
                fontSize: 12,
            },
            type: 'value',
            axisLabel: {
                show: false,
                interval: 0,
                color: '#d3e0fa',
                textStyle: {
                    color: '#00aaff',
                    fontSize: 12,
                }
            },
            splitLine: {
                show: false,
                
            },
            axisLine: {
                show: false,
                 lineStyle: {
                color: '#01295b',
            }
            },
            axisTick: {
                show: false
            }
    },
    series: [{
        // name: '年报上报率3',
        type: 'pictorialBar',
        symbolSize: [30, 9],
        symbolOffset: [0, -6],
        z: 12,
        itemStyle: {
            normal: {
                color: '#14b1eb'
            }
        },
        data: [{
            value: 80,
            symbolPosition: 'end'
        }, {
            value: 50,
            symbolPosition: 'end'
        }, {
            value: 20,
            symbolPosition: 'end'
        }, {
            value: 60,
            symbolPosition: 'end'
        }]
    }, {
        // name: '年报上报率2',
        type: 'pictorialBar',
        symbolSize: [30, 9],
        symbolOffset: [0, 6],
        z: 12,
        itemStyle: {
            normal: {
                color: '#14b1eb'
            }
        },
        data: [80, 50, 20,60]
    }, {
        // name: '年报上报率1',
        type: 'pictorialBar',
        symbolSize: [44, 18],
        symbolOffset: [0, 11],
        z: 11,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderType: 'line',
                borderWidth:1
            }
        },
        data: [80, 50, 20,60]
    }, {
        // name: '年报上报率',
        type: 'pictorialBar',
        symbolSize: [64,28],
        symbolOffset: [0, 16],
        z: 10,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderType: 'line',
                borderWidth: 1
            }
        },
        data: [80, 50, 20,60]
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#14b1eb',
                opacity: .7
            },
             emphasis: {
                 color: '#f5c552',
                opacity: .7
            }
        },
        barWidth: 30,
        barGap: '-100%', // Make series be overlap
        data: [80, 50, 20,60],
    }]
};
 bar.setOption(option);
  window.onresize = bar.resize; 