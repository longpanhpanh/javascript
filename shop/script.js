$(function () {
  const productTemplate = document.querySelector(".product-template").content;
    const $productList = $(".product-list")[0];
    console.log(location.host.toString());
  const loadProduct = () => {
    const url = "https://fakestoreapi.com/products";
    $.ajax(url).done(function (data) {
      $.each(data, function (index, item) {
        const $item = $(productTemplate).clone(true);
        $item.find(".product-title").text(item.title);
        $item.find(".new-price").text(`$${item.price}`);
        $item.find(".rating-number").text(item.rating.rate);
        $item.find(".product-image").attr("src", item.image);
        $item.find(".product-item").on("click", function () {
          console.log("clicked");
          const url = new URL(
            `${location.origin.toString()}/shop/product-detail.html`
          );
          url.searchParams.set("id", item.id);
          location.href = url;
        });
        $item.appendTo($productList);
      });
    });
  };
  loadProduct();
});

