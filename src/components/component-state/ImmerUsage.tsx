import React, { useState } from "react";
import produce from "immer";

function ImmerUsage() {
  const [bugs, setBugs] = useState([
    { id: 1, name: "bug1", status: "pending" },
    { id: 2, name: "bug2", status: "pending" },
    { id: 3, name: "bug3", status: "pending" },
  ]);

  const handleFirstBugFix = () => {
    // setBugs(
    //   bugs.map((bug) => (bug.id === 1 ? { ...bug, status: "fixed" } : bug))
    // );

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.status = "fixed";
        }
      })
    );
  };

  return (
    <div>
      <h2>Immer Usage</h2>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.id} - {bug.name} - {bug.status}
        </p>
      ))}
      <button onClick={handleFirstBugFix}>Fix First Bug</button>
    </div>
  );
}

export default ImmerUsage;
