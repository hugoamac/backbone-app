define(["underscore", "backbone"], function (_, Backbone) {
  let TaskItemView = Backbone.View.extend({
    tagName: "li",
    className: "list-group-item",
    initialize: function () {
      this.template = _.template("<%=name%>");
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
  });

  return TaskItemView;
});
