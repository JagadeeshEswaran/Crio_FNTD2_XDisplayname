/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const DisplayName = () => {
  const [fullName, setName] = useState({
    fname: "",
    lname: "",
  });
  const [showName, setShowName] = useState(false);

  const handleDisplayName = (e) => {
    e.preventDefault();

    if (!fullName.fname || !fullName.lname) {
      alert("Please fillout both the name fields");
    } else {
      setShowName(true);
    }
  };

  const validateInput = (e) => {
    const regEx = /[^a-zA-Z]/;

    if (regEx.test(e.target.value) === true) {
      alert("Invalid Input");

      e.target.value = e.target.value.replace(/[^a-zA-Z]/, "");
    } else {
      const { name, value } = e.target;

      setName((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  return (
    <>
      <section>
        <h1>Full Name Display</h1>

        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleDisplayName}
        >
          <article>
            <label>First Name:</label>
            <input
              type="text"
              name="fname"
              id="fName"
              onChange={validateInput}
            />
          </article>
          <article>
            <label>Last Name:</label>
            <input
              type="text"
              name="lname"
              id="lName"
              onChange={validateInput}
            />
          </article>

          <article>
            <button type="submit">Submit</button>
          </article>
        </form>

        <p>{showName && `Full Name: ${fullName.fname} ${fullName.lname}`}</p>
      </section>
    </>
  );
};

export default DisplayName;
