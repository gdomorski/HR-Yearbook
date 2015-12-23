var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function (options) {
    this.populateCohort('37');
  },

  populateCohort: function(cohort) {
    var that = this;
    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + cohort;
  	this.fetch({
      success: function(data){
        for(var i = 0; i < data.length; i++) {
          var currentProfile = data[i];
          if(currentProfile !== undefined){
            that.add({  
                name: currentProfile.name,
                image: currentProfile.image,
                cohort: currentProfile.cohort
            });
          }
        }
      },
      error: function () {
        console.log('There was an error with the fetch method');
      }
    });
  }
});