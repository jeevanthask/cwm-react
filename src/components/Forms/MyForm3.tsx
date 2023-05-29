import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";

function MyForm3() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <h2>MyForm3</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            {...register("firstname")}
            type="text"
            className="form-control"
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
    </div>
  );
}

export default MyForm3;
