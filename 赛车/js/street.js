window.onload = function () {
  alert('使用左右方向键或者A,D字母控制小车左右移动\n\n点击确定按钮开始游戏')
  // 捕获背景（父元素）
  var bg = this.document.getElementById('bg');
  var background = this.document.getElementById('background');
  var bgImg = this.document.getElementById('bgImg');
  // 获取屏幕高度,赋予背景
  var h = this.document.documentElement.clientHeight / 1.25;
  var w = bg.clientWidth;
  var carsBg = ['url(../img/block1.png)'];
  bg.style.height = h + 'px';
  bgImg.style.top = -(bgImg.clientHeight - h + 10) + 'px';
  background.style.height = document.documentElement.clientHeight + 'px';
  var score = this.document.getElementById('score');
  var timeLast = this.document.getElementById('timeLast');
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
    box.style.background = carsBg[Math.floor(Math.random() * carsBg.length)];
    bg.appendChild(box);
    moveBox(box); // 为每个box绑定对象
    var carNum = document.querySelectorAll('.box').length;
    if (carNum < 6) {
      intervalTime -= 50;
      clearInterval(timer);
      if (intervalTime < 0) {
        intervalTime = 10;
      };
      if (intervalTime > 0) {
        timer = setInterval(add, intervalTime);
        // console.log(intervalTime);
      };
    };
  };
  // 统计游戏时间
  var timeLastNum = 0;
  setInterval(function () {
    timeLastNum++;
    timeLast.innerHTML = 'Time: ' + timeLastNum + 's';
  }, 1000)
  // 当屏幕数量的车辆小于3辆时生成车辆
  // 初始每隔1s判断数量，添加小车，每次最多添加3辆
  // 每当车辆总数小于3时，同时减少生成车辆的时间间隔
  var intervalTime = 2000;
  // 需要正确关闭！！！
  function add() {
    createBox(); // 生成第1辆
    createBox(); // 生成第2辆
    createBox(); // 生成第3辆
  };
  var timer = setInterval(add, intervalTime);
  // 设置移动背景
  movebg();
  function movebg() {
    var timerS = setInterval(moveStreet, time);
    function moveStreet() {
      var pos = bgImg.offsetTop;
      pos += deltaX;
      if (pos > 0) {
        bgImg.style.top = -(bgImg.clientHeight - h) + 'px';
      } else {
        clearInterval(timerS);
        bgImg.style.top = pos + 'px';
        timerS = setInterval(moveStreet, time);
      }
    }
  }
  // 使得每个box运动起来
  var deltaX = 1;
  var time = 5;
  var scoreNum = 0;
  function moveBox(obj) {
    // bgImg.style.top = -(bgImg.clientHeight - h) + 'px';
    deltaX += 0.01; // 加速度运动
    var pos = 0;
    var id = setInterval(move, time);
    function move() {
      if (pos > (h - boxh * 1.2)) {
        pos = h - boxh * 1.2;
        if (pos == (h - boxh * 1.2)) {
          clearInterval(id);
          bg.removeChild(obj); // 移除运动到底的box
          scoreNum++;
          score.innerHTML = 'Score: ' + scoreNum;
        }
      } else {
        pos += deltaX;
        obj.style.top = pos + 'px';
        // 死亡判断！！！
        if (obj.offsetTop > h - 10 - 2 * boxh) {
          if ((mybox.offsetLeft > obj.offsetLeft - boxw) && (mybox.offsetLeft < obj.offsetLeft + boxw)) {
            alert('游戏结束\n最终得分：' + scoreNum + '分' + '\n存活时间：' + timeLastNum + 's');
            window.location.reload();
          }
        }
      };
      // bgImg.style.top = -(bgImg.clientHeight - h) + pos + 'px';
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
  // 边缘判断 ——————> 已改良
  // function getPos(obj) {
  //   // setInterval(function() {
  //   //   var left = obj.offsetLeft;
  //   //   var top = obj.offsetTop;
  //   //   console.log(left+ ' '+top);
  //   // }, 10)
  // }
  // function end(obj) {
  //   var v = deltaX / time;
  //   var x = h - 10 - 2 * boxh;
  //   var t = x / v;
  //   setTimeout(function () {
  //     var deltaMin = obj.offsetLeft;
  //     var deltaMax = obj.offsetLeft + boxw;
  //     // console.log(deltaMin);
  //     // console.log(deltaMax);
  //     // console.log(mybox.offsetLeft);
  //     if (mybox.offsetLeft <= deltaMax && mybox.offsetLeft >= deltaMin) {
  // alert('Game End');
  // window.location.reload();
  //     }
  //   }, t + 300);
  // };
  // 绑定键盘事件
  var dir = 0;
  this.document.onkeydown = function (event) {
    event = event || window.event;
    // up 38 w 87；down 40 s 83；left 37 a 65；right 39 d 68
    dir = event.keyCode;
  };
  this.document.onkeyup = function () {
    dir = 0;
  };
}