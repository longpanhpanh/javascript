$(document).ready(function () {
  var index = 0;
  var endImg = $("img.slide:last").attr("idx");

  $("button").click(function () {
    index = $(this).attr("idx");

    $("img.slide").hide();
    $("img.slide").eq(index).show();
    $("button").removeClass("active");
    $("button").eq(index).addClass("active");
  });

  $("#next").click(function () {
    if (++index > endImg) {
      index = 0;
    }

    $("img.slide").hide();
    $("img.slide").eq(index).show();
    $("button").removeClass("active");
    $("button").eq(index).addClass("active");
  });

  $("#prev").click(function () {
    if (--index < 0) {
      index = endImg;
    }

    $("img.slide").hide();
    $("img.slide").eq(index).show();
    $("button").removeClass("active");
    $("button").eq(index).addClass("active");
  });
});
