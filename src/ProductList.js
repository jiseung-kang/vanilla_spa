import { routeChange } from "./router.js";

export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement("ul");
  $target.appendChild($productList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    console.log(this.state);
  };

  this.render = () => {
    if (!this.state) {
      return;
    }
    $productList.innerHTML = `
    ${this.state
      .map(
        (product) => `<li class="Product" data-product-id="${product.id}">
            <img src="${product.imageUrl}" />
            <div class="Product__info">
              <div>${product.name}</div>
              <div>${product.price}</div>
            </div>
        </li>
    `
      )
      .join("")}`;
  };
  this.render();

  $productList.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { productId } = $li.dataset;

    if (productId) {
      routeChange(`/products/${productId}`);
    }
  });
}
