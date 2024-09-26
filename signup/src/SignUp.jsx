import React, { useState } from "react";
import "./App.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phone,
      //key value is same so only used the name
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <h1>Sign up</h1>
        <p>Please fill in this form to create an account</p>

        <label htmlFor="firstName">
          <b>First Name</b>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          required
          value={firstName}
          onChange={handleInputChange}
        />

        <label htmlFor="lastName">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          required
          value={lastName}
          onChange={handleInputChange}
        />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={handleInputChange}
        />

        <label htmlFor="phone">
          <b>Phone</b>
        </label>
        <input
          type="phone"
          name="phone"
          placeholder="Enter phone number"
          required
          value={phone}
          onChange={handleInputChange}
        />

        <p>
          By creating your account, you agree to our
          <a href="#" style={{ backgroundColor: "transparent" }}>
            terms & policy
          </a>
        </p>

        <div className="clearfix">
          <button className="btn" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
