//获取ul、li
var tips=document.getElementById("tips");
var li=tips.getElementsByTagName("li");
//首页默认样式
li[0].style.fontWeight="bold";
//循环改变样式
for(var i=0;i<li.length;i++){
	li[i].value=i;
	for(var j=0;j>li.length;j++){
			li[j].style.fontWeight=0;
		}
	li[i].onmouseout=function(){	
		li[this.value].style.fontWeight="bold";
	}
}

	


