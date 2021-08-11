import React from "react";
import { useState } from "react";

const Forms = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    DOB: "",
    Address: "",
  });

  const handlechange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      state.firstname.trim() === "" ||
      state.lastname.trim() === "" ||
      state.DOB.trim() === "" ||
      state.Address.trim() === ""
    ) {
      return alert("All fields need to be filled");
    }

    console.log(state);
  };
  return (
    <>
      <div
        style={{
          width: 350,
          height: 350,
          margin: "auto",
          marginTop: 50,
          backgroundColor: "grey",
        }}
      >
        <form action="">
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            value={state.firstname}
            onChange={handlechange("firstname")}
          />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            value={state.lastname}
            onChange={handlechange("lastname")}
          />
          <input
            type="text"
            name="DOB"
            placeholder="DOB"
            value={state.DOB}
            onChange={handlechange("DOB")}
          />
          <input
            type="text"
            name="Address"
            placeholder="Address"
            value={state.Address}
            onChange={handlechange("Address")}
          />
          <input type="submit" value="submit form" onClick={onSubmit} />
        </form>
      </div>
    </>
  );
};

export default Forms;
