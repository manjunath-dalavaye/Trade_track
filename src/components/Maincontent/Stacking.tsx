import React from "react";
import { Card, Typography } from "antd";
import "./Stacking.scss"; 

const { Title, Text } = Typography;

const Stacking: React.FC = () => (
  <div className="card-wrapper">
    <Card
      title={
        <div className="card-header">
          <Title className="header-title">Stacking</Title>
          <Text className="header-subtitle">You have 6 active stacking</Text>
        </div>
      }
    >
      <Text className="card-content1">Estimate Annual Reward</Text>
      <Text className="card-content2">9.3 % p.a</Text>

      <div className="card-contentt">
        <Text className="card-content3">Estimate Earning</Text>
        <Text className="card-content4">$10.56</Text>
      </div>
    </Card>
  </div>
);

export default Stacking;
