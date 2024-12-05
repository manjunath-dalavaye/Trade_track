
import React from 'react';
import { Card,  Typography } from 'antd';
import './Stacking.scss';

const { Text } = Typography;

const App: React.FC = () => (
  <div className="stacking-container">
    <Card
      size="small"
      title={
        <div className="card-title">
          <div className="title-left">Stacking</div>
          <Text className="subtitle">You have 6 active stacking</Text>
        </div>
      }
    >
      <div className="card-content-row">
        <Text className="card-content1">Estimate Annual Reward</Text>
        <Text className="card-content2">9.3 % p.a.</Text>
      </div>

      <div className="card-content-row">
        <Text className="card-content3">Estimate Earnings</Text>
        <Text className="card-content4">$10.56 USD</Text>
      </div>
    </Card>
  </div>
);

export default App;