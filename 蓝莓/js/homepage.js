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
 
window.onscroll = function () { 
 var t = document.documentElement.scrollTop || document.body.scrollTop;
 if (t>=0 && t<=890) { 
    $(".c-1").css("background","#2ED7A5"); 
 } else{
     $(".c-1").css("background","#E2E7ED"); 
 }
  if (t>890 && t<=1780) { 
    $(".c-2").css("background","#2ED7A5"); 
 } else{
     $(".c-2").css("background","#E2E7ED"); 
 }
 if (t>1780 && t<=2670) { 
    $(".c-3").css("background","#2ED7A5"); 
 } else{
     $(".c-3").css("background","#E2E7ED"); 
 }
 if (t>2670 && t<=3560) { 
    $(".c-4").css("background","#2ED7A5"); 
 } else{
     $(".c-4").css("background","#E2E7ED"); 
 }
 if (t>3560 && t<=4450) { 
    $(".c-5").css("background","#2ED7A5"); 
 } else{
     $(".c-5").css("background","#E2E7ED"); 
 }
 if (t>4450 && t<4800) { 
    $(".c-6").css("background","#2ED7A5"); 
 } else{
     $(".c-6").css("background","#E2E7ED"); 
 }
 if (t>=4800) { 
    $(".c-7").css("background","#2ED7A5"); 
 } else{
     $(".c-7").css("background","#E2E7ED"); 
 }
}

