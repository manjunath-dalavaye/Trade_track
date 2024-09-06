import React from 'react';
import { Row, Col, Card, Progress, Typography, List } from 'antd';
import MainPage from '../Maincontent/mainPage';
import PortfolioTable from '../TableComponent/TableComponent';

const { Title, Text } = Typography;

const Dashboard = () => {
  const data = [
    { name: 'Bitcoin', marketcap: '20B', balance: '$5,777', price: '0.000038', performance: '+5.1%', today: '+7.7%' },
    { name: 'Monero', marketcap: '20B', balance: '$5,777', price: '0.000038', performance: '+5.1%', today: '+7.7%' },
    { name: 'Somecoin', marketcap: '20B', balance: '$5,777', price: '0.000038', performance: '+5.1%', today: '+7.7%' },
    // Add more coins as necessary
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={16}>
        <Col span={8}>
          {/*  */}
        </Col>
        <Col span={8}>
        </Col>
        <Col span={8}>
          <Card>
            <Title level={4}>Deposit Limit</Title>
            <Progress type="circle" percent={70} />
            <Text>You have reached 70% of your daily deposit of $10,000</Text>
            <div style={{ marginTop: '16px' }}>
              <Text>Expand limit</Text>
            </div>
          </Card>
        </Col>
      </Row>
      
      <Row gutter={16} style={{ marginTop: '16px' }}>
        <Col span={16}>
      <PortfolioTable />
        </Col>
        {/* <Col span={8}>
          <Card>
            <Title level={4}>Total transactions</Title>
            <Text>17</Text>
            <Title level={4}>Bought Shiba Inu</Title>
            <Text>22,013.222 Shib</Text>
            <Text>Yesterday</Text>
          </Card>
          <Card style={{ marginTop: '16px' }}>
            <Title level={4}>Staking</Title>
            <Text>You have 6 active stacking</Text>
            <Text>Estimate Annual Reward: 9.3% p.a.</Text>
            <Text>Estimate Earnings: $10.56 USD</Text>
          </Card>
          <Card style={{ marginTop: '16px' }}>
            <Title level={4}>This week in crypto</Title>
            <div style={{ height: '100px', background: '#f0f2f5' }}>News Image</div>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default Dashboard;
