var bar03 = echarts.init(document.getElementById('bar03'));
var msg = {
    "data": [
        11545,
        14523,
        9845,
        11346,
        12457,
        14325,
        16498,
        17800
    ],
    "total": 30000,
    "percentdata": [
        "18%",
        "15%",
        "9.8%",
        "11%",
        "12%",
        "14%",
        "17%",
        "20%",
        
    ],
    "leftname": [
        "G210",
        "G210",
        "G210",
        "G210",
        "G210",
        "G210",
        "G210",
        "G210"
    ]
}
var data = [];
var totaldata = [];
var percentdata = [];
$.each(msg.data, function(key, value) {
    totaldata.push(80);
    data.push(80* value / 20000);
    percentdata.push(Math.round(value) + "辆");
});
//var data = [];
//var totaldata = [];
//var percentdata = [];
//$.each(msg.data, function(key, value) {
//percentdata.push(Math.round(value) + "辆");
//});
var fillImg ='img/road2/img_jd.png';
var option = {
    grid: {
        top: '4%',
        left: '15%',
        bottom: 0
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '10',
              data: msg.leftname,
            axisLabel: {
                margin: 0,
                textStyle: {
                    color: '#e4f4ff',
                    fontSize: '12',
                },
           },
        },
        {
            axisTick: 'none',
            axisLine: 'none',
            type: 'category',
            axisLabel: {
                margin: -31,
                textStyle: {
                   color: '#fffff',
                    fontSize: '12',
                }
            },
            data: percentdata,
        },
        {
            name: '',
            nameGap: '50',
            nameTextStyle: {
                color: '#000',
                fontSize: '12',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }
    ],
    series: [{
            name: '', // blue bar
            type: 'pictorialBar',
            symbol: 'image://' + fillImg,
            barWidth: '100%',
            symbolOffset: [5, 0],
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#6DE8FA'
                }
            },
            symbolSize: ['67%', 13],
            symbolBoundingData: 100,
            symbolClip: true,
            data: data,
            label: {
                normal: {
                    show: false,
                }
            },
            animationEasing: 'elasticOut',
        },
//       {
//          name: '外圆',
//          type: 'scatter',
//          hoverAnimation: false,
//          data: [0,0,0,0,0,0,0,0],
//          yAxisIndex: 2,
//          symbolSize: 15,
//          symbolOffset: [-70, '0%'],
//          margin: 20,
//          itemStyle: {
//              normal: {
//                  national:function(params) {
//                  	   height: 30;
//                          var num=myColor.length;
//                          return myColor[params.dataIndex%num]
//                  },
//                  opacity: 1,
//              }
//          },
//          z: 2
//      }
//      {
//          name: '外框',
//          type: 'bar',
//          yAxisIndex: 2,
//          barGap: '-100%',
//          data: totaldata,
//          barWidth: 20,
//          // barCategoryGap:'200',
//          itemStyle: {
//              normal: {
//                  color: '#131a27', //填充色
//                  barBorderColor: '#c7cad0', //边框色
//                  barBorderWidth: 1, //边框宽度
//                  barBorderRadius: 0, //圆角半径
//                  label: { //标签显示位置
//                      show: false,
//                      position: 'top' //insideTop 或者横向的 insideLeft
//                  }
//              }
//          },
//          z: 0
//      }
    ]
};
 bar03.setOption(option);
  window.onresize = bar03.resize; 