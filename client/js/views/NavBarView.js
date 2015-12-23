var NavBarView = Backbone.View.extend({

  events: {
    'click': 'clickFunc'  
  },

  template: _.template('<div class="navbar-logo"><img src="../assets/hr-logo.png"/></div>' + 
  											'<div class="bigFont"><img src="../assets/logo.png"/><img src="../assets/snowman.png"/></div>'+
  											'<ul><li data-url="36">Cohort 36</li><li data-url="37">Cohort 37</li></ul>'),

  initialize: function() {
  	router = new AppRouter();
    this.render();
  	return this;
  },

  clickFunc: function(e){
  	var $li = $(e.target);
  	router.navigate($li.attr("data-url"), {trigger: true});
  },

  render: function() {
  	this.$el.append(this.template);
  }
});



