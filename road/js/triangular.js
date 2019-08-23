 var trangular = echarts.init(document.getElementById('trangular'));
 var a = 18;//X fontSize
    var b = 15;//轴数据 fontSize
    var xAxisTextColor = '#FFFFFF';//'#4e7199';//字体颜色
    var legendColor = '#FFFFFF';//legend颜色

    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: function (itme) {
                return itme[0].name + "：" + itme[0].value;
            }
        },
        grid: {
            //top:'30%', 
            //left: '20%',
        },
        yAxis: [{
            name: '万元',
             min: 0,
            max: 100,
            nameTextStyle: {
                color: '#00aaff',
                fontSize: 12,
                left:0
            },
            type: 'value',
            axisLabel: {
                interval: 0,
                color: '#d3e0fa',
                textStyle: {
                    color: '#00aaff',
                    fontSize: 12,
                }
            },
            splitLine: {
                show: true,
                 lineStyle: {
                color: '#01295b',
            }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        xAxis: [{
            type: 'category',
            data: ['规划需求', '日常养护', '恢复养护', '预防养护', '专项养护','应急养护'],
            axisLabel: {
                interval: 0,
                color: '#d3e0fa',
                 textStyle: {
                    color: '#00aaff',
                    fontSize: 12,
                }
            },
            axisTick: {
                show: false
            },
           splitLine: {
                show: true,
                 lineStyle: {
                color: '#01295b',
            }
         },
            axisLine: {
                show: false
            },
            splitArea: {
                show: false,
            }
        }],
        series: [
            {
                name: '资金投资情况',
                type: 'pictorialBar',
                symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
                data: [60, 50, 90, 70, 40,50],
//              barWidth: 30,
                symbolSize: ['60%','85%'],
//                 barGap: 1, //柱子之间间距
                symbolOffset: [0, -15],
                z: 99,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#1ba0e8'
                        }, {
                            offset: 0.5,
                            color: '#1ba0e8'
                        }, {
                            offset: 0.5,
                            color: '#0e6395'
                        }, 
                         
                        {
                            offset: 1,
                            color: '#0e6395'
                        }]),
                        opacity: 1,
                    },
                     emphasis: {
                         color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#e6585c'
                        }, {
                            offset: 0.5,
                            color: '#e6585c'
                        }, {
                            offset: 0.5,
                            color: '#bd4c53'
                        }, 
                         
                        {
                            offset: 1,
                            color: '#bd4c53'
                        }]),
                        opacity: 1,
                    },
                    
                }
            },
           
            {
                // name: '年报上报率2',
                type: 'pictorialBar',
                symbol: 'image://img/img_circle.png',
//            	barWidth: 30,
                symbolSize: ['80%', 18],
                z: 99,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                             offset: 0,
                            color: '#1ba0e8'
                        }, {
                            offset: 0.5,
                            color: '#1ba0e8'
                        }, {
                            offset: 0.5,
                            color: '#0e6598'
                        }, 
                         
                        {
                            offset: 1,
                            color: '#0e6598'
                        }]),
                        opacity: 1,
                    },
                     emphasis: {
                         color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#e6585c'
                        }, {
                            offset: 0.5,
                            color: '#e6585c'
                        }, {
                            offset: 0.5,
                            color: '#bd4c53'
                        }, 
                         
                        {
                            offset: 1,
                            color: '#bd4c53'
                        }]),
                        opacity: 1,
                    },
                },
                data: [1, 1, 1, 1, 1,1],
            },
        
        ]
    };
  trangular.setOption(option);
  window.onresize = trangular.resize; 