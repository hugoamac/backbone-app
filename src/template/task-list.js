define(["backbone"], function (Backbone) {
  return `
      <h2>Task List</h2><hr>
      <form class="row" autocomplete="off">
          <div class="col-md-10">
            <input type="text" class="form-control" name="name" placeholder="Task"/>
          </div>
          <div class="col-md-2 d-grid gap-2">
            <button type="button" class="btn btn-primary add-task">Add Task</button>
          </div>
      </form>
      <br>
      <ul class="list-group" id="task-list"></ul>
  `;
});
