// JavaScript Document
// 百度地图API功能
        var map = new BMap.Map("map", {
            enableMapClick: false
        });    // 创建Map实例
        map.centerAndZoom(new BMap.Point(106.636784,26.652763), 5);  // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

        // 地图自定义样式
        map.setMapStyle({
            styleJson: [
                    {
                              "featureType": "water",
                              "elementType": "all",
                              "stylers": {
                                        "color": "#021019"
                              }
                    },
                    {
                              "featureType": "land",
                              "elementType": "geometry.fill",
                              "stylers": {}
                    },
                    {
                              "featureType": "highway",
                              "elementType": "geometry.stroke",
                              "stylers": {
                                        "color": "#147a92"
                              }
                    },
                    {
                              "featureType": "arterial",
                              "elementType": "geometry.fill",
                              "stylers": {
                                        "color": "#022338"
                              }
                    },
                    {
                              "featureType": "arterial",
                              "elementType": "geometry.stroke",
                              "stylers": {
                                        "color": "#0b3d51"
                              }
                    },
                    {
                              "featureType": "local",
                              "elementType": "geometry",
                              "stylers": {
                                        "color": "#022338"
                              }
                    },
                    {
                              "featureType": "background",
                              "elementType": "all",
                              "stylers": {
                                        "color": "#002650"
                              }
                    },
                    {
                              "featureType": "railway",
                              "elementType": "geometry.fill",
                              "stylers": {
                                        "color": "#000000"
                              }
                    },
                    {
                              "featureType": "railway",
                              "elementType": "geometry.stroke",
                              "stylers": {
                                        "color": "#08304b"
                              }
                    },
                    {
                              "featureType": "subway",
                              "elementType": "geometry",
                              "stylers": {
                                        "lightness": -70
                              }
                    },
                    {
                              "featureType": "building",
                              "elementType": "geometry.fill",
                              "stylers": {
                                        "color": "#000000"
                              }
                    },
                    {
                              "featureType": "all",
                              "elementType": "labels.text.fill",
                              "stylers": {
                                        "color": "#857f7f"
                              }
                    },
                    {
                              "featureType": "all",
                              "elementType": "labels.text.stroke",
                              "stylers": {
                                        "color": "#000000"
                              }
                    },
                    {
                              "featureType": "building",
                              "elementType": "geometry",
                              "stylers": {
                                        "color": "#022338"
                              }
                    },
                    {
                              "featureType": "green",
                              "elementType": "geometry",
                              "stylers": {
                                        "color": "#062032"
                              }
                    },
                    {
                              "featureType": "boundary",
                              "elementType": "all",
                              "stylers": {
                                        "color": "#1e1c1c"
                              }
                    },
                    {
                              "featureType": "road",
                              "elementType": "all",
                              "stylers": {
                                        "color": "#022338"
                              }
                    }
              ]
        });

        var randomCount = 30;

        var node_data = {
            "0":{"x":106.628237, "y":26.646346},
            "1":{"x":106.803932, "y":26.533251},
        };

        var edge_data = [
            {"source":"1", "target":"0"}
        ]

        var citys = ["北京","天津","上海","重庆","石家庄","太原","呼和浩特","哈尔滨","长春","沈阳","济南","南京","合肥","杭州","南昌","福州","郑州","武汉","长沙","广州","南宁","西安","银川","兰州","西宁","乌鲁木齐","成都","贵阳","昆明","拉萨","海口"];

        // 构造数据
        for (var i = 1; i < randomCount; i++) {
            var cityCenter = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length)]);
            node_data[i] = {
                x: cityCenter.lng - 0.005 + Math.random() * 1,
                y: cityCenter.lat - 0.005 + Math.random() * 1,
            }
            edge_data.push(
                {"source": ~~(i * Math.random()), "target": '0'}
            );
        }

        var fbundling = mapv.utilForceEdgeBundling()
                        .nodes(node_data)
                        .edges(edge_data);

        var results = fbundling();  

        var data = [];
        var timeData = [];

        for (var i = 0; i < results.length; i++) {
            var line = results[i];
            var coordinates = [];
            for (var j = 0; j < line.length; j++) {
                coordinates.push([line[j].x, line[j].y]);
                timeData.push({
                    geometry: {
                        type: 'Point',
                        coordinates: [line[j].x, line[j].y]
                    },
                    count: 1,
                    time: j
                });
            }
            data.push({
                geometry: {
                    type: 'LineString',
                    coordinates: coordinates
                }
            });
        }

        var dataSet = new mapv.DataSet(data);

        var options = {
            strokeStyle: 'rgba(6,120,191, 1)',
            //globalCompositeOperation: 'lighter',
            shadowColor: 'rgba(6,120,191, 0.5)',
            shadowBlur: 5,
            methods: {
                click: function (item) {
                }
            },
            lineWidth:3.0,
            draw: 'simple'
        }

        var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

        var dataSet = new mapv.DataSet(timeData);

        var options = {
            fillStyle: 'rgba(78, 234, 245, 0.3)',
            shadowBlur: 10,
            //globalCompositeOperation: 'lighter',
            size: 5.5,
            animation: {
                type: 'time',
                stepsRange: {
                    start: 0,
                    end: 100
                },
                trails: 0.9,
                duration: 5,
            },
            draw: 'simple'
        }

        var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);


