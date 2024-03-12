import { useEffect, useState } from "react";
import Bottol from "../Bottol/Bottol";
import {
  addItemToLS,
  getItemFromLS,
  removeItemFromLs,
} from "../../utilities/utility";
import "./Bottols.css";
import Cart from "../Cart/Cart";

const Bottols = () => {
  const [bottols, setBottols] = useState([]);
  const [cartBottols, setCartBottols] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("water-bottols.json");
      const data = await res.json();
      setBottols(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    const existedItemsId = getItemFromLS("cart");
    let existedItems = [];
    existedItemsId.map((id) =>
      bottols.map((bottol) => {
        if (bottol.id === id) {
          existedItems = [...existedItems, bottol];
        }
      })
    );
    setCartBottols(existedItems);
  }, [bottols]);

  const handelAddToCart = (bottol) => {
    const targetedItem = cartBottols.find((bot) => bot.id === bottol.id);
    targetedItem
      ? alert("Item already added")
      : setCartBottols([...cartBottols, bottol]);
    addItemToLS(bottol.id);
  };

  // handel to remove item:
  const handelToRemoveItem = (id) => {
    // remove from ui
    const reminingBottols = cartBottols.filter(
      (cartBottol) => cartBottol.id !== id
    );
    setCartBottols(reminingBottols);
    // remove from lS:
    removeItemFromLs(id);
  };

  return (
    <>
      <h2>Memorable water bottols</h2>

      {/* card bottol */}
      <h3>Cart: {cartBottols.length}</h3>
      <div>
        {cartBottols.map((bottol) => (
          <Cart
            key={bottol.id}
            bottol={bottol}
            handelToRemoveItem={handelToRemoveItem}
          />
        ))}
      </div>

      {/* Available bottols */}
      <h2>Available Bottols : {bottols.length}</h2>
      <div className="bottol-container">
        {bottols.map((bottol) => (
          <Bottol
            key={bottol.id}
            bottol={bottol}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Bottols;
