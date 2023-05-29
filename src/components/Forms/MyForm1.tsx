import React, { FormEvent, useRef } from "react";

function MyForm1() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: "" };

  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = ageRef.current.value;
    }

    console.log(person);
  };

  return (
    <>
      <h2>Enter Details</h2>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input ref={nameRef} type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input ref={ageRef} type="text" className="form-control" id="age" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default MyForm1;
