window.onload = function () {
  // 定义分数变量
  var scoreValue = 0;
  var survivalTimeValue = 0;

  // 获取元素
  var container = this.document.getElementById('container');
  var score = this.document.getElementById('score');
  var scoreNum = this.document.getElementById('scoreNum');
  var background = this.document.getElementById('background');
  var bird = this.document.getElementById('bird');
  var survivalTime = this.document.getElementById('survivalTime');
  var bgImg = this.document.getElementById('bgImg');

  // 获取屏幕高度
  var screenH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // 设置元素样式
  container.style.marginTop = (screenH - container.clientHeight) / 2 + 'px';
  score.style.top = (container.clientHeight - background.clientHeight - score.clientHeight) / 2 + 'px';
  score.style.left = (container.clientWidth - score.clientWidth) / 2 + 'px';
  background.style.top = (container.clientHeight - background.clientHeight - score.clientHeight) / 2 + 'px';
  background.style.left = (container.clientWidth - background.clientWidth) / 2 + 'px';

  // 获取键盘或鼠标指令
  var command;
  this.document.onkeydown = function (event) {
    event = event || window.event;
    command = event.keyCode;
  };
  this.document.onkeyup = function () {
    command = 0;
  };
  this.document.onmousedown = function () {
    command = 32;
  }
  this.document.onmouseup = function () {
    command = 0;
  }

  // 绑定键盘或鼠标指令
  var flyTimer = setInterval(function () {
    var position = bird.offsetTop;
    var speed = 3;
    var acceleration = 1.5;
    if (command == 32) {
      speed = -speed;
      acceleration = 0;
      bird.style.background = 'url(../img/birdUp.png)';
    } else {
      bird.style.background = 'url(../img/birdDown.png)';
    };
    fly(position, speed, acceleration);
  }, 25)

  // 定义小鸟的运动函数
  function fly(pos, speedValue, accelerationValue) {
    speedValue += accelerationValue;
    pos += speedValue;
    if (pos > (background.clientHeight - bird.clientHeight)) {
      pos = background.clientHeight - bird.clientHeight;
    };
    if (pos < 0) {
      pos = 0;
    };
    bird.style.top = pos + 'px';
    var currentPos = pos;
    gameEndBorder(currentPos);
  };

  // 每隔一段时间生成障碍物
  var addTimer = setInterval(function () {
    createAndMove();
  }, 3000);

  // 创建障碍并赋予其运动 
  function createAndMove() {
    var block = this.document.createElement('div');
    block.setAttribute('class', 'block');
    background.appendChild(block);
    block.style.top = randomTop() + 'px';
    move(block);
  };

  // 定义随记生成（-300，-100）|| （100，300）的函数
  function randomTop() {
    var result1 = Math.floor(Math.random() * 201) - 300;
    var result2 = Math.floor(Math.random() * 201) + 100;
    var result;
    if (Math.random() > 0.5) {
      result = result1;
    } else {
      result = result2;
    };
    return result;
  };

  // 定义移动函数
  function move(obj) {
    var pos = 0;
    var speed = 2;
    var moveTimer = setInterval(moveobj, 25);
    function moveobj() {
      pos += speed;
      if (pos > (background.clientWidth)) {
        pos = background.clientWidth
      };
      if (pos == background.clientWidth) {
        clearInterval(moveTimer);
        background.removeChild(obj);
      };
      if (pos == background.clientWidth - bird.offsetLeft) {
        scoreValue++;
        scoreNum.innerHTML = 'Score: ' + scoreValue;
      };
      obj.style.right = pos + 'px';
      if ((obj.offsetLeft < bird.offsetLeft + bird.clientWidth) && (obj.offsetLeft > bird.offsetLeft - bird.clientWidth)) {
        var currentPos = obj.offsetTop;
        gameEndCrash(currentPos)
      }
    };
  };

  // 定义背景位移函数
  // 效果卡顿
  // movebg();
  // function movebg() {
  //   var pos = 0;
  //   var speed = 2;
  //   var moveTimer = setInterval(moveobj, 25);
  //   function moveobj() {
  //     pos -= speed;
  //     if (pos < -bgImg.clientWidth + background.clientWidth) {
  //       pos = -bgImg.clientWidth + background.clientWidth
  //     };
  //     if (pos == -bgImg.clientWidth + background.clientWidth) {
  //       pos = 0;
  //     };
  //     bgImg.style.left = pos + 'px';
  //   };
  // }

  // 定义结束判断函数
  // 定义碰撞判定函数
  function gameEndCrash(position) {
    if (position < 0) {
      if (position + background.clientHeight > bird.offsetTop + bird.clientHeight) {
        gameEnd();
      };
    } else {
      if (position < bird.offsetTop + bird.clientHeight) {
        gameEnd();
      };
    };
  };
  // 定义边缘判定函数
  function gameEndBorder(position) {
    if (position == 0 || position == background.clientHeight - bird.clientHeight) {
      gameEnd();
    }
  };

  // 定义结束函数
  function gameEnd() {
    var str;
    clearInterval(survivalTimer);
    clearInterval(flyTimer);
    clearInterval(addTimer);
    str = '游戏结束!!!\n最终得分：' + scoreValue + '\n最长存活时间：' + timeValue + 's\n点击确定重新开始';
    alert(str);
    window.location.assign('index.html');
  };

  // 生存计时
  var timeValue
  var survivalTimer = setInterval(function () {
    survivalTimeValue += 0.1;
    timeValue = survivalTimeValue.toFixed(1);
    survivalTime.innerHTML = 'Time: ' + timeValue + 's';
  }, 100)
}