'use strict';
(function(module) {
  var repoCompiler = Handlebars.compile($('#repo-template').html());
  var repos = {};
  var githubToken = 'b1003f66e6aa1c333445319678b26796bca804df'

  repos.allrepos = [];

  repos.requestRepos = function(callback) {
    $.ajax({url: 'https://api.github.com/users/sanderson239/repos',
    type: 'GET',
    headers: {'Authorization': 'token ' + githubToken},
    success: function(data) {
      repos.allRepos = data;
      callback && callback();
    }
  });
  };

  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  repos.renderRepos = function() {
    $('header').append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  //repos.requestRepos(repos.renderRepos);

  module.repos = repos;
})(window);
