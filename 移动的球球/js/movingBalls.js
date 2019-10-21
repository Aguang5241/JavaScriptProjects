window.onmousemove= function(event) {
  event = event || window.event;
  // this.console.log(event.clientX);
  var balls = this.document.querySelectorAll('.ball');
  // this.console.log(balls)
  for (var i = 0; i < balls.length; i++) {
    balls[i].style.left = event.clientX + 'px';
  };
  // balls[0].style.top = event.clientY + 'px';
  // balls[1].style.top = event.clientY + 'px';
  // balls[2].style.top = event.clientY + 'px';
  // balls[3].style.top = event.clientY + 'px';
  // balls[4].style.top = event.clientY + 'px';
  // balls[5].style.top = event.clientY + 'px';
  // balls[6].style.top = event.clientY + 'px';
  // balls[7].style.top = event.clientY + 'px';
  // balls[8].style.top = event.clientY + 'px';
  // balls[9].style.top = event.clientY + 'px';
  // balls[10].style.top = event.clientY + 'px';
  // balls[5].style.top = event.clientY + 'px';

  // balls[0].style.left = event.clientX + 'px';
  // balls[1].style.left = event.clientX + 'px';
  // balls[2].style.left = event.clientX + 'px';
  // balls[3].style.left = event.clientX + 'px';
  // balls[4].style.left = event.clientX + 'px';
  // balls[5].style.left = event.clientX + 'px';
}