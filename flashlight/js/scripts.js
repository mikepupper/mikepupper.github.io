'use strict';

var width = 300,
    height = 300;

var log = console.log.bind(console);

var containerEl = document.querySelector('.container'),
    imgEl = containerEl.querySelector('.img');

function handleMove(event) {

  var eventToUse = event;

  if (event.type === 'touchstart' || event.type === 'touchmove') {
    eventToUse = event.changedTouches[0];
    event.preventDefault(); // prevent Y-scrolling when swiping up/down
  }

  var bcr = containerEl.getBoundingClientRect();
  var _eventToUse = eventToUse;
  var clientX = _eventToUse.clientX;
  var clientY = _eventToUse.clientY;

  imgEl.style.left = clientX - bcr.left - width / 2 + 'px';
  imgEl.style.top = clientY - bcr.top - height / 2 + 'px';
}

containerEl.addEventListener('mousemove', handleMove);
containerEl.addEventListener("touchmove", handleMove, true);
document.body.style.cursor = 'none';
