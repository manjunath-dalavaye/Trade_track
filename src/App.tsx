import { Layout } from "antd";
import Sidebar from "./components/SidebarComponent/Sidebar";
import Header from "./components/HeaderComponent/Header";
import './styles/global.scss'
import MainPage from "./components/Maincontent/mainPage";
import TableComponent from "./components/TableComponent/TableComponent";
import NewsSection from "./components/NewsSectionComponent/NewsSection";
import NftSection from "./components/NFTComponent/NFT";
import StackSection from "./components/StackComponent/StackSection";
import Wallet from "./components/WalletComponent/Wallet";
import { Route, Routes } from "react-router-dom";



export default function App() {
  return (
    <Layout style={{ minHeight: "100vh", borderRadius: "0 12px 14px 8px" }}>
      <Layout.Sider width="14.0625rem">
        <Sidebar />
      </Layout.Sider>

      <Layout>
       <Layout.Header style={{background: "#FFF",padding:0}}>
       <Header />
      
       </Layout.Header>
         
       <TableComponent />
     
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




        