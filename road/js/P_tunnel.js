
var mpchat = echarts.init(document.getElementById('tunnelLine_plan'))
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
        left:290,
        top:2,
        textStyle:{
            fontFamily:'microsoft yahei',
            fontSize:12,
            color:'#fff',
        },
        data:[
            { name:'桥梁', icon:'rect',},
            { name:'隧道', icon:'rect',},
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
            show:false
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
            name:'隧道',
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
            data:[88,62,60]
        },
        {
            name:'隧道',
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
            data:["-", "-",60,40,80,55]
        },
    ]
}
mpchat.clear(option);
mpchat.resize(option);
mpchat.setOption(option);




