import React from "react";
import productOne from "../images/product.jpg";

export default function ProductPage() {
  return (
    <div className="productPage">
      <div className="productInformation">
        <div className="productImage">
          <img src={productOne} />
        </div>
        <div className="productText">
          <h3>Title</h3>
          <p>Rating</p>
          <h5>Price</h5>
          <h5>Description</h5>
          <div class="select-custom">
            Size
            <select name="size" id="size" class="form-control">
              <option value="#" selected="">
                Select a size
              </option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>

          <button>edit product</button>
          <button>delete product</button>
          <button>add to Cart</button>
        </div>
      </div>
    </div>
  );
}
