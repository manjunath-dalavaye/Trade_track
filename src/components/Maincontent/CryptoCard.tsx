

import React from "react";
import { Card, Typography,Button } from "antd";
import "./CryptoCard.scss";

const { Text } = Typography;

const CryptoCard: React.FC = () => (
<>
  <div className="crypto-card-wrapper">
    <Card className="crypto-card">
      <div className="crypto-card-content">
        <Text className="crypto-card-title">Bought Shiba Inu</Text>
          <Text className="crypto-card-avg">Avg</Text>
          <Text className="crypto-card-avg1"> $0.000037</Text>
       </div>
        <div className="crypto-card-body">
          <Text className="crypto-card-date">Yesterday</Text>
          <Text className="crypto-card-amount">22,013,222</Text>
          <Text className="crypto-card-shib">shib</Text>
        </div>
      
    </Card>
  </div>
   <div className="footer">
        <Text type="secondary" className="show-all">
          <Button type="text">Show all</Button>
        </Text>
      </div>
      </>
);

export default CryptoCard;
