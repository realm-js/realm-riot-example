<landing>

   <div>
      <a href="/">HOME</a>
   </div>
   <div>
      <a href="/place/some-route-here/">To a place</a>
   </div>
   <div>
      <a href="/place/some-route-here/pukka">To a place tab</a>
   </div>

   <div>
      <a href="/user">To user</a>
   </div>

   <div>
      <a href="/user/active">To active user</a>
   </div>

   <div>
      <a href="/test">To TEST</a>
   </div>
   <div>
      <a href="/test/hello">To test hello</a>
   </div>

   <div route style="padding:10px; border:1px solid blue"></div>

   <h1>ToDo List</h1>

   <div class="todo">
      <div class="item" each={item in list}>
         {item.name}
      </div>
      <hr/>
      <h4>Add new todo</h4>
      <form onsubmit={addToDo}>
         <ui-input model="data.newToDo"></ui-input>
      </form>

   </div>

   <script>
      "use realm";
      var self = this;
      this.data = {
         newToDo: 'New thingy to do'
      }

      import ToDo from app.services;

      this.getList = function () {
         ToDo.getList().then(function (result) {
            self.list = result;
            self.update();
         })
      }

      this.addToDo = function () {
         ToDo.add(self.data.newToDo).then(function () {
            self.getList();
         });
      }

      this.getList();
   </script>
</landing>
