import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  firstname: string;
  age: string;
}

function MyForm3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  //  formState: { errors }, this is nested destructuring in js

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
            {...register("firstname", { required: true, minLength: 3 })}
            type="text"
            className="form-control"
            id="firstname"
          />
          {errors.firstname?.type === "required" && (
            <p className="text-danger">the name field is required</p>
          )}
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
