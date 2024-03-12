import PropTypes from "prop-types";
import "./Bottol.css";

const Bottol = ({ bottol, handelAddToCart }) => {

  const { name, img, price } = bottol;
  return (
    <div className="bottol">
      <h2>{name}</h2>
      <img src={img} alt="Bottol Image" />
      <h5>Price: ${price}</h5>
      <button onClick={() => handelAddToCart(bottol)}>Add to cart</button>
    </div>
  );
};

Bottol.propTypes = {
  bottol: PropTypes.object.isRequired,
  handelAddToCart: PropTypes.func,
};

export default Bottol;
