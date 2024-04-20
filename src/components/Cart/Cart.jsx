import PropTypes from "prop-types";
const Cart = ({ bottol, handelToRemoveItem }) => {
  return (
    <div>
      <li>
        {" "}
        <span>{bottol.title + ' $' + bottol.price + '  '} </span>
        <button onClick={() => handelToRemoveItem(bottol._id)}>Remove</button>
      </li>
    </div>
  );
};

Cart.propTypes = {
  bottol: PropTypes.object.isRequired,
  handelToRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
