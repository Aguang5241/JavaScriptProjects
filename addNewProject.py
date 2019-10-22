import os
# 输入文件夹名称
folder = input('Input the folder name:')
# 输入文件名称
name = input('Input the file name:')
# 建立文件夹
os.mkdir(folder)
os.chdir(folder)
# 添加index.html文件
fileIndex = open('index.html', 'w')
fileIndex.close()
# 添加js文件夹及js文件
os.makedirs('js')
os.chdir('js')
fileJS = open(name + '.js', 'w')
fileJS.close()
os.chdir('..')
# 添加css文件夹及css文件
os.makedirs('css')
os.chdir('css')
fileCSS = open(name + '.css', 'w')
fileCSS.close()
os.chdir('..')
# 添加img文件夹
os.makedirs('img')
