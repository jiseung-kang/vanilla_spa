import ProductListPage from "./ProductListPage.js";
import ProductDetailPage from "./ProductDetailPage.js";
import CartPage from "./CartPage.js";
import { init } from "./router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname === "/cart") {
      new CartPage({ $target }).render();
    } else {
      const productId = pathname.split("/")[2];
      new ProductDetailPage({ $target, productId }).render();
    }
  };
  init(this.route);

  this.route();
  window.addEventListener("popstate", this.route);
}
