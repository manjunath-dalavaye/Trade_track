import React from "react";
import {  Button,Layout } from "antd";
import styles from "./Header.module.scss";
import SearchBar from './SearchBar'; 
import ProfileDropdown from "./Profile";
// import { Center } from "@chakra-ui/react";

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
            <SearchBar />
          </div>
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
       
        
          <Button
            type="link"
            onClick={() => {
              console.log("Click on the button");
            }}
          >
          <ProfileDropdown/>           
          </Button>
          {/* <img src="/src/assets/ellipse-54.svg"  style={{width:20, height:20}}/> */}
         
          <img src="/src/assets/ellipse-54.svg"  style={{width:20, height:20}}/>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
