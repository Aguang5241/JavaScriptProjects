window.onload = function () {
  var box = this.document.getElementById('box');
  function bind(obj, eventStr, callback) {
    if (obj.addEventListener) {
      // 大部分浏览器
      obj.addEventListener(eventStr, callback, false);
    } else {
      // 针对IE8及以下
      obj.attatchEvent('on' + eventStr, function () {
        // 在匿名函数中调用回调函数解决该方法this不是触发对象的问题
        callback.call(obj);
      });
    }
  };
  // onmousewheel---firefox不兼容
  // firefox中使用DOMMouseScroll，需要addEventListener
  box.onmousewheel = function (event) {
    event = event || window.event;
    // event.wheelDelta 获取滚动方向，向上为正，向下为负
    // firefox 依旧不支持
    // console.log(event.wheelDelta);
    // firefox 使用 event.detail ，向上为负，向下为正
    // console.log(event.detail);
    if (event.wheelDelta > 0 || event.detail < 0) {
      console.log('up');
      if (box.clientHeight > 10) {
        box.style.height = box.clientHeight - 10 + 'px';
      }
    } else {
      console.log('down');
      box.style.height = box.clientHeight + 10 + 'px';
    };
    // 由于Firefox使用addEventListener，return false无效
    // 对于IE8该方法会报错，还需要进行判断
    event.preventDefault && event.preventDefault(); 
    return false; // 取消浏览器滚动条的默认滚动行为
  };
  bind(box, 'DOMMouseScroll', box.onmousewheel);
}