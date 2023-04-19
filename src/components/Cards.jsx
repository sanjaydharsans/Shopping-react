import React from "react";
import styles from "../styles/Cards.module.css";
import './CardStyle.css';


const Cards = (props) => {
    const {product,handleonclick} = props;
    return(
        // <div className={styles.cardContainer}>
        // <div className={styles.imageContainer}><img src ={product.image} alt = "productimage"/></div>
        // <div>
        // <h3 style={{ textAlign:"center",color:"red"}}>{product.productName}</h3>
        // <p style={{ textAlign:"center"}}>{product.description}</p>
        // <p style={{ textAlign:"center"}}>Price: Rs{product.price}</p>
        // <button className={styles.addToCardBtn} value={JSON.stringify(product)} onClick={(event) => handleonclick(event.target.value)}>Add to cart</button>
        // </div>

        // </div>
        <div class="product-card">
		
         <div className="product-cardd"><img src ={product.image} alt = "productimage"/></div>
		<div className="product-details">
			<span class="product-catagory">{product.productName}</span>
			
			<p>{product.description}</p>
			<div class="product-bottom-details">
				<div class="product-price">Price: Rs{product.price}</div>
				<button className="button-13" value={JSON.stringify(product)} onClick={(event) => handleonclick(event.target.value)}>Add to cart</button>
			</div>
		</div>
	</div>
 
    );
}
export default Cards;