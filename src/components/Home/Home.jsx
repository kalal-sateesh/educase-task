import styles from "../../components/Home/Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = ()=>{
    navigate("/signup")
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.body}>
          <div>
            <div className={styles.welcomeText}>
              <h2>Welcome to PopX</h2>
            </div>
          </div>
          <div className={styles.lorem}>
            <p className={styles.loremText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <button className={styles.signupButton} onClick={handleSignup}>Create Account</button>
          <br></br>
          <button className={styles.loginButton} onClick={handleLogin}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
