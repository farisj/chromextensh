'use strict';

console.log('\'Allo \'Allo! Content script');

var ABC = (function($){
  var _public = {};

  function init(){
    $('body *').not('input').replaceText(/ember/gi, 'embs');
    $('body *').not('input').replaceText(/activities/gi, 'activs');
    $('body *').not('input').replaceText(/schedule/gi, 'sched');
    $('body *').not('input').replaceText(/ation/gi, 'ash');
    $('body *').not('input').replaceText(/sessions/gi, 'seshes');
    $('body *').not('input').replaceText(/session/gi, 'sesh');
    $('body *').not('input').replaceText(/conference/gi, 'conf');
    $('body *').not('input').replaceText(/family/gi, 'fam');
    $('body *').not('input').replaceText(/additional/gi, 'addish');
  };

  _public.func = function(){
    console.log('asdf');
  }

  init();

  return _public;
})(jQuery)
