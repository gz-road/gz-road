var ring = echarts.init(document.getElementById('ring'));

			//准备背景图片
			var ylvIcon = "img/icon_ylv.png";
			var clvIcon = "img/icon_clv.png";
			var ringBg = "img/xb_bg.png";

			option = {
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				calculable: true,
				// 控制x和y轴
				xAxis: {
					max: 10,
					show: false,
					splitLine: {
						show: false
					}
				},
				yAxis: {
					max: 10,
					show: false,
					splitLine: {
						show: false
					}
				},
				series: [
					//添加背景图片  左右两个图标
					{
						type: 'scatter',
						zlevel: 60,
						itemStyle: {
							opacity: 1 // 控制 满意icon的 透明度
						},
						data: [{ // 外圈 点状圈
								value: 5,
								symbol: 'image://' + ringBg,
								symbolSize: 128, //调整添加图片的大小
								symbolOffset: [0, 0]
							},
							{ // 左侧  icon
								value: 5,
								symbol: 'image://' + ylvIcon,
								symbolSize: 25,
								symbolOffset: [-46, 7], //移动图标位置
								opacity: 1
							},
							{ //右侧  icon
								value: 5,
								symbol: 'image://' + clvIcon,
								symbolSize: 25,
								symbolOffset: [45, -5],
								opacity: 1
							}
						]

					},
					{
						type: 'pie',
						radius: [30, 40],
						center: ['50%', '50%'],
						color: "#ff6161",
						data: [{
								value: 34,

								label: {
									color: "rgba(255,255,255,.45)",
									fontSize: 14,
									formatter: '{p10| 次差路率}\n{a|39.53%}\n{b|10234}',
									//设置指示文本样式
									rich: {
										a: {
											color: "#ff6161",
											fontSize: 18,
											lineHeight: 15, //设置行高
											padding: [40, 10, 0, 0]
										},
										b: {
											color: "#ff6161",
											fontSize: 14,
											lineHeight: 15,
											padding: [30, 10, 0, 0]
										},
										p10: {
											padding: [30, 10, 65, 0],
											color: '#afc3da',
											fontSize: 14
										}
									}
								},
								//指示线
								labelLine: {
									show: true,
									length: 20,
									length2: 30
								},
							},
							{
								value: 52,
								itemStyle: {
									color: "transparent"
								}
							}
						]
					},
					{
						type: 'pie',
						radius: [30, 45],
						center: ['50%', '50%'],
						color: "#1fadff",
						data: [{
								value: 34,
								itemStyle: {
									color: "transparent"
								}
							},
							{
								value: 52,
								name: 'rose2',

								label: {
									color: "rgba(255,255,255,.45)",
									fontSize: 14,
									formatter: '{p10| 优良路率}\n{a|60.47%}\n{b|10234}',
									rich: {
										a: {
											color: "#1fadff",
											fontSize: 18,
											lineHeight: 15, //设置行高
											padding: [40, 10, 0, 0] //调节文字之间的位置
										},
										b: {
											color: "#1fadff",
											fontSize: 14,
											lineHeight: 15,
											padding: [30, 10, 0, 0]
										},
										p10: {
											padding: [30, 10, 60, 0],
											color: '#afc3da',
											fontSize: 14
										}
									}
								},
								labelLine: {
									show: true,
									length: 20,
									length2: 30
								},
							}
						]
					}
				]
			};

	ring.setOption(option);
  window.onresize = ring.resize; 