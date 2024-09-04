


import PieChartCircle from "./PieChartCircle";
import ProgressBar from "./ProgressBar";


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
  const [activeKey, setActiveKey] = useState("today");
  const [data, setData] = useState<any>({});

  // Fetch data from db.json
  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setData(data.data)) // Adjust if your JSON structure is different
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
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
    <Row gutter={18} style={{ marginTop: 10, padding: 10 }}>
      <Col span={10}>
    <Row gutter={16} style={{ marginTop: 5, padding: 5 }}>
      <Col span={8}>
        <Card title="Your Balance">
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data[activeKey]}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={1}
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
      <Col span={8}>
        <PieChartCircle />
      </Col>
      <Col span={4}>
        <ProgressBar/>
      </Col>
    </Row>
  );
};

export default MainPage;
