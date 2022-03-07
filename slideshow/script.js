$(document).ready(function () {
  var stt = 0;
  var endImg = $("img.slide:last").attr("idx");

  $("button").click(function () {
    stt = $(this).attr("idx");

    $("img.slide").hide();
    $("img.slide").eq(stt).show();
    $("button").removeClass("active");
    $("button").eq(stt).addClass("active");
  });

  $("#next").click(function () {
    if (++stt > endImg) {
      stt = 0;
    }

    $("img.slide").hide();
    $("img.slide").eq(stt).show();
    $("button").removeClass("active");
    $("button").eq(stt).addClass("active");
  });

  $("#prev").click(function () {
    if (--stt < 0) {
      stt = endImg;
    }

    $("img.slide").hide();
    $("img.slide").eq(stt).show();
    $("button").removeClass("active");
    $("button").eq(stt).addClass("active");
  });
});
