"use realm frontend";
import Router from realm.riot;
import PlaceRoute, TestRoute, UserRoute from app.routes;

class IndexRoute extends Router {

   initialize() {
      console.log('IndexRoute initialize');

      return this.render('landing');
   }

   onTest() {
      return new TestRoute();
   }

   onPlace(id) {
      console.log('IndexRoute onPlace');
      return new PlaceRoute();
   }
   onUser() {
      console.log('IndexRoute onUser');
      return new UserRoute();
   }
}
export IndexRoute
