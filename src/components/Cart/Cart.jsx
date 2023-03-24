import React, { useEffect, useState } from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducers";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    setSubTotal(0);
    products.map((item) =>
      setSubTotal((prev) => prev + item.quantity * item.price)
    );
  }, [products]);

  const stripePromise = loadStripe(
    "pk_test_51MXTNISIcKPik3mXNNNYLAT2T6HmRypd2BM66wvsequ1pcho7VYxmfS8nedWBpFShfTKn1xT5q7ZhFRUMswbbq9c00UVf7eXA5"
  );
  const handlePayment = async () => {
    const stripe = await stripePromise;
    const res = await makeRequest.post("/orders", {
      products,
    });
    await stripe.redirectToCheckout({ sessionId: res.data.stripeSession.id });
  };
  console.log(products);
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div key={item.id} className="item">
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 80)}</p>
            <div className="price">
              {item.quantity}*{item.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className="delete"
            onClick={() =>
              dispatch(
                removeItem({
                  id: item.id,
                })
              )
            }
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{subTotal}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
