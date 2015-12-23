var StudentsView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    vent.on('showNewCohort', this.updateCohort, this);
  },

  updateCohort: function(cohortNum){
    this.collection.populateCohort(cohortNum);
  },

  render: function() {

  	this.$el.empty();
  	this.students = this.collection.models.map(function(model) {
      return new StudentEntryView({
        model: model
      });
    });

    var $allStudents = this.students.map(function(studenty) {
      return studenty.$el;
    });
    
    this.$el.append($allStudents);
    return this;
  }

});