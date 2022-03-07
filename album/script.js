$(function () {
  const template = document.querySelector(".image-template").content;
  const $imageList = $(".image-list")[0];
  const url =
    "https://pixabay.com/api/?key=26008376-c95a9f11e7b6022ee73195771&per_page=21&page=";
  let page = 1;
  let searchQuery = "";
  let isLoading = false;
  $(".loading-state").css("color", "blue");

  const loadImage = (page, searchQuery) => {
    isLoading = true;
    $.ajax(url + page + searchQuery).done(function (data) {
      $.each(data.hits, function (index, item) {
        isLoading = false;
        const $item = $(template).clone(true);
        $item.find(".image-thumb").attr("src", item.largeImageURL);
        $item.find(".image-title").text(item.user);
        $item.find(".image-likes").text(`${item.likes} likes`);
        $item.appendTo($imageList);
      });
    });
  };

  loadImage(page, searchQuery);
  // Load image on scroll to bottom
  $(window).on("scroll", function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      page = page + 1;
      loadImage(page, searchQuery);
    }
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const inputVal = $("input").val();
    searchQuery = `&category=${inputVal}`;
    $(".image-list").empty();
    loadImage(page, searchQuery);
  });

  if (isLoading) {
    $(".loading-state").text("Loading...");
  } else {
    $(".loading-state").text("");
  }
});
