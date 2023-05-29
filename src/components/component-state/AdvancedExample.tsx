import React, { useState } from "react";

function AdvancedExample() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "san fransisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    //to make sure that our new state object is completely independent of the existing state object
    //because if we use only setCustomer({...customer},zipCode:9000) this is not good practice
    //if we create two customer objects they are going to reference the same customer object in memory.
    //it is not good

    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 119 },
    });
  };

  return (
    <div>
      {customer.address.zipCode}
      <h3>Advanced Example</h3>
      <button onClick={handleClick}>Set Customoer</button>
    </div>
  );
}

export default AdvancedExample;
