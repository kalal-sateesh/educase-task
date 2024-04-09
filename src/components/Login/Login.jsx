import { useEffect, useState } from "react";
import styles from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const emailReqExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordReqExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = () => {
    if (!emailReqExp.test(userEmail)) {
      setEmailErrorMsg("Email Required*");
      setTimeout(() => {
        setEmailErrorMsg("");
      }, 3000);
      return;
    }
    if (!passwordReqExp.test(userPassword)) {
      setPasswordErrorMsg("Password Required*");
      setTimeout(() => {
        setPasswordErrorMsg("");
      }, 3000);
      return;
    }
    if (userEmail !== email && userPassword !== password) {
      alert("Please sign up to your account");
      navigate("/signup")
      return;
    }
    setTimeout(() => {
      setSuccess("Login success");
      setTimeout(() => {
        setSuccess("");
        navigate("/settings");
      }, 2000);
    }, 2000);
  };

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.body}>
          <div>
            <div className={styles.signinText}>
              <h2>Signin to your PopX account</h2>
            </div>
          </div>
          <div className={styles.lorem}>
            <p className={styles.loremText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className={styles.emailInputContainer}>
            <div className={styles.emailLable}>Email Address</div>
            <input
              className={styles.emailInput}
              placeholder="Enter email address"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <br></br>
            {emailErrorMsg && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {emailErrorMsg}
              </span>
            )}
          </div>
          <div className={styles.passwordInputContainer}>
            <div className={styles.emailLable}>Password</div>
            <input
              className={styles.emailInput}
              placeholder="Enter password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <br></br>
            {passwordErrorMsg && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {passwordErrorMsg}
              </span>
            )}
          </div>
          <br></br>
          {success && (
              <span style={{ fontSize: "14px", color: "green" }}>
                {success}
              </span>
            )}
          <button className={styles.loginButton} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
