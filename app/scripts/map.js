$(document).ready(function() {

    //идентефицирую фул пейдж жс
    $('#fullpage').fullpage({

        setAllowScrolling: false,
        controlArrows: false,


        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);

            //По номеру Слайда включаем другой текс в коробке
            if (index == 1 && slideIndex == 0) {
                $('.box').removeClass('active');
                $('#main').addClass('active');
                $('.container').show();
            }

            if (index == 1 && slideIndex == 1) {
                $('.box').removeClass('active');
                $('#bike').addClass('active');
                $('.container').show();
            }
            if (index == 1 && slideIndex == 2) {
                $('.box').removeClass('active');
                $('#run').addClass('active');
                $('.container').show();
            }
            if (index == 1 && slideIndex == 3) {
                $('.box').removeClass('active');
                $('#alarm').addClass('active');
                $('.container').show();
            }
            if (index == 1 && slideIndex == 4) {
                $('.box').removeClass('active');
                $('#info').addClass('active');
                $('.container').show();
            }

        }


    });
    $.fn.fullpage.setAllowScrolling(false);
    //функция рандом)
    function random(min, max) {
        return Math.round((max - min) * Math.random() + min);
    }
    //выкидываем случайную фразу в box
    var currentText = $('.phrase>p:nth-child(' + random(1, 4) + ')');
    currentText.fadeIn();

    setInterval(function() {
        $('.phrase>p').fadeOut('slow')
        setTimeout(function() {
            currentText = currentText.next();
            if (!currentText.length) {
                currentText = $('.phrase>p:nth-child(1)');
                currentText.fadeIn('slow')
            } else {

                currentText.fadeIn('slow')
            }
        }, 500)
    }, 6000)

    $('.box').click(function() {
        $('.phrase>p').fadeOut('fast')
        setTimeout(function() {
            currentText = currentText.next();
            if (!currentText.length) {
                currentText = $('.phrase>p:nth-child(1)');
                currentText.fadeIn('fast')
            } else {

                currentText.fadeIn('fast')
            }
        }, 400)
    })

    $('.close').click(function() {
        $('.container').hide()
    })
    //клик по секции- возврат на главную
    $('#section2').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })

    $('#section3').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })

    $('#section4').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })

    $('#section5').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })

    $('#section6').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })

    $('#section7').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })

    $('#section8').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })


    // клики по иконкам - переход по первому слайдеру
    $('.info div:nth-child(1)').click(function() {
        $.fn.fullpage.moveTo(1, 1)
    })
    $('.info div:nth-child(2)').click(function() {
        $.fn.fullpage.moveTo(1, 2)
    })

    $('.info div:nth-child(4)').click(function() {
        $.fn.fullpage.moveTo(1, 3)
    })


    $('#slide2').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })
    $('#slide3').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })
    $('#slide4').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })
    $('#slide5').click(function() {
        $.fn.fullpage.moveTo(1, 0)
    })

    //+1

    $('#btn').click(function() {
        swal({
                title: "Вы преодолели маршрут? Отлично!",
                text: "Сколько пробежали?",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top"
            },

            function(inputValue) {
                if (inputValue === false) {
                    return false;
                }

                if (inputValue != "15") {
                    swal.showInputError("Не верно");
                    return false
                }

                swal("Отлично!", "", "success");
                $.ajax({
                    url: "button.php",
                    cache: false,
                    type: 'Get',
                    data: {
                        book: 1
                    },
                    success: function(count) {
                        $('#countinfo').html(count + " раз");
                    }
                });
            });

    });

    $.ajax({
        url: "button.php",
        cache: false,
        type: 'Get',
        data: {
            book: 0
        },
        success: function(count) {
            $('#countinfo').html(count + " раз");
        }
    });
    //карта
    var circles = [{
            cor: {
                lat: 50.4640,
                lng: 30.6040
            },
            msg: 'Парк победы'
        }, {
            cor: {
                lat: 50.4740,
                lng: 30.6081
            },
            msg: 'Лесополоса'
        }, {
            cor: {
                lat: 50.4821,
                lng: 30.6109
            },
            msg: 'Лесополоса'
        }, {
            cor: {
                lat: 50.48872000,
                lng: 30.65028000
            },
            msg: 'Быковнянский лес'
        }, {
            cor: {
                lat: 50.4637,
                lng: 30.6372
            },
            msg: 'Парк "Киото"'
        }, {
            cor: {
                lat: 50.4576,
                lng: 30.6218
            },
            msg: 'Парк "Соцгород"'
        }

    ];

    var animateCircle = function(line) {
        var count = 0,
            that = animateCircle,
            kilos = 0,
            newKilos= 0;
        that.render = window.setInterval(function() {
            kilos = Math.floor(count/13)
            count = (count + 1) % 200;
            var icons = line.get('icons');
            icons[0].offset = (count / 2) + '%';
            line.set('icons', icons);
            newKilos = Math.floor(count/13);
            if (kilos<newKilos){
            clock.increment()
                if(newKilos>14) clock.reset()
            }
            
        }, 200);

        
        var clock = $('.your-clock').FlipClock(0, {
            clockFace: 'Counter'
        });


        that.stop = function() {
            window.clearInterval(that.render);
            line.setVisible(false);
        }

    }

    app.initMap = function() {
        app.geolocationJSLoad();
        // Specify features and elements to define styles.
        var styleArray = [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#aee2e0"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#abce83"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#769E72"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#7B8758"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#EBF4A4"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#8dab68"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#5B5B3F"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ABCE83"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#A4C67D"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#9BBF72"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#EBF4A4"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#87ae79"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#7f2200"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "visibility": "on"
            }, {
                "weight": 4.1
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#495421"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }];

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 50.4740,
                lng: 30.6263
            },
            scrollwheel: true,
            styles: styleArray,
            zoom: 14,
            disableDefaultUI: true
        });
        var lineSymbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            strokeColor: '#393'
        };
        var line = new google.maps.Polyline({
            path: app.route,
            icons: [{
                icon: lineSymbol,
                offset: '100%'
            }],
            map: map,
            strokeWeight: 0
        });

        var georssLayer = new google.maps.KmlLayer({
            url: 'http://15km.pp.ua/runforest3.kml',
            map: map,
            preserveViewport: true
        });
        app.circle = [];
        for (var i = 0; i < circles.length; i++) {
            app.circle[i] = new google.maps.Circle({
                strokeColor: '#393',
                strokeOpacity: 0.8,
                strokeWeight: 0,
                fillColor: '#FF7400',
                fillOpacity: 0.35,
                map: map,
                center: circles[i].cor,
                radius: 300
            });
            //навещиваем обработчики собыйтий из замыкания
            (function() {
                var j = i,
                    infoWindow = new google.maps.InfoWindow({
                        content: circles[j].msg,
                        position: circles[j].cor
                    });
                app.circle[i].addListener('click', function() {
                    $.fn.fullpage.moveTo(j + 2, 0)
                });
                app.circle[i].addListener('mouseover', function() {
                    infoWindow.open(map, app.circle[j]);
                })
                app.circle[i].addListener('mouseout', function() {
                    infoWindow.close(map, app.circle[j]);
                })
            })();
        }

        animateCircle(line);

        google.maps.event.addDomListener(document.getElementById('geoCetnr'), 'click', function() {


            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    map.setCenter(pos);
                    app.GeoMarker = new GeolocationMarker(map);
                    animateCircle.stop();
                    $('.wrapClock, .box,#counter').hide('slow');

                }, function() {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }

        });

    }

    /*
    ymaps.ready(init);

    function init() {
        // Создаем карту.
         var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map("map", {
                center: [50.4740,30.6263],
                zoom: 14,
                          controls: ["rulerControl"],
                  behaviors: ["default", "scrollZoom"],

            });
    var ButtonLayout = ymaps.templateLayoutFactory.createClass(
                "<div class='my-button {% if state.selected %}my-button-selected{% endif %}'>" +
                    "{{data.content}}" +
                    "</div>"
            )
    var geolocationControl = new ymaps.control.GeolocationControl({
       
           options:{
            layout: ButtonLayout,
           
                position:{
                bottom:40,
                left:20
                }
           }
        })

    myMap.controls.add(geolocationControl)



                    ]
                },
                // Описываем свойства геообъекта.
                properties:{
                    // Содержимое хинта.
                   hintContent: "Тропа здоровья 8,57 км",
                    balloonContent: "Маркировка - красная стрелка на белом фоне"
                }
            }, {
                // Задаем опции геообъекта.
                // Включаем возможность перетаскивания ломаной.
                draggable: false,
                // Цвет линии.
                strokeColor: "#ff0000",
                // Ширина линии.
                strokeWidth: 2,
                strokeOpacity: 0.4
            });

        myMap.geoObjects.add(new ymaps.Placemark([50.45965338, 30.60770237], {
                balloonContent: 'Бювет с водой'
            }, {
                preset: 'islands#icon',
                iconColor: '#009999'
            }     ))

        // Создаем ломаную, используя класс GeoObject.
        var myGeoObject = new ymaps.GeoObject({
                // Описываем геометрию геообъекта.
                geometry: {
                    // Тип геометрии - "Ломаная линия".
                    type: "LineString",
                    // Указываем координаты вершин ломаной.
     

                    ]
                },
                // Описываем свойства геообъекта.
                properties:{
                   hintContent: "RunForestRun 15 км",
                    balloonContent: "Маркировка - зеленая и оранжевая краска, наклейки RunForestRun"
                }
            }, {
                // Задаем опции геообъекта.
                // Включаем возможность перетаскивания ломаной.
                draggable: false,
                // Цвет линии.
                strokeColor: "#00FF00",
                // Ширина линии.
                strokeWidth: 8,
                strokeOpacity: 0.8
            });
     
     var myCircleCor =  [

                        [50.4640,30.6040],
                        [50.4740,30.6081],
                        [50.4821,30.6109],
                        [50.48872000,30.65028000],
                        [50.4637,30.6372],
                        [50.4576,30.6218]
                        ]

     var myCircle = [];
       



     var rectangle = new ymaps.Rectangle(myMap.getBounds(), {}, {

         fillImageHref: 'hand_made_zone4.png',
         zIndex: 1,
         opacity: 0.001

     });






        // Добавляем линии на карту.
        myMap.geoObjects.add(myGeoObject);
         for (var i = 0; i < myCircleCor.length; i++) {
      /*myCircle[i] = new ymaps.Circle([
            // Координаты центра круга.
            myCircleCor[i],
            // Радиус круга в метрах.
            250
        ], {
       
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#FF9640",
            // Цвет обводки.
            strokeColor: "#FF7400",
            // Прозрачность обводки.
            fillOpacity: 0.5,
            // Ширина обводки в пикселях.
            strokeWidth: 5
        });

    myMap.geoObjects.add(myGeoObject2)

    //парк победы
     myCircle[0] = new ymaps.Circle([
            // Координаты центра круга.
            myCircleCor[0],
            // Радиус круга в метрах.
            200
        ],
         {

                   hintContent: "Парк победы",

               
       
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#FF9640",
            // Цвет обводки.
            strokeColor: "#FF7400",
            // Прозрачность обводки.
            fillOpacity: 0.5,
            // Ширина обводки в пикселях.
            strokeWidth: 2,

        });


      myCircle[1] = new ymaps.Circle([
            // Координаты центра круга.
            myCircleCor[1],
            // Радиус круга в метрах.
            100
        ], {
        hintContent: "Лесополоса",
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#FF9640",
            // Цвет обводки.
            strokeColor: "#FF7400",
            // Прозрачность обводки.
            fillOpacity: 0.5,
            // Ширина обводки в пикселях.
            strokeWidth: 2
        });

            myCircle[2] = new ymaps.Circle([
            // Координаты центра круга.
            myCircleCor[2],
            // Радиус круга в метрах.
            150
        ], {
          hintContent: "Лесополоса",
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#FF9640",
            // Цвет обводки.
            strokeColor: "#FF7400",
            // Прозрачность обводки.
            fillOpacity: 0.5,
            // Ширина обводки в пикселях.
             strokeWidth: 2,

        });


            //лес
                myCircle[3] = new ymaps.Circle([
            // Координаты центра круга.
            myCircleCor[3],
            // Радиус круга в метрах.
            350
        ], {
       hintContent: "Быковнянский лес",
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#FF9640",
            // Цвет обводки.
            strokeColor: "#FF7400",
            // Прозрачность обводки.
            fillOpacity: 0.5,
            // Ширина обводки в пикселях.
           strokeWidth: 2
        });
                    myCircle[4] = new ymaps.Circle([
            // Координаты центра круга.
            myCircleCor[4],
            // Радиус круга в метрах.
            100
        ], {
       hintContent: "Парк Киото",
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#FF9640",
            // Цвет обводки.
            strokeColor: "#FF7400",
            // Прозрачность обводки.
            fillOpacity: 0.5,
            // Ширина обводки в пикселях.
             strokeWidth: 2
        });

                      myCircle[5] = new ymaps.Circle([
            // Координаты центра круга.
            myCircleCor[5],
            // Радиус круга в метрах.
            70
        ], {
          hintContent: "Парк Соцгород",
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#FF9640",
            // Цвет обводки.
            strokeColor: "#FF7400",
            // Прозрачность обводки.
            fillOpacity: 0.5,
            // Ширина обводки в пикселях.
            strokeWidth: 2
        });

                      

    myMap.geoObjects.add(myCircle[i]);

      myCircle[0].events.add("click", function(e) {
    $.fn.fullpage.moveTo(2,random(0,3))
    } );

    myCircle[1].events.add("click", function(e) {
    $.fn.fullpage.moveTo(3,0)
    } );

    myCircle[2].events.add("click", function(e) {
    $.fn.fullpage.moveTo(4,0)
    } );
    myCircle[3].events.add("click", function(e) {
    $.fn.fullpage.moveTo(5,0)
    } );
    myCircle[4].events.add("click", function(e) {
    $.fn.fullpage.moveTo(6,0)
    } );

    myCircle[5].events.add("click", function(e) {
    $.fn.fullpage.moveTo(7,0)
    } );
     };





      
    }

    */
});
