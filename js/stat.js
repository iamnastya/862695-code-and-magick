'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 50;
var TEXT_WIDTH = 40;
var TEXT_HEIGHT = 16;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;
var HEIGHT = 150;

//коммит

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'green';
  ctx.font="16px PT Mono";
  ctx.fillText("Ура вы победили!", CLOUD_X + GAP, CLOUD_Y + GAP/1.5);
  ctx.fillText("Список результатов:", CLOUD_X + GAP, CLOUD_Y + GAP/1.5 + TEXT_HEIGHT);


  var maxTime = getMaxElement(times);




  ctx.fillStyle = 'blue';
  for (var i = 0; i < names.length; i++) {
    BAR_HEIGHT = (HEIGHT * times[i]) / maxTime;
    ctx.fillText(names[i], CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP/3);
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT - GAP/3 - TEXT_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, CLOUD_Y + TEXT_HEIGHT*2 + GAP);


  };














}
