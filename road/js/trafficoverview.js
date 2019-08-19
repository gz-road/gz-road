// JavaScript Document

//交通吸引变化趋势
var myChartBar1 = echarts.init(document.getElementById('bar1'));

// 指定图表的配置项和数据
var option = {
    //color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left:'5%',
        top:'12%',
        right:'13%',
        bottom:'5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
            //position: 'top',
            axisLine: {
                 show: true,
                  lineStyle: {
                     color: '#4c8fe3',
                     width: '1'
                  }
              },
              axisLabel: {
                 show: true,
                 textStyle: {
                     color: '#d9f5ff',
                     fontSize : '12',
                  }
              },
            splitLine:{show: false},
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            splitLine:{
                show: false,
                lineStyle: {
                     color: '#3D456D',
                     width: 1,
                     type: 'dashed'
                }
            },
            axisLine: {
                  show: true,
                  lineStyle: {
                     color: '#4c8fe3',
                     width: '1'
                  }
              },
            axisLabel: {
                 show: true,
                 interval: '0',
                 textStyle: {
                     color: '#d9f5ff',
                     fontSize : '12'
                  }
              },
            data : ['北站','客运东站','中天甜蜜小镇','一中','贵医','机场','省医','市西路','会展中心','大营坡','世纪城','花果园'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    series : [
        {
            name:'交通吸引变化趋势',
            type:'bar',
            barWidth: '10',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#d9f5ff',
                        fontSize : '12'
                    } 
                } 
            },
            data:[50000, 80000,100000,110000, 180000,210000,260000, 270000,290000,300000,400000,480000], 
        },
        
    ],
    itemStyle: {
                normal: {
                 
                    color: new echarts.graphic.LinearGradient(0.3, 0, 1, 0, [{
                        offset: 0,
                        color: '#1e9aff'
                    }, {
                        offset: 1,
                        color: '#00dbff'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                },
                emphasis: {
                 
                    color: new echarts.graphic.LinearGradient(0.3, 0, 1, 0, [{
                        offset: 0,
                        color: '#00f6ff'
                    }, {
                        offset: 1,
                        color: '#a5f2ff'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                },
            }
};
                     

     myChartBar1.setOption(option);
     window.onresize = myChartBar1.resize;  



//主要道路拥堵趋势
var myChartLine1 = echarts.init(document.getElementById('line1'));

// 指定图表的配置项和数据
var option = {
    tooltip : {
        trigger: 'axis',
        formatter: "{a} <br/>{b}时: {c}"
    },
    calculable : false,
    grid: {
        left:'5%',
        top:'16%',
        right:'6%',
        bottom:'12%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLine: {
            show: true,
            onZero: true,
            },
            boundaryGap : false,
            axisLine: {
                  show: true,
                  lineStyle: {
                     color: '#4c8fe3',
                     width: '1'
                  }
              },
            axisLabel: {
                 show: true,
                 interval: '0',
                 textStyle: {
                     color: '#d9f5ff',
                     fontSize : '12'
                  }
              },
            data : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        }
    ],
    yAxis : [
        {
            type : 'value',
            //name : '主要道路拥堵趋势',
            splitLine:{
                show: false,
                lineStyle: {
                     color: '#3D456D',
                     width: 1,
                     type: 'dashed'
                }
            },
            axisLine: {
                  show: true,
                  lineStyle: {
                     color: '#4c8fe3',
                     width: '1'
                  }
              },
            axisLabel: {
                 show: true,
                 interval: '0',
                 textStyle: {
                     color: '#d9f5ff',
                     fontSize : '12'
                  }
              },
        }
    ],
    
    series : [
        {
            name:'主要道路拥堵趋势',
            type:'line',
            smooth:true,
            symbol: 'emptyCircle',
            symbolSize: 5,
            itemStyle: {
                normal: {
                color: '#00c7ea',
                //bordercolor: 'blue',
                //borderwidth: '1px',
                lineStyle: {
                    color: '#00c7ea',
                    //width: '1'
                    }, 
                areaStyle: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0.1, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 216, 255, 0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 216, 255, 0)'
                    }]),
                    }
                },
            },
            
            data:[298, 327, 350, 373, 424, 456, 429, 409,388, 357, 390, 443, 484, 556, 489, 419,398, 337, 298, 323, 354, 366, 349, 312, 286],
        },
        
    ]
};

     myChartLine1.setOption(option);
     window.onresize = myChartLine1.resize;  


// 交通舆情关注趋势
var myChartKeywords = echarts.init(document.getElementById('keywords'));

// 指定图表的配置项和数据
option = {
    tooltip: {
        show: true
    },
    series: [{
        name: '交通舆情关注趋势',
        type: 'wordCloud',
        //size: ['9%', '99%'],
        sizeRange: [6, 60],
        //textRotation: [0, 45, 90, -45],
        rotationRange: [0, 0],
        //shape: 'circle',
        textPadding: 0,
        // autoSize: {
        //     enable: true,
        //     minSize: 6
        // },
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
            name: "Jayfee",
            value: 666
        }, {
            name: "Nancy",
            value: 520
        }]
    }]
};

var JosnList = [];
JosnList.push({
    name: "贵阳",
    value: "999"
}, {
    name: "省医",
    value: "888"
}, {
    name: "贵医",
    value: "777"
}, {
    name: "贵阳美食",
    value: "688"
}, {
    name: "贵阳旅游线路",
    value: "588"
}, {
    name: "机场",
    value: "516"
}, {
    name: "市西路",
    value: "515"
}, {
    name: "旅游",
    value: "483"
}, {
    name: "中天会展成",
    value: "462"
}, {
    name: "花果园",
    value: "449"
}, {
    name: "中天甜蜜小镇",
    value: "429"
}, {
    name: "世纪城",
    value: "407"
}, {
    name: "出行方式",
    value: "406"
}, {
    name: "联通",
    value: "406"
}, {
    name: "客运中心",
    value: "386"
}, {
    name: "北站",
    value: "385"
}, {
    name: "道路拥堵",
    value: "375"
}, {
    name: "欢乐谷",
    value: "355"
}, {
    name: "黔灵山",
    value: "355"
}, {
    name: "一中",
    value: "335"
}, {
    name: "大营坡",
    value: "324"
}, {
    name: "土地资源管理",
    value: "304"
}, {
    name: "物业服务与管理",
    value: "304"
});

option.series[0].data = JosnList;
// 使用刚指定的配置项和数据显示图表。
myChartKeywords.setOption(option);
window.onresize = myChartKeywords.resize; 



// 网约车数量变化趋势
var myChartLine2 = echarts.init(document.getElementById('line2'));

// 指定图表的配置项和数据
var option = {
    tooltip : {
      trigger: 'axis',
      //formatter: "{a} <br/>{b}: {c}"
    },
    grid: {
        left:'5%',
        top:'16%',
        right:'8%',
        bottom:'12%',
        containLabel: true
    },
    legend: {
      left: '70%',
      top: '6',
      itemWidth: 25,
      itemHeight: 8,
      data: ['乘客数量','司机数量'],
      textStyle: {
          color: '#d9f5ff',
          fontSize : '12'
      }
    }, 
    xAxis: {
        type : 'category',
        axisLine: {
        show: true,
        onZero: true,
        },
        boundaryGap : false,
        axisLine: {
              show: true,
              lineStyle: {
                 color: '#4c8fe3',
                 width: '1'
              }
          },
        axisLabel: {
             show: true,
             interval: '0',
             textStyle: {
                 color: '#d9f5ff',
                 fontSize : '12'
              }
          },
        data: ['2017/6/27','2017/6/28','2017/6/29','2017/6/30','2017/7/1','2017/7/2','2017/7/3']
    },   
    yAxis : {
        type : 'value',
        //name : '网约车数量变化趋势',
        splitLine:{
            show: false,
            lineStyle: {
                 color: '#3D456D',
                 width: 1,
                 type: 'dashed'
            }
        },
        axisLine: {
              show: true,
              lineStyle: {
                 color: '#4c8fe3',
                 width: '1'
              }
          },
        axisLabel: {
             show: true,
             interval: '0',
             textStyle: {
                 color: '#d9f5ff',
                 fontSize : '12'
              }
          },
    },
    series: [{
        name: '乘客数量',
        type: 'line',
        symbol: 'emptyCircle',
        symbolSize: 5,
        itemStyle: {
            normal: {
                color: '#fe3838'
            }
        },
        data:[320, 382, 291, 434, 510, 330, 410]
    },
    {
        name: '司机数量',
        type: 'line',
        symbol: 'emptyCircle',
        symbolSize: 5,
        itemStyle: {
            normal: {
                color: '#00cff1'
            }
        },
        data:[220, 282, 351, 414, 440, 280, 410]
    }]
};
                   
    // 使用刚指定的配置项和数据显示图表。
    myChartLine2.setOption(option);
    window.onresize = myChartLine2.resize; 




//城区联系强度变化趋势
var myChartConnect1 = echarts.init(document.getElementById('connect1'));
var option = {
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    //backgroundColor: 'rgba(255,255,255,0)',
    series: [{
        type: 'graph',
        // top: 'middle',
        // bottom: 5,
        tooltip: {},
        ribbonType: true,
        layout: 'circular',  //图的布局：环形布局

        circular: {
            rotateLabel: false  //是否旋转标签
        },
        symbolSize: 30,
        roam: true,           //是否开启鼠标缩放和平移漫游
        focusNodeAdjacency: true,     //是否鼠标放上突出显示

        label: {
            normal: {
                //position: 'inside',
                fontWeight: 'bold',
                formatter: '{b}',
                normal: {
                    textStyle: {
                        color: '#d9f5ff',
                    }
                }
            }
        },

        edgeSymbol: ['circle'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 14,
                    color: '#ccc',
                    fontWeight: 'bold',
                    fontFamily: '宋体'
                }
            }
        },

        itemStyle: {
            normal: {
                label: {
                    show: true,
                    textStyle: {
                        color: '#d9f5ff',
                        fontSize: 12
                    }
                },
               // color: ["#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
            },
            emphasis: {
                label: {
                    show: true
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        },

        data: [
              {
            name: '机场',
            symbolSize:30,
            label: {
                normal: {
                    position: 'right',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#d7b323'
                }
            }
        },{
            name: '省医',
            symbolSize:45,
            label: {
                normal: {
                    position: 'bottom',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#ff4747'
                }
            }
        }, {
            name: '贵医',
            symbolSize:25,
            label: {
                normal: {
                    position: 'bottom',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#ff4747'
                }
            }
        }, {
            name: '世纪城',
            symbolSize:25,
            label: {
                normal: {
                    position: 'bottom',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#00d86b'
                }
            }
        },  {
            name: '花果园',
            symbolSize:25,
            label: {
                normal: {
                    position: 'left',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#00d86b'
                }
            }
        },
        {
            name: '北站',
            symbolSize:35,
            label: {
                normal: {
                    position: 'left',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#01daff'
                }
            }
        },
        {
            name: '市西路',
            symbolSize:30,
            label: {
                normal: {
                    position: 'top',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#01daff'
                }
            }
        },
        {
            name: '客运东站',
            symbolSize:30,
            label: {
                normal: {
                    position: 'top',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#00a2ff'
                }
            }
        },
        {
            name: '会展中心',
            symbolSize:30,
            label: {
                normal: {
                    position: 'top',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#00a2ff'
                }
            }
        }, {
            name: '大营坡',
            symbolSize:20,
            label: {
                normal: {
                    position: 'right',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#d7b323'
                }
            }
        },
        ],
        // links: [],
        links: [{
                source: '大营坡',
                target: '机场',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '大营坡',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '大营坡',
                target: '世纪城',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '机场',
                target: '省医',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '机场',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '机场',
                target: '花果园',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '机场',
                target: '会展中心',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '省医',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '花果园',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '市西路',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '世纪城',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '大营坡',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '会展中心',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '贵医',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '贵医',
                target: '花果园',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            },{
                source: '贵医',
                target: '大营坡',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            },{
                source: '贵医',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            },{
                source: '世纪城',
                target: '会展中心',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '世纪城',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '世纪城',
                target: '机场',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '世纪城',
                target: '市西路',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '花果园',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '花果园',
                target: '市西路',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            }, {
                source: '北站',
                target: '花果园',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#01daff'
                    }
                }
            },{
                source: '北站',
                target: '市西路',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#01daff'
                    }
                }
            },{
                source: '北站',
                target: '大营坡',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#01daff'
                    }
                }
            }, {
                source: '市西路',
                target: '客运东站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#01daff'
                    }
                }
            }, {
                source: '客运东站',
                target: '会展中心',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00a2ff'
                    }
                }
            }, {
                source: '客运东站',
                target: '省医',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00a2ff'
                    }
                }
            },

        ]
    }]
};
myChartConnect1.setOption(option);
window.onresize = myChartConnect1.resize;  


//区域联系趋势
var myChartConnect2 = echarts.init(document.getElementById('connect2'));
var option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        //ribbonType: true,
        layout: 'circular',  //图的布局：环形布局
        circular: {
            rotateLabel: false  //是否旋转标签
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                show: false,
                
            },
            emphasis: {
                show: true,
                position: 'start',
                formatter: "{c}",
                textStyle: {
                    fontSize: 14
                },
            }
        },
        //symbolSize: 30,
        roam: true,           //是否开启鼠标缩放和平移漫游
        focusNodeAdjacency: true,     //是否鼠标放上突出显示
        
        label: {              //节点处标签
            normal: {
                show: true,
                position: 'top',
                fontWeight: 'bold',
                formatter: '{b}',
                color: '#d9f5ff',
            }
        },
        force: {
            repulsion: 1000
        },
        
        data: [
              {
            name: '机场',
            symbolSize:30,
            value: 34,
            label: {
                normal: {
                    position: 'right',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#d7b323'
                }
            }
        },{
            name: '省医',
            symbolSize:45,
            value: 34,
            label: {
                normal: {
                    position: 'bottom',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#ff4747'
                }
            }
        }, {
            name: '贵医',
            symbolSize:25,
            value: 34,
            label: {
                normal: {
                    position: 'bottom',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#ff4747'
                }
            }
        }, {
            name: '世纪城',
            symbolSize:25,
            value: 34,
            label: {
                normal: {
                    position: 'bottom',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#00d86b'
                }
            }
        },  {
            name: '花果园',
            symbolSize:25,
            value: 34,
            label: {
                normal: {
                    position: 'left',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#00d86b'
                }
            }
        },
        {
            name: '北站',
            symbolSize:35,
            value: 34,
            label: {
                normal: {
                    position: 'left',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#01daff'
                }
            }
        },
        {
            name: '市西路',
            symbolSize:30,
            value: 34,
            label: {
                normal: {
                    position: 'top',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#01daff'
                }
            }
        },
        {
            name: '客运东站',
            symbolSize:30,
            value: 34,
            label: {
                normal: {
                    position: 'top',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#00a2ff'
                }
            }
        },
        {
            name: '会展中心',
            symbolSize:30,
            value: 34,
            label: {
                normal: {
                    position: 'top',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#00a2ff'
                }
            }
        }, {
            name: '大营坡',
            symbolSize:20,
            value: 34,
            label: {
                normal: {
                    position: 'right',
                    
                }
            },
            itemStyle: {
                normal: {
                    color: '#d7b323'
                }
            }
        },
        ],
        // links: [],
        links: [{
                source: '大营坡',
                target: '机场',
                name: '78',
                value: '78',
                // tooltip: {
                //     trigger: 'item',
                //     formatter: function(params, ticket, callback) {
                //         return params.data.name;
                //     }
                // },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        //position: 'start',
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '大营坡',
                target: '北站',
                name: '118',
                value: '118',
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        //position: 'start',
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '大营坡',
                target: '世纪城',
                name: '58',
                value: '58',
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '机场',
                target: '省医',
                name: '58',
                value: '58',
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '机场',
                target: '北站',
                name: '58',
                value: '58',
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '机场',
                target: '花果园',
                name: '58',
                value: '58',
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '机场',
                target: '会展中心',
                name: '58',
                value: '58',
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#d7b323'
                    }
                }
            }, {
                source: '省医',
                target: '北站',
                name: '98',
                value: '98',
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '花果园',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '市西路',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '世纪城',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '大营坡',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '会展中心',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '省医',
                target: '贵医',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            }, {
                source: '贵医',
                target: '花果园',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            },{
                source: '贵医',
                target: '大营坡',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            },{
                source: '贵医',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff4747'
                    }
                }
            },{
                source: '世纪城',
                target: '会展中心',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '世纪城',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '世纪城',
                target: '机场',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '世纪城',
                target: '市西路',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '花果园',
                target: '北站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            },{
                source: '花果园',
                target: '市西路',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00d86b'
                    }
                }
            }, {
                source: '北站',
                target: '花果园',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#01daff'
                    }
                }
            },{
                source: '北站',
                target: '市西路',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#01daff'
                    }
                }
            },{
                source: '北站',
                target: '大营坡',
                name: '58',
                value: '58',
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    },
                    emphasis: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#01daff'
                    }
                }
            }, {
                source: '市西路',
                target: '客运东站',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#01daff'
                    }
                }
            }, {
                source: '客运东站',
                target: '会展中心',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00a2ff'
                    }
                }
            }, {
                source: '客运东站',
                target: '省医',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#00a2ff'
                    }
                }
            },

        ]
    }]
};
myChartConnect2.setOption(option);
window.onresize = myChartConnect2.resize;  


