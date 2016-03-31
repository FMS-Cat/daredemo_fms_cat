(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Yutaka/Dropbox/pro/JavaScript/daredemo_fms_cat/src/main.js":[function(require,module,exports){
'use strict';

(function () {

  'use strict';

  var canvasSize = 480.0;

  var image = new Image();

  // ---

  file.onchange = function (_event) {
    var files = file.files;

    var fileReader = new FileReader();
    fileReader.onload = function () {
      image.src = fileReader.result;
      update();
    };
    fileReader.readAsDataURL(files[0]);
  };

  // ---

  var context = canvas.getContext('2d');

  var catColor = function catColor(_theta) {
    var r = parseInt(Math.cos(_theta) * 127 + 127);
    var g = parseInt(Math.cos(_theta + Math.PI / 3.0 * 2.0) * 127 + 127);
    var b = parseInt(Math.cos(_theta + Math.PI / 3.0 * 4.0) * 127 + 127);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

  var beginTime = +new Date();

  var update = function update() {
    var time = (+new Date() - beginTime) * 0.01;

    for (var iy = 0; iy < 20; iy++) {
      for (var ix = 0; ix < 20; ix++) {
        var len = Math.sqrt(Math.pow(ix - 9.5, 2.0) + Math.pow(iy - 9.5, 2.0));
        context.fillStyle = catColor(len - time);

        var x = ix * 24;
        var y = iy * 24;
        context.fillRect(x, y, 24, 24);
      }
    }

    var max = Math.max(image.width, image.height);

    var size = 0.6 + Math.sin(time / 2.0) * 0.1;
    var wid = image.width / max * size * canvasSize;
    var hei = image.height / max * size * canvasSize;
    context.drawImage(image, (canvasSize - wid) * 0.5, (canvasSize - hei) * 0.5, wid, hei);

    requestAnimationFrame(update);
  };
})();

},{}]},{},["/Users/Yutaka/Dropbox/pro/JavaScript/daredemo_fms_cat/src/main.js"]);
