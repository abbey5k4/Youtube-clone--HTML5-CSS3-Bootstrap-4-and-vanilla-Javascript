// close sidebar menu
$("#menu-close").click(function(e){
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// open sidebar menu
$("#menu-toggle").click(function(e){
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});