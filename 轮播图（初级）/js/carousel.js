window.onload = function () {
  var start = this.document.getElementById('start');
  var end = this.document.getElementById('end');
  var img = this.document.getElementsByTagName('img')[0];
  var imgSrc = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg']
  var i = 0;
  var id;

  start.onclick = function () {
    clearInterval(id); // 先清除之前设定的定时器
    id = setInterval(function () {
      i++;
      i = i % imgSrc.length;
      img.setAttribute('src', imgSrc[i]);
    }, 1500)
  };
  end.onclick = function () {
    clearInterval(id); // 接受undefined
  }
}