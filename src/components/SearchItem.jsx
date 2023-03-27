import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function SearchItem({ result }) {
  const dispatch = useDispatch();
  const handleBuy = (result) => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      dispatch(addToCart(result));
    }, 1000);
  };
  const [adding, setAdding] = useState(false);

  return (
    <div className="results_item">
      <div className="container">
        <p className="results_item_data">
          Artist:
          {result.artistName.length < 50
            ? result.artistName
            : result.artistName.substr(0, 50) + "..."}
        </p>
        <p className="results_item_data">
          Album:
          {result.collectionName.length < 75
            ? result.collectionName
            : result.collectionName.substr(0, 75) + "..."}
        </p>
        <p className="results_item_data">Genre:{result.primaryGenreName}</p>

        <p className="results_item_data">Tracks: {result.trackCount}</p>
      </div>
      <div className="container">
        <img src={result.artworkUrl100} />
        {result.collectionPrice > 0 ? (
          <p className="results_item_data">Price: {result.collectionPrice} $</p>
        ) : (
          <p className="results_item_data">Product temporary unavailable</p>
        )}
        {result.collectionPrice > 0 ? (
          <div className="results_buttons">
            {!adding ? 
            <button
              type="button"
              className="btn btn-buy"
              onClick={() => handleBuy(result)}
            >
              Buy
            </button>
            : <button className="btn btn-buy">
              <span>Adding</span>
              <span className="dot animate">.</span>
              <span className="dot animate">.</span>
              <span className="dot animate">.</span>
            </button> }
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchItem;
