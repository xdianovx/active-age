import tabs from './modules/tabs'
import timeline from "./modules/timeline";
import select from "./modules/choices";
import gallery from "./modules/gallery";
import reviews from "./modules/reviews";

document.addEventListener('DOMContentLoaded', () => {
  tabs()
  timeline()
  select()
  gallery()
  reviews()

  ymaps.ready(init);
  function init(){
    // Creating the map.
    var myMap = new ymaps.Map("map", {
      center: [56.294251, 43.844595],
      zoom: 12
    }), myPlacemark = new ymaps.Placemark([56.294251, 43.844595], {
      hintContent: "Хинт метки"
    });
    myMap.behaviors.disable('scrollZoom')
    myMap.geoObjects.add(myPlacemark);
  }
})
