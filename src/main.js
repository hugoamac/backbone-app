require.config({
  paths: {
    jquery: "/node_modules/jquery/dist/jquery.min",
    underscore: "/node_modules/underscore/underscore-min",
    backbone: "/node_modules/backbone/backbone-min",
    bootstrap: "/node_modules/boostrap/dist/js/bootstrap.min",
  },
});

require(["views/app"], function (AppView) {
  console.log(`Loaded application...`);

  new AppView();
});
