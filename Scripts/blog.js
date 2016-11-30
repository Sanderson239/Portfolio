'use strict';

projects.sort(function(firstObject, secondObject) {
  return (new Date(secondObject.datePublished)) - (new Date(firstObject.datePublished));
});

Project.prototype.toHtml = function() {
  var $newProject = $('section.highlight').clone();
  $newProject.find('a').text(this.name);
  $newProject.find('a[href]').attr('href', this.url);
  $newProject.find('img[src]').attr('src', this.imgUrl);
  $newProject.find('p').html(this.body);
  $newProject.find('img[alt]').attr('alt', this.name);
  $newProject.removeClass('highlight');
  $newProject.addClass('project');
  return $newProject;
};

projects.forEach(function(projectObj) {
  $('.mainParagraph').append(projectObj.toHtml());
});