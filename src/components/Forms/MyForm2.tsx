import React, { FormEvent, useState } from "react";

function MyForm2() {
  const [person, setPerson] = useState({ name: "", age: 0 });

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <>
      <h2>Enter Details</h2>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          {/* the state of input is entirely controlled by the react.so this is called a controlled component */}
          <input
            type="text"
            className="form-control"
            value={person.name}
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            id="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="text" className="form-control" id="age" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default MyForm2;
