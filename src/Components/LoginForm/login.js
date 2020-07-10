import React, { useEffect } from "react";
import InputField from "../Generic/inputField";
import { useHistory } from "react-router-dom";

export default function AppLogin(props) {
  let history = useHistory();
  let inputObj = { name: "", email: "", password: "" };
  useEffect(() => {
    let cookie = document.cookie.split("=")[1];
    if (cookie) {
      let jsonObj = JSON.parse(cookie);
      if (jsonObj.name && jsonObj.email && jsonObj.password)
        history.push("/home");
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/home");
    document.cookie = `cookie1=${JSON.stringify(inputObj)}; path=/`;
    props.isAuth();
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-title text-center">Login</h2>
            <div className="card-body py-md-4">
              <form name="userRegistrationForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <InputField
                    required
                    regxPattern="[A-Za-z0-9]+$"
                    type="text"
                    title="Name: Alphanumeric, min=8 max=50 characters"
                    className="form-control"
                    minLength={8}
                    maxLength={50}
                    id="name"
                    placeholder="Name"
                    getValue={(value) => {
                      inputObj.name = value;
                    }}
                  />
                </div>
                <div className="form-group">
                  <InputField
                    required
                    regxPattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                    type="email"
                    title="Email: example@example.com"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    getValue={(value) => {
                      inputObj.email = value;
                    }}
                  />
                </div>
                <div className="form-group">
                  <InputField
                    required
                    type="password"
                    title="Password:&nbsp;Alphanumeric&#010;1)&nbsp;Must contain at least one number&#010;2)&nbsp;Must contain at least one special character&#010;3)&nbsp;Minimum of 8 and Maximum of 50 characters"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    regxPattern="(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,50}"
                    getValue={(value) => {
                      inputObj.password = value;
                    }}
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button className="btn btn-primary">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
