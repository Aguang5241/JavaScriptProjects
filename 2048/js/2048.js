window.onload = function () {
  // // 获取所有box元素
  // var boxes = document.querySelectorAll('.box');

  // // 获取x轴元素
  // var boxX1 = document.querySelectorAll('.x1');
  // var boxX2 = document.querySelectorAll('.x2');
  // var boxX3 = document.querySelectorAll('.x3');
  // var boxX4 = document.querySelectorAll('.x4');

  // console.log(boxes[9] == boxX3[1]);

  // // 获取空位索引
  // var emptyBoxIndexes = getEmptyBoxIndexes();
  // function getEmptyBoxIndexes() {
  //   var emptyBoxIndexes = [];
  //   for (var i = 0; i < boxes.length; i++) {
  //     if (!boxes[i].innerHTML) {
  //       emptyBoxIndexes.push(i);
  //     }
  //   }
  //   return emptyBoxIndexes;
  // };

  // // 生成随记位置索引，该位置索引范围为空位索引
  // function randomIndex() {
  //   while (true) {
  //     var index = Math.floor(Math.random() * 16);
  //     if (index in emptyBoxIndexes) {
  //       break;
  //     };
  //   };
  //   return emptyBoxIndexes[index];
  // };

  // // 生成随机数：其中80%的概率生成2，20%的概率生成4
  // function randomNum() {
  //   var num;
  //   if (Math.random() > 0.8) {
  //     num = 4;
  //   } else {
  //     num = 2;
  //   };
  //   return num;
  // };

  // // 初始添加数字2或4
  // // 还是有一点bug，会在相同位置生成
  // boxes[randomIndex()].innerHTML = randomNum();
  // boxes[randomIndex()].innerHTML = randomNum();

  // // 绑定事件
  // var body = document.getElementsByTagName('body')[0];
  // body.onkeypress = function () {
  //   // w 119 s 115 a 97 d 100 r 114 q 113
  //   var keyNum = event.which; // Netscape/Firefox/Opera
  //   switch (keyNum) {
  //     case 119: // 上
  //       console.log(keyNum);
  //       break;
  //     case 115: // 下
  //       console.log(keyNum);
  //       break;
  //     case 97: // 左
  //       console.log(keyNum);
  //       break;
  //     case 100: // 右
  //       console.log(keyNum);
  //       break;
  //     case 114: // 刷新
  //       console.log(keyNum);
  //       window.location.reload();
  //       break
  //     default:
  //       console.log(keyNum);
  //   }
  // };
  // // 定义算法
  // // 获取非空box的索引值
  // var fullBoxIndexes = getFullBoxIndexes();
  // function getFullBoxIndexes() {
  //   var fullBoxIndexes = [];
  //   for (var i = 0; i < boxes.length; i++) {
  //     if (boxes[i].innerHTML) {
  //       fullBoxIndexes.push(i);
  //     }
  //   }
  //   return fullBoxIndexes;
  // };
  // console.log(fullBoxIndexes);
  // // 能动与否：传入动作指令及该方块坐标，判断该方块所在行或列是否有空格
  // // function canMove(keyNum) {
  // // }

  // 原始二维数组
  var numArray = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  // 定义刷新函数
  function printBox() {
    // 获取boxes元素
    var boxes = document.querySelector('.boxes');
    boxes.innerHTML = null;
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (numArray[i][j]) {
          boxes.innerHTML += "<div class='box'>" + numArray[i][j] + "</div>";
        } else {
          boxes.innerHTML += "<div class='box'></div>";
        }
      }
    };
  };
  // 定义生成随记数2或3的函数
  // 80%的概率为2；20%的概率为4
  function randomNum() {
    var num;
    if (Math.random() > 0.8) {
      num = 4;
    } else {
      num = 2;
    };
    return num;
  };
  // 定义生成随记坐标的函数
  // 甄别空位坐标，在非空位范围内生成坐标
  function randomPos() {
    var pos = [];
    while (true) {
      var x = Math.floor(Math.random() * 4);
      var y = Math.floor(Math.random() * 4);
      if (!numArray[x][y]) {
        pos.push(x);
        pos.push(y);
        break;
      }
    };
    return pos;
  };
  // 定义绑定函数，在空位处生成随机数2或4，并更新列表
  function generateNum() {
    var pos = randomPos();
    numArray[pos[0]][pos[1]] = randomNum();
    return numArray;
  };
  // 定义结束函数 // 还有问题
  // function gameEnd() {
  //   for (var i = 0; i < 4; i++) {
  //     for (var j = 0; j < 4; j++) {
  //       if (numArray[i][j] == 0) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //   };
  // };









  // 绑定事件，主体内容
  var body = document.getElementsByTagName('body')[0];
  body.onkeypress = function () {
    // w 119 s 115 a 97 d 100 r 114 q 113
    var keyNum = event.which; // Netscape/Firefox/Opera
    switch (keyNum) {
      case 119: // 上
        console.log(keyNum);
        printBox(generateNum())
        console.log(numArray);
        break;
      case 115: // 下
        console.log(keyNum);
        printBox(generateNum())
        break;
      case 97: // 左
        console.log(keyNum);
        printBox(generateNum())
        break;
      case 100: // 右
        console.log(keyNum);
        printBox(generateNum())
        break;
      case 114: // 刷新
        console.log(keyNum);
        window.location.reload();
        break;
      default:
        console.log(keyNum);
    }
  }
}
