'use strict';

function Project(name, url, imgUrl, body, datePublished){
  this.name = name;
  this.url = url;
  this.imgUrl = imgUrl;
  this.body = body;
  this.datePublished = datePublished;
}

var projects = [new Project('Tutor Fellows',
'https://github.com/npisciotti1/Tutor-Fellows',
'http://placekitten.com/200/300',
'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
'Wed Nov 30 2016'),

new Project('Example', '#', '#', 'Lorem', 'Wed Nov 29 2016')];
