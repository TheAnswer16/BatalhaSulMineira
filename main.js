const botaoNav = $("#menu-open");
const mobileNav = $(".nav-mobile");
const closeNav = $(".nav-close");


botaoNav.on("click", function(){
    mobileNav.show();
});

closeNav.on("click", function(){
    mobileNav.hide();
});

