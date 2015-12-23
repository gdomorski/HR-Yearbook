var vent = _.extend({}, Backbone.Events);

var AppRouter = Backbone.Router.extend({

  routes: {
    '': '',
    '36': 'showCohort36',
    '37': 'showCohort37',
  },

  showCohort36: function(){
  	vent.trigger('showNewCohort', '36');
  },

  showCohort37: function(){
  	vent.trigger('showNewCohort', '37');
  }

});