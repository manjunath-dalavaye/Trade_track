import { Col, Layout, Row } from "antd";
import Sidebar from "./components/SidebarComponent/Sidebar";
import Header from "./components/HeaderComponent/Header";
import "./styles/global.scss";
import MainPage from "./components/Maincontent/mainPage";

// import NewsSection from "./components/NewsSectionComponent/NewsSection";
// import NftSection from "./components/NFTComponent/NFT";
// import StackSection from "./components/StackComponent/StackSection";
// import Wallet from "./components/WalletComponent/Wallet";
// import { Route, Routes } from "react-router-dom";
import "./App.css"
// import Dashboard from "./components/Dashboard/Dashboard";
import PortfolioTable from "./components/TableComponent/TableComponent";
// import CombinedCard from "./components/Maincontent/CombineCard";
import CryptoCard from "./components/Maincontent/CryptoCard";
import Stacking from "./components/Maincontent/Stacking";
import NewsCard from "./components/Maincontent/NewsCard";


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
          <MainPage />
        </Col>
        <Col span={8}>
       

        </Col>
        <Col span={6}>

        </Col>
       </Row>
       <Row>
        <Col span={18}>
      <PortfolioTable />
        </Col>
        <Col span={6}>
           <CryptoCard/>
           <Stacking />
            
           <NewsCard/>
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



                                                         
        