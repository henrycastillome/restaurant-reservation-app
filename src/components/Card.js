

const Cards = ({ title, description, imageSrc, price }) => {
  return (
   
    <div className="product-card">
		
		<div className="product-tumb">
			<img src={imageSrc} alt={title}/>
		</div>
		<div className="product-details">
			
			<h4>{title}</h4>
			<p>{description}</p>
			<div className="product-bottom-details">
				<div className="product-price">$ {price}</div>
				
			</div>
		</div>
	</div>
  
  );
};

export default Cards;
