import React, { useState } from "react";

function ProductCard() {
  const [quantity, setQuantity] = useState(1);

  const unitPrice = 29.99;
  const subtotal = quantity * unitPrice;
  const discount = quantity >= 5 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
      <h2>Product Card</h2>

      <p>Unit Price: <b>${unitPrice}</b></p>

      <button onClick={decreaseQty}>-</button>
      <span style={{ margin: "0 10px" }}>Quantity: {quantity}</span>
      <button onClick={increaseQty}>+</button>

      {}
      {quantity >= 5 && (
        <p style={{ color: "green", marginTop: "10px" }}>
          🎉 Bulk Discount Applied (10% OFF)
        </p>
      )}

      <hr />

      <p>Subtotal: ${subtotal.toFixed(2)}</p>

      {quantity >= 5 && (
        <p>Discount: -${discount.toFixed(2)}</p>
      )}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default ProductCard;
