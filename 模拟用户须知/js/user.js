window.onload = function() {
  // 滚动到底时激活表单项
  // onscroll 事件会在滚动条滚动的时候触发
  var info = document.getElementById('info');
  var inputs = this.document.getElementsByTagName('input');

  info.onscroll = function() {
    if (info.scrollHeight - info.scrollTop == info.clientHeight) {
      inputs[0].disabled = false;
      inputs[1].disabled = false;
    }
  }
}