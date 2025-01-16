import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const ProductCard = ({product}) => {
    return (
        <div>
           {/*Image */}
      <div>
          <Link to={"/"}>
              <img src={product.img} alt={'productImg'} className="h-[220px] w-[150px] object-cover rounded-md transition-all duration-300"/>
          </Link>
          {/*Info*/}
          <div className="p-3">
              <h4 className="bold-15 line-clamp-1 !py-0">{product.name}</h4>
              <div className="flexBetween pt-1">
                  <p className="h5">{product.category}</p>
                  <h5 className="h5">₦{product.price}.00</h5>
              </div>
          </div>
      </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard
