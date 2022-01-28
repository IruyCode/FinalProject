import "./AboutUs.css";


/**
 * @Description : Formato dos Produtos no Home  
 * 
 * 
 */ 
const AboutUs = ({ imgUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imgUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>
      </div>
    </div>
  );
};

export default AboutUs;