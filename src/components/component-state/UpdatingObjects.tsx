import React, { useState } from "react";

function UpdatingObjects() {
  const [drink, setDrink] = useState({
    title: "",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: drink.price + 1,
    };
    setDrink(newDrink);

    //the folowing way will not work .it needs a brandnew object as above
    // drink.price = drink.price + 2;
    // setDrink(drink);
    // console.log(drink);
  };

  return (
    <div>
      <h2>Updating Objects</h2>
      {drink.price}
      <button onClick={handleClick}>Update Object</button>
    </div>
  );
}

export default UpdatingObjects;
