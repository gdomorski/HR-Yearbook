var app = new AppView({
	collection: new Students(),
	router: new AppRouter(),
});


// http://backbonejs.org/#History
Backbone.history.start();
