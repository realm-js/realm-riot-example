"use realm backend";
import Express from realm.server;

class Server extends Express {

   configure() {
      this.port = 4999;
      this.serve("/dependencies/", "@default");
      this.serve("/build/", "@home/build");
      this.serve("/lib/riot", "@home/node_modules/riot/");
      this.serve("/lib/realm-riot", "@home/node_modules/realm-riot/");

      this.addScripts([
         '/dependencies/lodash.min.js',
         '/dependencies/realm.js',
         '/dependencies/realm.router.js',
         '/lib/riot/riot.min.js',
         '/lib/realm-riot/dist/frontend/realm.riot.js',
         '/build/tags.js',

         '/build/frontend.js',
         '/build/universal.js'
      ]);

      this.bindIndex(/^\/(?!api|_realm_|favicon.ico).*/, {
         application: 'app.Application',
         title: "Test Application"
      });

      this.start();
   }
}
export Server
