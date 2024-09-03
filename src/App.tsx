import { Layout } from "antd";
import Sidebar from "./components/SidebarComponent/Sidebar";
import Header from "./components/HeaderComponent/Header";
<<<<<<< HEAD
import './styles/global.scss'
import MainPage from "./components/Maincontent/mainPage";
=======
import "./styles/global.scss";
import NewsSection from "./components/NewsSectionComponent/NewsSection";
import { Route, Routes } from "react-router-dom";
import NftSection from "./components/NFTComponent/NFT";
import StackSection from "./components/StackComponent/StackSection";
import Wallet from "./components/WalletComponent/Wallet";
>>>>>>> cd9cb512f246f5deb2bbafdaeb029d2544509df8

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh", borderRadius: "0 12px 14px 8px" }}>
      <Layout.Sider width={225}>
        <Sidebar />
      </Layout.Sider>

      <Layout>
        <Layout.Header style={{ background: "#fff", padding: 0 }}>
          <Header />
        </Layout.Header>
<<<<<<< HEAD
       <MainPage />
        
=======
        <Routes>
          <Route path="/News" element={<NewsSection />} />
          <Route path="/NFT" element={<NftSection />} />
          <Route path="/Stack" element ={<StackSection />} />
          <Route path="/Wallet" element ={<Wallet />} />

        </Routes>

>>>>>>> cd9cb512f246f5deb2bbafdaeb029d2544509df8
      </Layout>
    </Layout>
  );
}
