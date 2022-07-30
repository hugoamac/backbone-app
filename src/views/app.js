define(["underscore", "backbone", "views/task-list"], function (
  _,
  Backbone,
  TaskListView
) {
  let AppView = Backbone.View.extend({
    el: "#content",
    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html(new TaskListView().render().$el);
    },
  });

  return AppView;
});
