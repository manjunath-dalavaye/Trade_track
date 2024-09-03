import React from "react";
<<<<<<< HEAD
import {  Layout  } from "antd";
import styles from "./Header.module.scss";
import SearchBar from './SearchBar'; 
// import { Center } from "@chakra-ui/react";
=======
import {  Layout,Button } from "antd";
import styles from "./Header.module.scss";


import ProfileDropdown from "./Profile";


>>>>>>> 0f546fe21c2c83b1def28ad418d089054c8f0c43

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
          <div className={styles["child-item2"]}>
            <SearchBar /></div>
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
         
          <img src="/src/assets/ellipse-54.svg"  style={{width:20, height:20}}/>
=======
          <Button
            type="link"
            onClick={() => {
              console.log("Click on the button");
            }}
          >
          <ProfileDropdown/>           
          </Button>
>>>>>>> 0f546fe21c2c83b1def28ad418d089054c8f0c43
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
