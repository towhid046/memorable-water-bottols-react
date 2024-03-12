import  PropTypes  from "prop-types"
import './Bottol.css'
const Bottol = ({bottol}) => {
const {name, img, price} = bottol;
    return (
        <div className="bottol">
            <h2>{name}</h2> 
            <img src={img} alt="Bottol Image" />
            <h5>Price: ${price}</h5>
        </div>
    );
};

Bottol.propTypes = {
    bottol: PropTypes.array.isRequired
}

export default Bottol;