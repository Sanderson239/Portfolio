'use strict';

projects.sort(function(firstObject, secondObject) {
  return (new Date(secondObject.datePublished)) - (new Date(firstObject.datePublished));
});

Project.prototype.toHtml = function() {
  var $projectTemplates = $('#project-template').html();
  var templateRender = Handlebars.compile($projectTemplates);
  return templateRender(this);
};

Project.handleMainNav = function () {
  $('.socialMedia').on('click', '.local', function() {
    $('.view').hide();
    $('#' + $(this).attr('data-content')).show();
  });
  $('.socialMedia .local:first').click();
};


projects.forEach(function(projectObj) {
  $('#portfolioHighlights').append(projectObj.toHtml());
});

Project.handleMainNav();
