$(".button").click(function() {
    $(".secondtitle").fadeIn();
    $(".1").fadeOut().delay(2000);
    $("body").css("background","#A67C5C").delay(3000);
    $(".girls").show();
    $(".button2").show();
    $(".photo").show();
});

$(".button2").click(function() {
    $(".girls").fadeOut().delay(2000);
    $("body").css("background","#452D0A").delay(3000);
    $(".2").fadeOut();
    $(".teens").fadeIn();
    $(".thirdtitle").fadeIn();
    $(".button3").show();

});

$(".button3").click(function() {
    $(".girls").fadeOut().delay(2000);
    $("body").css("background","#291403").delay(3000);
    $(".3").fadeOut();
    $(".adult").fadeIn();
    $(".fourthtitle").fadeIn();
    $(".button4").fadeIn();

});

$(".button4").click(function() {
    $("body").css("background","#b67d4e").delay(3000);
    $(".4").fadeOut();
    $(".fifthtitle").fadeIn();
    $(".solutions").fadeIn();
    $(".button5").fadeIn();
    $(".five").fadeIn();

});

$(".ending").hover(function() {
    $(".ending").attr("src","https://bangkok.unesco.org/sites/default/files/styles/theme_highlights/public/assets/article/Education/images/17facts-and-figures-image.png?itok=AWIGwXDX");
});

$(".button5").click(function() {
    $("body").css("background","#ae7d54").delay(3000);
    $(".5").fadeOut();
    $(".button5").fadeOut();
    $(".five").fadeIn();
    $(".meredith").fadeIn();

});

