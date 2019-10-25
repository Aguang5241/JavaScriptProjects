window.onload = function () {
  var carousel = this.document.getElementById('carousel');
  var pic = this.document.getElementById('pic');
  var pics = this.document.getElementsByTagName('img');
  var nav = this.document.getElementById('nav');
  var allA = this.document.getElementsByTagName('a');
  var carouselW = carousel.clientWidth;
  var navW = nav.clientWidth;
  var index = 0;
  allA[index].style.backgroundColor = '#000';
  pic.style.width = carouselW * pics.length + 'px';
  nav.style.left = (carouselW - navW) / 2 + 'px';
  // 定义改变a标签样式的函数
  function setA() {
    for (var i = 0; i < allA.length; i++) {
      if (index == pics.length - 1) {
        index = 0;
        pic.style.left = '0'; // ？？？？？？
      };
      allA[i].style.backgroundColor = ''; // 设置空字符串，避免hover属性失效
      allA[index].style.backgroundColor = '#000';
    }
  };
  // obj - 所要移动的对象
  // target - 目标坐标
  // speed - 运动速度
  function moveX(obj, target, speed, callback) {
    clearInterval(obj.timer);
    var oldValue = obj.offsetLeft;
    var newValue = oldValue;
    if (oldValue > target) {
      speed = -speed;
    };
    obj.timer = setInterval(function () {
      newValue += speed;
      if ((newValue > target && speed > 0) || (newValue < target && speed < 0)) {
        newValue = target;
      };
      if (newValue == target) {
        clearInterval(obj.timer);
        callback();
      }
      obj.style.left = newValue + 'px';
    }, 20)
    
  };
  // 1.自动轮播
  autoChange();
  function autoChange() {
    setInterval(function () {
      index++;
      index %= pics.length;
      // // var currentPosition = pic.offsetLeft;
      // // if (currentPosition == -(pics.length - 1) * carouselW) {
      // //   currentPosition = 0;
      // // }
      moveX(pic, -index * carouselW, 50, function() {
        setA();
      });
    }, 3000)
  };
  // 2.点击轮播
  for (var i = 0; i < allA.length; i++) {
    // 为每一个超链接绑定一个标签num
    allA[i].num = i;
    allA[i].onclick = function () {
      index = this.num;
      moveX(pic, -index * carouselW, 20, function () {
        
      });
      setA();
    }
  }
}