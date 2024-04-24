import { useEffect, useState } from "react";
import Bottol from "../Bottol/Bottol";
import {
  addItemToLS,
  getItemFromLS,
  removeItemFromLs,
} from "../../utilities/utility";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Bottols = () => {
  const [cartBottols, setCartBottols] = useState([]);
  const initialBottols = useLoaderData();
  const [bottols, setBottols] = useState(initialBottols);

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
    const targetedItem = cartBottols.find((bot) => bot._id === bottol._id);
    targetedItem
      ? alert("Item already added")
      : setCartBottols([...cartBottols, bottol]);
    addItemToLS(bottol._id);
  };

  // handel to remove item:
  const handelToRemoveItem = (id) => {
    // remove from ui
    const reminingBottols = cartBottols.filter(
      (cartBottol) => cartBottol._id !== id
    );
    setCartBottols(reminingBottols);
    // remove from lS:
    removeItemFromLs(id);
  };

  const handleRemoveBottol = (id) => {
    fetch(`https://memorable-water-bottols-server.vercel.app/bottols/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Bottol Delete Success!");
          const reminingBottols = bottols.filter((bottol) => bottol._id !== id);
          setBottols(reminingBottols);
        }
      });
  };

  return (
    <main className="container mx-auto px-4 mb-12">
      <h2 className="text-center font-bold text-2xl pb-2 uppercase">
        Memorable water bottols
      </h2>
      <h2 className="text-center pb-10 font-bold text-xl">
        Available Bottols : {bottols.length}
      </h2>

      {/* card bottol */}
      <h3>Cart: {cartBottols.length}</h3>
      <div>
        {cartBottols.map((bottol) => (
          <Cart
            key={bottol._id}
            bottol={bottol}
            handelToRemoveItem={handelToRemoveItem}
          />
        ))}
      </div>

      {/* Available bottols */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bottols &&
          bottols.map((bottol) => (
            <Bottol
              key={bottol._id}
              bottol={bottol}
              handelAddToCart={handelAddToCart}
              handleRemoveBottol={handleRemoveBottol}
            />
          ))}
      </div>
    </main>
  );
};

export default Bottols;
