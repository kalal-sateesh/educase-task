import { useState } from "react";
import styles from "../Signup/Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cName, setCName] = useState("");
  const [agency, setAgency] = useState("");
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [agencyErrorMsg, setAgencyErrorMsg] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const emailReqExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordReqExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phoneReqExp = /^[0-9]{10}$/;

  const handleSignup = () => {
    if (!name) {
      setNameErrorMsg("Full name Required*");
      setTimeout(() => {
        setNameErrorMsg("");
      }, 3000);
      return;
    }
    if (!phoneReqExp.test(phone)) {
      setPhoneErrorMsg("Phone number Required*");
      setTimeout(() => {
        setPhoneErrorMsg("");
      }, 3000);
      return;
    }
    if (!emailReqExp.test(email)) {
      setEmailErrorMsg("Email Required*");
      setTimeout(() => {
        setEmailErrorMsg("");
      }, 3000);
      return;
    }
    if (!passwordReqExp.test(password)) {
      setPasswordErrorMsg("Password Required*");
      setTimeout(() => {
        setPasswordErrorMsg("");
      }, 3000);
      return;
    }
    if (!agency) {
      setAgencyErrorMsg("Please select an agency*");
      setTimeout(() => {
        setAgencyErrorMsg("");
      }, 3000);
      return;
    }
    setTimeout(() => {
      setSuccess("Signup success");
      localStorage.setItem("name", name);
      localStorage.setItem("phone", phone);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("cName", cName);
      localStorage.setItem("agency", agency);
      setTimeout(() => {
        setSuccess("");
        navigate("/login");
      }, 2000);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.body}>
          <div>
            <div className={styles.signinText}>
              <h2>Create your PopX account</h2>
            </div>
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.lable}>
              Full Name<span style={{ color: "red" }}>*</span>
            </div>
            <input
              className={styles.input}
              placeholder="Enter full name"
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            {nameErrorMsg && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {nameErrorMsg}
              </span>
            )}
          </div>

          <div className={styles.inputContainer2}>
            <div className={styles.lable}>
              Phone number<span style={{ color: "red" }}>*</span>
            </div>
            <input
              className={styles.input}
              placeholder="Enter phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br></br>
            {phoneErrorMsg && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {phoneErrorMsg}
              </span>
            )}
          </div>

          <div className={styles.inputContainer2}>
            <div className={styles.lable}>
              Email address<span style={{ color: "red" }}>*</span>
            </div>
            <input
              className={styles.input}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            {emailErrorMsg && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {emailErrorMsg}
              </span>
            )}
          </div>

          <div className={styles.inputContainer2}>
            <div className={styles.lable}>
              Password<span style={{ color: "red" }}>*</span>
            </div>
            <input
              className={styles.input}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            {passwordErrorMsg && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {passwordErrorMsg}
              </span>
            )}
          </div>

          <div className={styles.inputContainer2}>
            <div className={styles.lable}>Company name</div>
            <input
              className={styles.input}
              placeholder="Enter company name"
              onChange={(e) => setCName(e.target.value)}
            />
          </div>

          <div className={styles.agency}>
            <div className={styles.agencyText}>
              Are you an Agency?<span style={{ color: "red" }}>*</span>
            </div>
            <div className={styles.radioInput}>
              <input
                type="radio"
                name="yesno"
                value="Yes"
                style={{ width: "17px", height: "17px", cursor: "pointer" }}
                onChange={(e) => setAgency(e.target.value)}
              />
              <label style={{ marginLeft: "5px" }}>Yes</label>
              <input
                type="radio"
                name="yesno"
                value="No"
                style={{
                  width: "17px",
                  height: "17px",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
                onChange={(e) => setAgency(e.target.value)}
              />
              <label style={{ marginLeft: "5px" }}>No</label>
              <br></br>
            </div>
            {agencyErrorMsg && (
              <div style={{ fontSize: "14px", color: "red", width: "150%" }}>
                {agencyErrorMsg}
              </div>
            )}
            {success && (
              <div style={{ fontSize: "14px", color: "green", width: "150%" }}>
                {success}
              </div>
            )}
          </div>
          <button className={styles.createButton} onClick={handleSignup}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
