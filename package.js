Package.describe({
      summary: "Simple tooltip library for jQuery"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
    api.add_files('tooltips.js', 'client');
});