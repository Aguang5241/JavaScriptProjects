window.onload = function () {
  var box = this.document.getElementById('box');
  var speed = 10;
  // 定义位移函数
  function moveUp() {
    // console.log('Up');
    box.style.top = box.offsetTop - speed + 'px';
  };
  function moveDown() {
    // console.log('Down');
    box.style.top = box.offsetTop + speed + 'px';
  };
  function moveLeft() {
    // console.log('Left');
    box.style.left = box.offsetLeft - speed + 'px';
  };
  function moveRight() {
    // console.log('Right');
    box.style.left = box.offsetLeft + speed + 'px';
  };
  setInterval(function () {
    switch (dir) {
      case 87:
        moveUp();
        break;
      case 38:
        moveUp();
        break;
      case 83:
        moveDown();
        break;
      case 40:
        moveDown();
        break;
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
  }, 50);
  this.document.onkeydown = function (event) {
    event = event || window.event;
    // up 38 w 87；down 40 s 83；left 37 a 65；right 39 d 68
    dir = event.keyCode;
  };
  this.document.onkeyup = function () {
    dir = 0;
  }
}