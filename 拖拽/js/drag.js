window.onload = function() {
  var box1 = this.document.getElementById('box1');
  var box2 = this.document.getElementById('box2');
  var img = this.document.getElementsByTagName('img')[0];
  // 定义拖拽函数
  function drag(obj) {
    obj.onmousedown = function(event) {
      // 消除偏移量
      event = event || window.event;
      var xs = event.clientX - obj.offsetLeft;
      var ys = event.clientY - obj.offsetTop;
      document.onmousemove = function(event) {
        event = event || window.event;
        var x = event.clientX;
        var y = event.clientY;
        obj.style.left = x - xs + 'px';
        obj.style.top = y - ys + 'px';
        document.onmouseup = function() {
          document.onmousemove = null; // 取消鼠标移动事件
          document.onmouseup = null; // 取消鼠标松开事件
        }
      }
      // 取消浏览器全选默认拖动行为
      return false;
    }
  };
  // 注入对象
  drag(box1);
  drag(box2);
  drag(img);
}