define([
  "underscore",
  "backbone",
  "template/task-list",
  "models/tasks",
  "views/task-item",
], function (_, Backbone, TaskListTemplate, Task, TaskItemView) {
  let tasksCollection = new Task.collection();

  let TaskListView = Backbone.View.extend({
    tagName: "div",
    className: "col-md-8 offset-md-2 jumbotron",
    template: TaskListTemplate,
    model: tasksCollection,
    initialize: function () {
      let self = this;

      this.model.on(
        "add",
        function () {
          $("#task-list", self.$el).empty();
          _.each(this.model.toArray(), function (task) {
            $("#task-list", self.$el).append(
              new TaskItemView({ model: task }).render().$el
            );
          });
          $(":input", self.$el).val("");
        },
        this
      );
    },
    render: function () {
      this.$el.html(this.template);

      return this;
    },
    events: {
      "click .add-task": "addTask",
    },
    addTask: function () {
      let self = this;
      let taskName = $(":input", self.$el).val();

      if (taskName !== "" && taskName.length > 4) {
        let taskModel = new Task.model({
          name: taskName,
        });
        tasksCollection.add(taskModel);
      }
    },
  });

  return TaskListView;
});
