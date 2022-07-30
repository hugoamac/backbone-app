define(["backbone"], function (Backbone) {
  let Task = Backbone.Model.extend({
    defaults: {
      name: "",
    },
  });

  let TasksCollection = Backbone.Collection.extend({
    model: Task,
  });

  return { collection: TasksCollection, model: Task };
});
