window.onload = function () {
  // 获取所有box元素
  var boxes = document.querySelectorAll('.box');

  // 获取空位索引
  var emptyBoxIndexes = getEmptyBoxIndexes();
  function getEmptyBoxIndexes() {
    var emptyBoxIndexes = [];
    for (var i = 0; i < boxes.length; i++) {
      if (!boxes[i].innerHTML) {
        emptyBoxIndexes.push(i);
      }
    }
    return emptyBoxIndexes;
  };
  
  // 生成随记位置索引，该位置索引范围为空位索引
  function randomIndex() {
    while (true) {
      var index = Math.floor(Math.random() * 16);
      if (index in emptyBoxIndexes) {
        break;
      };
    };
    return emptyBoxIndexes[index];
  };

  // 生成随机数：其中80%的概率生成2，20%的概率生成4
  function randomNum() {
    var num;
    if (Math.random() > 0.8) {
      num = 4;
    } else {
      num = 2;
    };
    return num;
  };

  // 初始添加数字2或4
  boxes[randomIndex()].innerHTML = randomNum();
  boxes[randomIndex()].innerHTML = randomNum();

  // 绑定事件
  var body = document.getElementsByTagName('body')[0];
  body.onkeypress = function () {
    // w 119 s 115 a 97 d 100 r 114 q 113
    var keyNum = event.which; // Netscape/Firefox/Opera
    switch (keyNum) {
      case 119: // 上
        console.log(keyNum);
        break;
      case 115: // 下
        console.log(keyNum);
        break;
      case 97: // 左
        console.log(keyNum);
        break;
      case 100: // 右
        console.log(keyNum);
        break;
      case 114: // 刷新
        console.log(keyNum);
        window.location.reload();
        break
      default:
        console.log(keyNum);
    }
  };
  // 定义算法
  // 获取非空box的值
  var fullBoxIndexes = getFullBoxIndexes();
  function getFullBoxIndexes() {
    var fullBoxIndexes = [];
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].innerHTML) {
        fullBoxIndexes.push(i);
      }
    }
    return fullBoxIndexes;
  };
  console.log(fullBoxIndexes);
  // 能动与否：传入动作指令及该方块坐标，判断该方块所在行或列是否有空格

}