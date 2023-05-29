import React, { useState } from "react";

function UpdateArrays() {
  const [tags, setTags] = useState(["nandika", "jeevantha"]);

  const handleClick = () => {
    //Add
    setTags([...tags, "exciting"]);
  };

  const handleRemoveTag = () => {
    setTags(tags.filter((tag) => tag !== "nandika"));
  };

  return (
    <div>
      <h3>Updating arrays</h3>
      {tags.map((tag) => (
        <h5 key={tag}>{tag}</h5>
      ))}
      <button onClick={handleClick}>Click Tags</button>
      <button onClick={handleRemoveTag}>Remove tag</button>
    </div>
  );
}

export default UpdateArrays;
