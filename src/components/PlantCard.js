import React, {useState} from "react";

function PlantCard({plant}) {
  const {image, name, price} = plant;
  const [inStock, setinStock] = useState(true);

  function handleStockClick(event) {
    setinStock(inStock => !inStock);
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockClick}>In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
