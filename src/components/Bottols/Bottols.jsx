import { useEffect, useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'

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


  const handelAddToCart = (bottol) => {
    setCartBottols([...cartBottols, bottol])
  }

  return (
    <>
      <h2>Memorable water bottols: {bottols.length}</h2>
      <h3>Cart: {cartBottols.length}</h3>

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
