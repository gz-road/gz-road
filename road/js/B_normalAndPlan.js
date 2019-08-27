var mpchat = echarts.init(document.getElementById('P_bridge'))
var option = {
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
        left:180,
        top:2,
        textStyle:{
            fontFamily:'microsoft yahei',
            fontSize:12,
            color:'#00AAFF',
        },
        data:[
            { name:'正常情况', icon:'rect',},
            { name:'十三五规划', icon:'rect',},
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
            lineStyle:{
                color:'rgba(53,174,255,0.5)'
            }
        },
        axisLabel:{
            interval: 0,
            fontFamily:'microsoft yahei',
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
        },
        axisTick:{
            show:false
        },
        axisLabel: {
            fontFamily: 'microsoft yahei',
            fontSize:'12px',
            color: '#00bfff',
        },
    },
    series: [
        {
            name:'十三五规划',
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
            data:[70,52,60]
        },
        {
            name:'十三五规划',
            type:'line',
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
            data:["-", "-",60,50,90,75]
        },
        /******************************/
        {
            name:'正常情况',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,
            areaStyle:{
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,150,239,0.7)'
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
            data:[50,30,46]
        },
        {
            name:'正常情况',
            type:'line',
            /* symbol:'circle',*/
            symbolSize:5,
            smooth:true,
            areaStyle:{
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,150,239,0.7)'
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
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },
            data:["-", "-",46,56,65,50]
        },
    ]
}
mpchat.clear(option);
mpchat.resize(option);
mpchat.setOption(option);
