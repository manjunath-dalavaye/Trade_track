import React, { useState } from "react";
import { Progress, Card, Row, Col, Button } from "antd";
import "./ProgressBar.scss";

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(10);

  const handleExpandClick = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 5, 100));
  };
  console.log("Progress updated:", progress);

  return (
    <Card className="progress-card progress-bar-margin">
      <Row align="middle" gutter={16}>
        <Col span={16} className="progress-info">
          <div>
            <h3 className="progress-title">
              You have reached {progress}% of your daily deposit of $10,000
            </h3>
            <Button
              type="link"
              className="expand-limit-button"
              onClick={handleExpandClick}
            >
              Expand limit
            </Button>
          </div>
        </Col>
        <Col span={8} className="progress-circle">
          <div className="circle-container">
            <Progress
              type="circle"
              percent={progress}
              size={85} // match the container width
              strokeColor="var(--Crypto-purple, #453DE0)"
              format={() => (
                <div className="progress-format">
                  <span className="progress-percent">{progress}%</span>
                  <div className="progress-label">Limit</div>
                </div>
              )}
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ProgressBar;

