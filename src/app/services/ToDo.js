"use realm bridge";
import lodash as _ from realm.server.utils;

let id = 0;
const list = [{
   name: "First thing",
   id: id++
}, {
   name: "Second thing",
   id: id++
}];

class ToDo {
   static add(name) {
      list.push({
         name: name,
         id: id++
      })
      return {};
   }

   static remove(id) {

   }

   static getList() {
      return list;
   }
}

export ToDo;
