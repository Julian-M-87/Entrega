let tarjeta_menu = $(".img-menu")
let titulos_tarjeta = $(".img-menu h5")
let menu_items = $(".menu-item")

console.log(titulos_tarjeta)

tarjeta_menu.each(function (index) {
    $(this).on("mouseenter", function () {
        titulos_tarjeta.eq(index).addClass("fs-2").removeClass("fs-4");
    });

    $(this).on("mouseleave", function () {
        titulos_tarjeta.eq(index).addClass("fs-4").removeClass("fs-2");
    });
});

menu_items.each(function () {
    $(this).on("mouseenter", function () {
        $(this).addClass("text-warning").removeClass("text-white")
    })
    $(this).on("mouseleave", function () {
        $(this).addClass("text-white").removeClass("text-warning")
    })

})