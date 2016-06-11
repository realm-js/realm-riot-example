"use realm frontend";
import Router from realm.riot;

class ProfileTabsRoute extends Router {
   constructor(user) {
      super();
      this.user = user;
   }

   initialize() {
      return this.render('profile-tabs', function(tabs) {
         this.tabs = tabs;
         tabs.user = this.user
         tabs.update();
      });
   }

   updateSelected(name) {
      if (this.tabs) { // a little bug here. Tabs are not ready. Need sync
         this.tabs.active = name;
         this.tabs.update();
      }
   }

   onFirst() {
      return this.render('profile-first', function() {
         this.updateSelected('first');
      });
   }

   onSecond() {
      return this.render('profile-second', function() {
         this.updateSelected('second');
      });
   }

   onThird() {
      return this.render('profile-third', function() {
         this.updateSelected('third');
      });
   }
}

export ProfileTabsRoute;
