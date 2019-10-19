window.onload = function() {
	var items = document.getElementsByName('items');
	var allChecked = document.getElementById('allChecked');
	var allNotChecked = document.getElementById('allNotChecked');
	var reverseChecked = document.getElementById('reverseChecked');
	var switchChecked = document.getElementById('switchChecked');
	var submit = document.getElementById('submit');

	allChecked.onclick = function() {
		for (let index in items) {
			items[index].checked = true;
		}
		switchChecked.checked = true;
	};

	allNotChecked.onclick = function() {
		for (let index in items) {
			items[index].checked = false;
		}
		switchChecked.checked = false;
	};

	reverseChecked.onclick = function() {
		for (let index in items) {
			// if (items[index].checked) {
			// 	items[index].checked = false;
			// } else {
			// 	items[index].checked = true;
			// }
			items[index].checked = !items[index].checked;
		};
		switchChecked.checked = true;
		for (var j = 0; j < items.length; j++) {
			if (!items[j].checked) {
				switchChecked.checked = false;
				break;
			}
		};
	};

	submit.onclick = function() {
		// for (let index in items) {
		// 	if (items[index].checked) {
		// 		console.log(items[index].value);
		// 	}
		// }
		for (var i = 0; i < items.length; i++) {
			if (items[i].checked) {
				console.log(items[i].value);
			}
		}
	};

	switchChecked.onclick = function() {
		console.log(this === switchChecked);
		for (var i = 0; i < items.length; i++) {
			items[i].checked = this.checked;
		}
	};

	for (var i = 0; i < items.length; i++) {
		items[i].onclick = function() {
			switchChecked.checked = true;
			for (var j = 0; j < items.length; j++) {
				if (!items[j].checked) {
					switchChecked.checked = false;
					break;
				}
			};
		}
	};
}
