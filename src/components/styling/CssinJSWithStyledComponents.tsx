import React from "react";
import styles from "styled-components";

const P = styles.p`
    font-size:30px;
    color:red
`;

function CssinJSWithStyledComponents() {
  return (
    <div>
      CssinJSWithStyledComponents <P>Hi there</P>
    </div>
  );
}

export default CssinJSWithStyledComponents;
