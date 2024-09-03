import React, { useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Row, Col, Card, Tabs } from "antd";
import { useGetChartDataQuery } from "../../Services/ChartApi";
import  './mainPage.scss'

const { TabPane } = Tabs;

interface DataPoint {
  name: string;
  pv: number;
}

interface TimeSeriesData {
  today: DataPoint[];
  week: DataPoint[];
  month: DataPoint[];
  year: DataPoint[];
}

const MainPage: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("today");
  const { data, isError, isLoading, isSuccess } = useGetChartDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  if (!isSuccess || !data) {
    return <div>No data available.</div>;
  }

  const totalBalance = data.year.reduce(
    (acc: number, point: DataPoint) => acc + point.pv,
    0
  );

  return (
    <Row gutter={16} style={{ marginTop: 20, padding: 30 }}>
      <Col span={24}>
        <Card
          title={
            <div className="card-title">
              <span>
                Your Balance: <br />
                <strong>${totalBalance.toLocaleString()}</strong>
              </span>
              {/* <img src="../../assets/eye.svg" alt="Eye Icon" /> */}
            </div>
          }
          className="card-container"
          bodyStyle={{ padding: 20 }}
        >
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data[activeKey as keyof TimeSeriesData]}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <Tabs
            defaultActiveKey="today"
            onChange={(key) => setActiveKey(key)}
            tabBarStyle={{ marginBottom: 0 }}
            className="tabs-container"
          >
            <TabPane
              tab={
                <span className="tab-span">
                  Today
                </span>
              }
              key="today"
            />
            <TabPane
              tab={
                <span className="tab-span">
                  This Week
                </span>
              }
              key="week"
            />
            <TabPane
              tab={
                <span className="tab-span">
                  This Month
                </span>
              }
              key="month"
            />
            <TabPane
              tab={
                <span className="tab-span">
                  This Year
                </span>
              }
              key="year"
            />
          </Tabs>
        </Card>
      </Col>
    </Row>
  );
};

export default MainPage;
