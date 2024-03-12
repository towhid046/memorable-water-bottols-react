import { useEffect, useState } from "react";
import Bottol from "../Bottol/Bottol";
import { addItemToLS, getItemFromLS } from "../../utilities/utility";
import "./Bottols.css";

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
    setCartBottols([...cartBottols, bottol]);
    addItemToLS(bottol.id);
  };

  return (
    <>
      <h2>Memorable water bottols: {bottols.length}</h2>
      <h3>Cart: {cartBottols.length}</h3>
      <div>
        {
          cartBottols.map(bottol=> <li key={bottol.id}>{bottol.name +' $' + bottol.price}</li>)
        }
      </div>

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
