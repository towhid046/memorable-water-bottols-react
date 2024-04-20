import PropTypes from "prop-types";
const Bottol = ({ bottol, handelAddToCart, handleRemoveBottol }) => {
  const { title, img, price, _id } = bottol;

  return (
    <div className="card  bg-base-100 border">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <strong>Price: ${price}</strong>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => handelAddToCart(bottol)}
          >
            Add to cart
          </button>
          <button
            onClick={() => handleRemoveBottol(_id)}
            className="btn btn-error"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Bottol.propTypes = {
  bottol: PropTypes.object.isRequired,
  handelAddToCart: PropTypes.func,
  handleRemoveBottol: PropTypes.func,
};

export default Bottol;
