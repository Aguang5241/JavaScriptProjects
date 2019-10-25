window.onload = function () {
  var box = this.document.getElementById('box');
  var btns = this.document.getElementsByTagName('button');
  btns[0].onclick = function () {
    moveX(box, 250, 5)
  };
  btns[1].onclick = function () {
    moveX(box, 0, 5)
  };
  btns[2].onclick = function () {
    moveY(box, 0, 5)
  };
  btns[3].onclick = function () {
    moveY(box, 250, 5)
  };



  var timer;
  // obj - 所要移动的对象
  // target - 目标坐标
  // speed - 运动速度
  function moveX(obj, target, speed) {
    clearInterval(timer);
    var oldValue = obj.offsetLeft;
    var newValue = oldValue;
    if (oldValue > target) {
      speed = -speed;
    };
    timer = setInterval(function () {
      newValue += speed;
      if ((newValue > target && speed > 0) || (newValue < target && speed < 0)) {
        newValue = target;
      };
      if (newValue == target) {
        clearInterval(timer);
      }
      obj.style.left = newValue + 'px';
    }, 20)
  };

  function moveY(obj, target, speed) {
    clearInterval(timer);
    var oldValue = obj.offsetTop;
    var newValue = oldValue;
    if (oldValue > target) {
      speed = -speed;
    };
    timer = setInterval(function () {
      newValue += speed;
      if ((newValue > target && speed > 0) || (newValue < target && speed < 0)) {
        newValue = target;
      };
      if (newValue == target) {
        clearInterval(timer);
      }
      obj.style.top = newValue + 'px';
    }, 20)
  }
}