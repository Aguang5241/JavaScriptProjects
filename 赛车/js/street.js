window.onload = function () {
  alert('使用左右方向键或者A,D字母控制小车左右移动\n\n点击确定按钮开始游戏')
  // 捕获背景（父元素）
  var bg = this.document.getElementById('bg');
  // 获取屏幕高度,赋予背景
  var h = this.document.documentElement.clientHeight;
  var w = bg.clientWidth;
  bg.style.height = h + 'px';
  // 生成box
  function createBox() {
    var box = this.document.createElement('div')
    box.setAttribute('class', 'box');
    // 生成的位置---> 22;88;172;238 四个赛道随机生成
    var randNum = Math.random();
    var deltai = (((w - 20) / 4) - boxw) / 2;
    var i = deltai + 10; // 起始横坐标
    // console.log(randNum);
    if (randNum < 0.25) {
      box.style.left = i + 'px';
    } else if (randNum >= 0.25 && randNum < 0.5) {
      box.style.left = i + boxw + (2 * deltai) + 'px';
    } else if (randNum >= 0.5 && randNum < 0.75) {
      box.style.left = i + (2 * boxw) + (4 * deltai) + 'px';
    } else {
      box.style.left = i + (3 * boxw) + (6 * deltai) + 'px';
    };
    // box.style.left = Math.floor(Math.random() * 270) + 'px'; // 此处无法修改270
    bg.appendChild(box);
    // console.log(box.clientWidth);
    moveBox(box); // 为每个box绑定对象
    end(box);
  };
  // 每隔t毫秒向父元素添加一个box
  var t = 1500;
  function add() {
    // console.log('add');
    createBox();
  };
  setInterval(function () {
    add();
  }, t);
  // 使得每个box运动起来
  var deltaX = 1;
  var time = 10;
  function moveBox(obj) {
    deltaX += 0.1;
    var pos = 0;
    var id = setInterval(move, time);
    function move() {
      if (pos == (h - boxh)) {
        clearInterval(id);
        bg.removeChild(obj); // 移除运动到底的box
      } else {
        pos += deltaX;
        obj.style.top = pos + 'px';
      }
    }
  };
  // 加入自定义小车
  var mybox = this.document.getElementById('mybox');
  var boxh = mybox.clientHeight;
  var boxw = mybox.clientWidth;
  // 指定初始位置
  mybox.style.top = h - boxh - 10 + 'px';
  mybox.style.left = w / 2 + 'px';
  var speed = 10;
  // 定义位移函数
  // function moveUp() {
  //   // console.log('Up');
  //   mybox.style.top = mybox.offsetTop - speed + 'px';
  // };
  // function moveDown() {
  //   // console.log('Down');
  //   mybox.style.top = mybox.offsetTop + speed + 'px';
  // };
  function moveLeft() {
    // console.log('Left');
    if (mybox.offsetLeft >= 25) {
      mybox.style.left = mybox.offsetLeft - speed + 'px';
    }
  };
  function moveRight() {
    // console.log('Right');
    if (mybox.offsetLeft <= w - boxw - 20) {
      mybox.style.left = mybox.offsetLeft + speed + 'px';
    }
  };
  var sensitivity = 30; // 控制方向灵敏度，越小越灵敏
  setInterval(function () {
    switch (dir) {
      // case 87:
      //   moveUp();
      //   break;
      // case 38:
      //   moveUp();
      //   break;
      // case 83:
      //   moveDown();
      //   break;
      // case 40:
      //   moveDown();
      //   break;
      case 65:
        moveLeft();
        break;
      case 37:
        moveLeft();
        break;
      case 68:
        moveRight();
        break;
      case 39:
        moveRight();
        break;
    }
  }, sensitivity);
  // 边缘判断
  function end(obj) {
    var v = deltaX / time;
    var x = h - 10 - 2 * boxh;
    var t = x / v;
    setTimeout(function () {
      var deltaMin = obj.offsetLeft;
      var deltaMax = obj.offsetLeft + boxw;
      // console.log(deltaMin);
      // console.log(deltaMax);
      // console.log(mybox.offsetLeft);
      if (mybox.offsetLeft <= deltaMax && mybox.offsetLeft >= deltaMin) {
        alert('Game End');
        window.location.reload();
      }
    }, t + 300);
  };
  // 绑定键盘事件
  this.document.onkeydown = function (event) {
    event = event || window.event;
    // up 38 w 87；down 40 s 83；left 37 a 65；right 39 d 68
    dir = event.keyCode;
  };
  this.document.onkeyup = function () {
    dir = 0;
  };
}