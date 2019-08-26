
var pchat = echarts.init(document.getElementById('forecast_planLine'))
var option = {
    /*title: {
        text: '多种资金百分比'
    },*/
    //用formatter回调函数显示多项数据内容
    tooltip: {
        trigger: 'axis',
        borderWidth: 1,
        backgroundColor:'rgba(53,174,255,0.5)',
        formatter: function (params, ticket, callback) {
            var htmlStr = '';
            var valMap = {};
            for(var i=0;i<params.length;i++){
                var param = params[i];
                var xName = param.name;//x轴的名称
                var seriesName = param.seriesName;//图例名称
                var value = param.value;//y轴值
                var color = param.color;//图例颜色

                //过滤无效值
                if(value == '-'){
                    continue;
                }

                //过滤重叠值
                if(valMap[seriesName] == value){
                    continue;
                }

                if(i===0){
                    htmlStr += xName + '<br/>';//x轴的名称
                }
                htmlStr +='<div>';
                //为了保证和原来的效果一样，这里自己实现了一个点的效果
                htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';

                //圆点后面显示的文本
                htmlStr += seriesName + '：' + value;

                htmlStr += '</div>';
                valMap[seriesName] = value;
            }
            return htmlStr;
        }
    },
    legend: {
        itemWidth:10,
        itemHeight:2,
        itemGap:10,
        left:90,
        top:2,
        textStyle:{
            fontFamily:'microsoft yahei',
            fontSize:12,
            color:'#fff',
        },
        data:[
            { name:'0%', icon:'rect',},
            { name:'25%', icon:'rect',},
            { name:'50%', icon:'rect',},
            { name:'75%', icon:'rect',},
            { name:'100%', icon:'rect',}
        ]
    },
    grid: {
        left: '2%',
        right: '4%',
        top:'20%',
        bottom: '2%',
        containLabel: true
    },

    xAxis: {
        axisLine:{
            fontFamily:'microsoft yahei',
            fontSize:'12px',
            color: '#00bfff',
            lineStyle:{
                color:'rgba(53,174,255,0.5)'
            }
        },
        axisLabel: {
            interval: 0,
            fontFamily: 'microsoft yahei',
            fontSize:'12px',
            color: '#00bfff',
        },

        axisTick:{
            show:false
        },
        data: ['2018年','2019年','2020年','2021年','2022年','2023年']
    },
    yAxis: {
        type:'value',
        min: 0,
        max:100,
        splitNumber:5,
        //y轴分割线
        splitLine:{
            show: true,
            lineStyle:{
                color:'rgba(53,174,255,0.5)'
            }
        },
        axisLine:{
            show:false,
            fontSize:'12px',
            color: '#00bfff',
        },
        axisTick:{
            show:false
        },
        axisLabel: {
            fontFamily: 'microsoft yahei',
            fontSize:'12px',
            color: '#00bfff',
        },
       /* axisLabel: {
            fontFamily: 'microsoft yahei',
            fontSize:'12px',
            color: '#00bfff',
        },*/
    },
    series: [
        {
            name:'100%',
            type:'line',
            /*symbol:'circle',*/
            symbolSize:5,
            smooth:true,

            itemStyle:{
                normal:{
                    color:'#ff0000',
                    lineStyle:{
                        width:3,
                    }
                }
            },
            data:[70,80,50]
        },
        {
            name:'100%',
            type:'line',
            /*  symbol:'circle',*/
            symbolSize:5,
            smooth:true,   //关键点，为true是不支持虚线，实线就用true
            itemStyle:{
                normal:{
                    color:'#ff0000',
                    lineStyle:{
                        width:3,
                        type: 'dotted'
                    }
                }
            },
            data:["-", "-",50,60,80,75]
        },
        /******************************/
        {
            name:'75%',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,
            areaStyle:{
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,150,239,0.3)'
                    },
                        {
                            offset: 1,
                            color: 'rgba(0,253,252,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            itemStyle:{
                normal:{
                    color:'#5599ff',
                    lineStyle:{
                        width:3,
                    }
                }
            },
            data:[50,49,36]
        },
        {
            name:'75%',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,
            itemStyle:{
                normal:{
                    color:'#5599ff',
                    lineStyle:{
                        width:3,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },
            data:["-", "-",36,58,59,63]
        },
        /*************************************/
        {
            name:'50%',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,

            itemStyle:{
                normal:{
                    color:'#ffff33',
                    lineStyle:{
                        width:3,
                    }
                }
            },
            data:[39,58,40]
        },
        {
            name:'50%',
            type:'line',
            /*  symbol:'circle',*/
            symbolSize:5,
            smooth:true,   //关键点，为true是不支持虚线，实线就用true
            itemStyle:{
                normal:{
                    color:'#ffff33',
                    lineStyle:{
                        width:3,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },
            data:["-", "-",40,50,52,40]
        },
        /*******************25%***************************/
        {
            name:'25%',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,

            itemStyle:{
                normal:{
                    color:'#009fcc',
                    lineStyle:{
                        width:3,
                    }
                }
            },
            data:[20,10,10]
        },
        {
            name:'25%',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,

            itemStyle:{
                normal:{
                    color:'#009fcc',
                    lineStyle:{
                        width:3,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },
            data:["-", "-",10,15,8,7]
        },
        /************0%***************/
        {
            name:'0%',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,

            itemStyle:{
                normal:{
                    color:'#00ffaa',
                    lineStyle:{
                        width:3,
                    }
                }
            },
            data:[2,19,1]
        },
        {
            name:'0%',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,   //关键点，为true是不支持虚线，实线就用true
            itemStyle:{
                normal:{
                    color:'#00ffaa',
                    lineStyle:{
                        width:3,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },
            data:["-", "-",1,4,0,3]
        },
    ]
}
pchat.clear();
pchat.resize();
pchat.setOption(option);


