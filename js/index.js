$(".title-1_content li a").click(function(){
  $(".title-1_content li a").removeClass();
  $(this).addClass("active-list")
})
$(".title-2_content li a").click(function(){
  $(".title-2_content li a").removeClass();
  $(this).addClass("active-list")
})
var oMain_left=document.getElementById("main_left");
var oLis_1=oMain_left.getElementsByTagName("li");
var oMain_right=document.getElementById("main_right_content");
var oLis_2=oMain_right.children;
for (var i = 0; i < oLis_1.length; i++) {
	oLis_1[i].index=i;
	oLis_1[i].onclick=function(){
		var a=this.index;
    for (var i = 0; i < oLis_2.length; i++) {
    	oLis_2[i].className=" ";
    	oLis_2[a].className="active-main_right_content";
    }
	}
}
$(".item-1_btn li a").click(function(){
  $(".item-1_btn li a").removeClass();
  $(this).addClass("active-btn")
})
var oConten_1=document.getElementById("content-1");
var oDivs=oConten_1.getElementsByTagName("div");
var oItem_1_btn=document.getElementById("item-1_btn");
var oLisBtn_1=oItem_1_btn.getElementsByTagName("li");
for (var i = 0; i < oLisBtn_1.length-1; i++) {
   oLisBtn_1[i].index=i;
   oLisBtn_1[i].onclick=function() {
     var a=this.index;
     for (var i = 0; i < oDivs.length; i++) {
      oDivs[i].className="";
      oDivs[a].className="active-item"
     }
   }
}
