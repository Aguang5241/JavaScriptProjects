window.onload = function () {
  // 定义点击超链接删除所在行信息函数
  function del() {
    // 获取当前tr
    var tr = this.parentNode.parentNode;
    var name = tr.getElementsByTagName('td')[0].innerHTML;
    // 删除确认
    if (confirm('确认删除' + name + "吗?")) {
      // 删除当前tr
      tr.parentNode.removeChild(tr);
    };
    // 取消超链接跳转动作
    return false;
  }

  // 点击按钮提交信息
  var btn = document.getElementById('add');
  btn.onclick = function () {
    // 获取信息
    // 获取用户输入文本内容
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var salary = document.getElementById('salary').value;
    // 添加信息
    // 创建元素
    var tr = document.createElement('tr');

    // ---> 比较繁琐的方法：堆积木
    // var nameTd = document.createElement('td');
    // var emailTd = document.createElement('td');
    // var salaryTd = document.createElement('td');
    // var aTd = document.createElement('td');
    // var a = document.createElement('a');
    // 给元素添加文本内容
    // nameTd.innerHTML = name;
    // emailTd.innerHTML = email;
    // salaryTd.innerHTML = salary;
    // aTd.appendChild(a);
    // a.innerHTML = 'Delete';
    // a.href = 'javascript:;';
    // 将添加好文本内容的元素添加进tr元素
    // tr.appendChild(nameTd);
    // tr.appendChild(emailTd);
    // tr.appendChild(salaryTd);
    // tr.appendChild(aTd);

    // ---> 简单的方法：直接添加
    tr.innerHTML =  "<td>" + name + "</td>" +
                    "<td>" + email + "</td>" +
                    "<td>" + salary + "</td>" +
                    "<td><a href='javascript:;'>Delete</a></td>";

    // 将tr元素添加进表格
    // tbody为浏览器自行添加的标签
    var content = document.getElementsByTagName('tbody')[0];
    content.appendChild(tr);

    // 获取超链接
    var allA = document.getElementsByTagName('a');
    // 遍历所有的元素，为每个元素绑定单击响应函数
    for (var i = 0; i < allA.length; i++) {
      allA[i].onclick = del;
    };
  }
}