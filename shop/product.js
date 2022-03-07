const params = new URL(location.href).searchParams;
const id = params.get("id");
let isLoading = false;

const loadProduct = () => {
  isLoading = true;
  const url = `https://fakestoreapi.com/products/${id}`;
  $.ajax(url).done(function (data) {
    isLoading = false;
    $(".panel-body").find("img").attr("src", data.image);
    $(".panel-body").find(".product-title").text(data.title);
    $(".panel-body").find(".product-description").text(data.description);
    $(".panel-body").find(".product-category").text(data.category);
    $(".panel-body")
      .find(".product-price")
      .text("$" + data.price);
    $(".panel-body")
      .find(".product-rating")
      .text(`Rating: ${data.rating.rate} stars`);
    $(".panel-body")
      .find(".product-rating-amount")
      .text(`${data.rating.count} people has rated this product`);
  });
};
loadProduct();

if (isLoading === false) {
  $(".loading-state").text("Loading...");
} else {
  $(".loading-state").text("");
}
