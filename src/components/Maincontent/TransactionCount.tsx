import React from "react";
import { Card, Button } from "antd";
import "./TransactionCount.scss";

const TransactionCount: React.FC = () => {
  const handleClick = () => {
    // Define the action that should happen when the button is clicked
    console.log("Arrow button clicked!");
  };

  return (
    <Card className="transaction-count-card">
      <div className="icon-button-container">
        <Button
          type="primary"
          shape="circle"
          onClick={handleClick}
          className="icon-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right rotated-arrow"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
      <div className="transaction-details">
        <div className="transaction-count-text">
          Total transactions
          <br /> This week
        </div>
      </div>
      <div className="transaction-count-number">17</div>
    </Card>
  );
};

export default TransactionCount;
