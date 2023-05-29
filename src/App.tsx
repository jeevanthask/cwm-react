import React from "react";
import ListGroup from "./components/ListGroup"; //referencing the index file
import Alert from "./components/Alert";
import CssinJSWithStyledComponents from "./components/styling/CssinJSWithStyledComponents";
import UpdatingObjects from "./components/component-state/UpdatingObjects";
import AdvancedExample from "./components/component-state/AdvancedExample";
import UpdateArrays from "./components/component-state/UpdateArrays";
import UpdatingArrayOfObjects from "./components/component-state/UpdatingArrayOfObjects";
import ImmerUsage from "./components/component-state/ImmerUsage";
import MyForm1 from "./components/Forms/MyForm1";
import UnderstandingTheEffectHook from "./components/ConnectingToBackend/UnderstandingTheEffectHook";
import MyForm2 from "./components/Forms/MyForm2";
import MyForm3 from "./components/Forms/MyForm3";

function App() {
  const items = ["san fransisco", "japan", "usa", "srilanka"];

  const showItem = () => {
    console.log("item selected");
  };

  return (
    <div>
      {/* <ListGroup items={items} heading="Nandika List" showItem={showItem} />
      <Alert>
        Hi <h3>bro</h3> nandika
      </Alert>
      <CssinJSWithStyledComponents />
      <UpdatingObjects />
      <AdvancedExample />
      <UpdateArrays />
      <UpdatingArrayOfObjects />
      <ImmerUsage /> */}

      {/* <MyForm1 />
      <UnderstandingTheEffectHook /> */}

      {/* <MyForm2 /> */}
      <MyForm3 />
      <br />
      <br />
    </div>
  );
}

export default App;
