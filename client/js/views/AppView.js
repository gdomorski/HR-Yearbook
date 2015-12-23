  var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {
    this.profiles = new StudentsView({ collection: this.collection });
    this.hrLogo = new NavBarView({collection: this.collection});
    this.render();
  },

  render: function(){
    this.$el.html([this.hrLogo.$el, this.profiles.$el]);
    return this;
  },

});