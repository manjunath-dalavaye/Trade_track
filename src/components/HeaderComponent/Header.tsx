import React from "react";
import {  Layout } from "antd";
import styles from "./Header.module.scss";
<<<<<<< HEAD
// import { Center } from "@chakra-ui/react";
=======
<<<<<<< HEAD
import ProfileDropdown from "./Profile";
=======
>>>>>>> ceffce4c16cdccdd099ff90a311c1329abe23a54

>>>>>>> cd9cb512f246f5deb2bbafdaeb029d2544509df8

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntHeader className={styles.header}>
      <div className={styles.nav}>
        <div className={`${styles["nav-item1"]} ${styles.active}`}>
          My profile
        </div>
        <div className={styles["nav-item2"]}>
          <div className={styles["child-item1"]}>Crypto assets</div>
          <div className={styles["vertical-line"]}></div>
          <div className={styles["child-item2"]}>Stocks</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div className={styles["wallet-connect"]}>
          <img src="/src/assets/icon-credit-card.svg" alt="Credit Card Icon" />
          <span>Connect a wallet</span>
        </div>
        <div
          className="ellipse"
          style={{
            width: 43,
            height: 43,
            background: "#E1E5F8",
            borderRadius: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
<<<<<<< HEAD
          <Button
            type="link"
            onClick={() => {
              console.log("Click on the button");
            }}
          >
          <ProfileDropdown/>           
          </Button>
=======
         
          <img src="/src/assets/ellipse-54.svg"  style={{width:20, height:20}}/>
>>>>>>> ceffce4c16cdccdd099ff90a311c1329abe23a54
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
