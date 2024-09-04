import { Col, Layout, Row } from "antd";
import Sidebar from "./components/SidebarComponent/Sidebar";
import Header from "./components/HeaderComponent/Header";
import "./styles/global.scss";
import MainPage from "./components/Maincontent/mainPage";

import NewsSection from "./components/NewsSectionComponent/NewsSection";
import NftSection from "./components/NFTComponent/NFT";
import StackSection from "./components/StackComponent/StackSection";
import Wallet from "./components/WalletComponent/Wallet";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Dashboard from "./components/Dashboard/Dashboard";
import PortfolioTable from "./components/TableComponent/TableComponent";



export default function App() {
  return (
    <Layout style={{ minHeight: "100vh", borderRadius: "0 12px 14px 8px" }}>
      <Layout.Sider>
        <Sidebar />
      </Layout.Sider>

      <Layout>
       <Header />
       <Row>
        <Col span={10}>
        <div style={{backgroundColor:"blue", width:"36.375rem",height:"18.625rem", marginTop:"1.56rem",marginLeft:"3.54rem"}}>

          {/* <MainPage /> */}
        </div>
        </Col>
        <Col span={8}>
        <div style={{backgroundColor:"Red", width:"24.375rem",height:"18.625rem", marginTop:"1.56rem"}}>Chart Component</div>

        </Col>
        <Col span={6}>
        <div style={{backgroundColor:"Red", width:"23.1875rem",height:"9.5rem", marginTop:"1.56rem"}}>Chart Component</div>
        <div style={{backgroundColor:"Red", width:"23.1875rem",height:"7.25rem",marginTop:"1.37rem"}}>Chart Component</div>

        </Col>
       </Row>
       <Row>
        <Col span={18}>
      <PortfolioTable />
        </Col>
       </Row>
      </Layout>
    </Layout>
  );
}


       {/* <Routes>
          <Route path="/News" element={<NewsSection />} />
          <Route path="/NFT" element={<NftSection />} />
          <Route path="/Stack" element ={<StackSection />} />
          <Route path="/Wallet" element ={<Wallet />} />
        </Routes> */}




        