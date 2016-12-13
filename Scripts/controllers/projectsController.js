'use strict';
(function(module) {

  var projectsController = {};

  projectsController.reveal = function(){
    $('#portfolioHighlights.view').show();
    $('#about').hide();
  };
  module.projectsController = projectsController;
})(window);
