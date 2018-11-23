$("#search-criteria").on("keyup", function() {
    var g = $(this).val().toLowerCase();
    $(".fbbox .fix label").each(function() {
        var s = $(this).text().toLowerCase();
        $(this).closest('.fbbox')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
});



var ddmenuOptions=
{
    menuId: "ddmenu",
    linkIdToMenuHtml: "ddmenuLink",
    open: "onmouseover", // or "onclick"
    delay: 50,
    speed: 400,
    keysNav: true,
    singleOpen: false,
    license: "6c0l68"
};


var ddmenu = new Ddmenu(ddmenuOptions);


