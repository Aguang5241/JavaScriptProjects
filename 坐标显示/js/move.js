window.onload = function() {
  var box = this.document.getElementsByClassName('box')[0];
  var show = this.document.getElementsByClassName('show')[0];
  var spot = this.document.getElementById('spot');
  var lineX = this.document.getElementById('lineX');
  var lineY = this.document.getElementById('lineY');
  var x;
  var y;
  box.onmousemove = function(event) {
    // console.log(event)
    event = event || window.event; // 处理兼容性问题
    x = event.clientX;
    y = event.clientY;
    show.innerHTML = "坐标：(" + x + "," + y + ")";
    spot.style.top = y + 'px';
    spot.style.left = x + 'px';
    lineX.style.top = y + 2 + 'px';
    lineY.style.left = x + 2 + 'px';
  }
}