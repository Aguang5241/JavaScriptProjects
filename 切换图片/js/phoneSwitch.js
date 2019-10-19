window.onload = function() {
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var intro = document.getElementById('intro');
	var img = document.getElementsByTagName('img')[0];
	var imgArr = ['img/show1.jpeg', 'img/show2.jpeg', 'img/show3.jpeg', 'img/show4.jpeg']
	var index = 0
	
	intro.innerHTML = '共 ' + imgArr.length + ' 张，第 ' + (index+1) + ' 张';
	prev.onclick = function() {
		index--;
		if (index < 0) {
			index = imgArr.length - 1;
		};
		img.src = imgArr[index];
		intro.innerHTML = '共 ' + imgArr.length + ' 张，第 ' + (index+1) + ' 张';
	};
	next.onclick = function() {
		index++;
		if (index > imgArr.length - 1) {
			index = 0;
		};
		img.src = imgArr[index];
		intro.innerHTML = '共 ' + imgArr.length + ' 张，第 ' + (index+1) + ' 张';
	};
}