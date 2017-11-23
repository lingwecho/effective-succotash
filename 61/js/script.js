$(document).ready(function() {
    "use strict";


    /*=================== Responsive Header ===================*/  
    $(".info-btn").on("click",function(){
        $(".header-info").slideToggle();
    });

    $(".open-menu").on("click",function(){
        $(".responsive-links").toggleClass("slidein");
    });
    $("html").on("click",function(){
        $(".responsive-links").removeClass("slidein");
    });
    $(".open-menu,.responsive-links").on("click",function(e){
        e.stopPropagation();
    });
    
    $(".responsive-links ul li ul").parent().addClass("menu-item-has-children");
    $(".responsive-links ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().siblings().removeClass("active").find("ul").slideUp();
        $(this).next("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });


    /*=================== Menu Scroll Bar ===================*/  
    $(".responsive-links").enscroll({
        showOnHover: false,
        verticalTrackClass: 'track3',
        verticalHandleClass: 'handle3'
    });

    /*=================== LightBox ===================*/  
    var foo = $('.lightbox');
    foo.poptrox({
        usePopupCaption: true
    });


    /*=================== Accordion ===================*/
    $(".toggle").each(function(){
        $(this).find('.content').hide();
        $(this).find('h3:first').addClass('active').next().slideDown(500).parent().addClass("activate");
        $(this).find('h3').on("click", function() {
            if ($(this).next().is(':hidden')) {
                $(this).parent().parent().find("h3").removeClass('active').next().slideUp(500).parent().removeClass("activate");
                $(this).toggleClass('active').next().slideDown(500).parent().toggleClass("activate");
            }
        });
    });



    $(".hide-this").on("click",function(){
        $(this).parent().parent().slideUp();
        return false;
    });


    $("select").select2();

}); /*=== Document.Ready Ends Here ===*/




$(window).load(function() {
    $('.parallax').scrolly({bgParallax: true});
}); /*=== Document.Ready Ends Here ===*/
