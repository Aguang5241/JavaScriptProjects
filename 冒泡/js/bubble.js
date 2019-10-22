window.onload = function() {
  var boxes = this.document.querySelectorAll('.box');
  var windowH = this.document.documentElement.clientHeight - 10;

  boxes[0].style.width = windowH + 'px';
  boxes[0].style.height = windowH + 'px';

  for (var i = 1; i < boxes.length; i++) {
    var w = windowH - i * 44;
    var h = windowH - i * 44;
    boxes[i].style.width = h + 'px';
    boxes[i].style.height = h + 'px';
    boxes[i].style.top = '22px';
    boxes[i].style.borderRadius = '10000px';
    boxes[boxes.length - i].style.transition = i/2 + 's';
    change(boxes[i]);
  };
  
  function change(obj) {
    obj.onclick = function() {
      obj.style.backgroundColor = '#007abc';
      obj.style.boxShadow = '10px 10px 10px #333';
    }
  }
}