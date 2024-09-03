import React, { useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Row, Col, Card, Tabs } from "antd";
import PieChartCircle from "./PieChartCircle";
import ProgressBar from "./ProgressBar";



const { TabPane } = Tabs;

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

  return (
    <Row gutter={18} style={{ marginTop: 10, padding: 10 }}>
      <Col span={10}>
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
          <Tabs defaultActiveKey="today" onChange={(key) => setActiveKey(key)}>
            <TabPane tab="Today" key="today" />
            <TabPane tab="This Week" key="week" />
            <TabPane tab="This Month" key="month" />
            <TabPane tab="This Year" key="year" />
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
