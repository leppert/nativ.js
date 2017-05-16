/*
 * nativ.js
 * https://github.com/leppert/nativ.js
 *
 * Copyright 2011, Greg Leppert
 * Licensed under the MIT license.
 * https://raw.github.com/leppert/nativ.js/master/LICENSE
 */ 
var nativ = {is: ('fluid' in window ? 'fluid' : 'platform' in window ? 'prism' : false)};

switch(nativ.is){
  case 'fluid':
    nativ.badge = function(text){
      if(typeof text == 'undefined'){
        return window.fluid.dockBadge;
      } else {
        window.fluid.dockBadge = text;
      }
    };
    nativ.notify = function(input){
      window.fluid.showGrowlNotification(input);
    };
    break;
  case 'prism':
    nativ.badge = function(text){
      if(typeof text == 'undefined'){
        return window.platform.icon().dockText;
      } else {
        window.platform.icon().badgeText = text;
      }
    };
    nativ.notify = function(input){
      window.platform.showNotification(input.title, input.description, input.icon);
    };
    break;
  default:
    nativ.badge = nativ.notify = function(){};
}
