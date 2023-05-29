import React, { useEffect, useState } from "react";

function UnderstandingTheEffectHook() {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products");
    setProducts(["clothing", "household"]);
  }, []);

  //   useEffect(() => {
  //     console.log("fetching products");
  //     setProducts(["clothing", "household"]);
  //   }, [category]);  to depend the hook upon category which was passed through props

  return (
    <div>
      <h2>UnderstandingTheEffectHook</h2>{" "}
    </div>
  );
}

export default UnderstandingTheEffectHook;
