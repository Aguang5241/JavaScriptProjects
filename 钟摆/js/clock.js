window.onload = function () {
  // 获取屏幕高度
  var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  // 获取两个对象
  var box = this.document.getElementById('box');
  var clockBall = this.document.getElementById('clockBall');
  // 获取对象相关值
  var ballW = clockBall.clientWidth;
  var boxW = box.clientWidth;
  var boxLeft = box.offsetLeft;
  // 声明相关变量
  var t = 10; // setInterval()时间间隔
  var x = 0; // 横坐标
  var delta; // 位移间隔变量
  var deltaNum = (boxW - ballW) / (1000 / t); // 位移间隔变量的值
  var deg = 45; // 摆动的角度
  var degNum = deg / (1000 / t); // 摆动的角度值
  // 指定背景高度
  box.style.height = h + 'px';
  // 进入钟摆动画
  this.setInterval(function () {
    // 由正负指定方向
    if (clockBall.offsetLeft == boxLeft + boxW - ballW) {
      delta = -deltaNum;
    };
    if (clockBall.offsetLeft == boxLeft) {
      delta = deltaNum;
    };
    if (delta > 0) {
      deg -= degNum;
    } else {
      deg += degNum;
    };
    x += delta;
    // 边缘判断
    if (x > boxW - ballW) {
      x = boxW - ballW;
    };
    if (x < 0) {
      x = 0;
    };
    // 改变坐标
    clockBall.style.left = x + 'px';
    clockBall.style.top = 300 + x * Math.sin(deg * Math.PI / 180) + 'px';
  }, t)
}