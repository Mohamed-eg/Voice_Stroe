import "./styles/cart.css";
import React from "react";
import { Link } from "react-router-dom";
const ShopingCard = (props) => {
  return (
    <div className="CardContaner">
      <div className="img">
        <Link
          to={`/componants/bagcon/prodactDetales/${props.prodects.id}`}
          // onClick={() => {
          //   props.choseOne(props.prodects);
          // }}
          prodectsId={props.prodects.id}>
          <img src={props.prodects.imgurl} alt="shoes" />
        </Link>
      </div>
      <div>
        <h2>{props.prodects.prand} Shoes</h2>
        <div className="SizeOfShoes">
          <h3>Size :</h3>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
          <span>45</span>
        </div>
        <div className="pris">
          <h1>{props.prodects.pris}E.L</h1>
        </div>
        <button
          onClick={() => {
            props.handelcount(props.prodects);
          }}>
          {`Add`}
          <i className="fa-solid fa-cart-plus"></i>
        </button>
        <h2>{`${props.prodects.num} items added`}</h2>
      </div>
    </div>
  );
};

export default ShopingCard;
