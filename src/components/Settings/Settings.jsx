import styles from "../Settings/Settings.module.css";
import profile from "../../../public/Ellipse 114.png";
import cam from "../../../public/Group 1585.png";
import { useEffect, useState } from "react";
const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.body}>
          <div className={styles.account}>
            <div className={styles.accountText}>Account Settings</div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.prifileBody}>
              <div className={styles.profilephotoContainer}>
                <div className={styles.profilephoto}>
                  <img
                    width="100%"
                    height="100%"
                    src={profile}
                    alt="Profile photo"
                  />
                </div>
                <div className={styles.camera}>
                  <img
                    width="100%"
                    height="100%"
                    src={cam}
                    alt="Profile photo"
                  />
                </div>
              </div>
              <div className={styles.name}>
                <h4>{name}</h4>
                <p style={{ fontSize: "14px", marginTop: "5px" }}>{email}</p>
              </div>
            </div>
          </div>
          <div className={styles.loremTextContainer}>
            <div className={styles.lorem}>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
