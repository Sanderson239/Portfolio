'use strict';
(function(module) {
  var aboutController = {};

  aboutController.reveal = function(){
    $('#about').show();
    $('#portfolioHighlights.view').hide();
  };

  module.aboutController = aboutController;
})(window);
