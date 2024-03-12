import { useEffect, useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'

const Bottols = () => {
  const [bottols, setBottols] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("water-bottols.json");
      const data = await res.json();
      setBottols(data);
    };
    loadData();
  }, []);

  return (
    <>
      <h2>Memorable water bottols</h2>

      <div className="bottol-container">
        {bottols.map((bottol) => (
          <Bottol key={bottol.id} bottol={bottol} />
        ))}
      </div>
    </>
  );
};

export default Bottols;
