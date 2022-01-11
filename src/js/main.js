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
})
