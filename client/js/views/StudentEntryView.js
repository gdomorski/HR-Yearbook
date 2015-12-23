
var StudentEntryView = Backbone.View.extend({

	template: _.template('<div id="info-window-container"><h3><%= name %></h3><p>Cohort #<%= cohort %></p>' +
                        '<img class="imageSize" src="<%= image %>"/></div>'),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

	render: function(){
		var enterStudent = this.template({
      name: this.model.get('name'),
      cohort: this.model.get('cohort'),
      image: this.model.get('image')
    });

  	this.$el.html(enterStudent);
	}

});