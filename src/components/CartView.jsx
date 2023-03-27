import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { incrementQty, decrementQty, qtyCounter, handleRemove } from "../store/cartSlice";

function CartView() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [fullPrice, setFullPrice] = useState();
  const handleFullPrice = () => {
    const total = cart.reduce((sum, item) => {
      return sum + item.collectionPrice * item.qty;
    }, 0);
    setFullPrice((oldVal) => (oldVal = total));
  };
  const counter = useSelector((state) => state.cart.counter);
  useEffect(() => {
    handleFullPrice(), dispatch(qtyCounter());
  }, [cart]);

  return (
    <div>
      <div className="return-link">
        <Link to="/music-shop/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
      <div className="cart">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div className="cart_item" key={product.collectionId}>
              <div className="cart_item_data">
                <img src={product.artworkUrl100} alt="album image" />
                <p>Artist: {product.artistName}</p>
                <p>Album: {product.collectionName}</p>
                <p className="cart_qty">Quantity: {product.qty}</p>
                {product.collectionPrice > 0 ? (
                  <p className="cart_item-price">
                    Unit price: {product.collectionPrice} $
                  </p>
                ) : null}
              </div>
              <div className="cart_buttons">
                <button
                  className="btn btn-qty"
                  onClick={() => dispatch(incrementQty(product.collectionId))}
                >
                  +
                </button>
                <button
                  className="btn btn-qty"
                  onClick={() => dispatch(decrementQty(product.collectionId))}
                >
                  -
                </button>
                <div className=" btn btn-trash"
                onClick={() => dispatch(handleRemove(product.collectionId))}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no_result">The cart is empty</p>
        )}
      </div>
      <div className="cart_total">
        <p>Products quantity: {counter}</p>
        <p>Total to pay: {fullPrice > 0 ? fullPrice.toFixed(2) : 0} $</p>
        <Link className="btn" to="/music-shop/">
          Proceed to payment
        </Link>
      </div>
    </div>
  );
}

export default CartView;
