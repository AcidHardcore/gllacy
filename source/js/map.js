ymaps.ready(init);

var yandexMap;
var yandexMapElement = document.querySelector('.map');

function init() {
    yandexMap = new ymaps.Map(yandexMapElement, {
        center:   [59.94124838506596,30.32167677249142],
        zoom:     15,
        controls: []
    });
    yandexMap.behaviors.disable('scrollZoom');

    yandexMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            top:    100,
            left:   20
        }
    });

    var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="map__yandex-placemark"></div>');

    var circlePlacemark = new ymaps.Placemark(
        yandexMap.getCenter(),
        {
            hintContent: 'Наш офис'
        }, {
            iconLayout: circleLayout
            // iconShape: {
            //     type: 'Circle',
            //     coordinates: [18, 18],
            //     radius: 26
            // }
        }
    );
    yandexMap.geoObjects.add(circlePlacemark);
}
