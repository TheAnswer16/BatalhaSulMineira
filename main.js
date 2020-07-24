const botaoNav = $("#menu-open");
const mobileNav = $(".nav-mobile");
const closeNav = $(".nav-close");
const ulMobile = $(".ul-mobile");


botaoNav.on("click", function(){
    mobileNav.addClass("visible");
    ulMobile.addClass("visible-ul");
    $("header").addClass("nav-open");
    $("section").addClass("nav-open");

});

closeNav.on("click", function(){
    mobileNav.removeClass("visible");
    ulMobile.removeClass("visible-ul");
    $("header").removeClass("nav-open");
    $("section").removeClass("nav-open");
});

