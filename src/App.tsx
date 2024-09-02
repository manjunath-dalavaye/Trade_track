import { Layout } from "antd";
import Sidebar from "./components/SidebarComponent/Sidebar";
import Header from "./components/HeaderComponent/Header";
import "./styles/global.scss";
import NewsSection from "./components/NewsSectionComponent/NewsSection";
import { Route, Routes } from "react-router-dom";
import NftSection from "./components/NFTComponent/NFT";
import StackSection from "./components/StackComponent/StackSection";
import Wallet from "./components/WalletComponent/Wallet";

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
        <Routes>
          <Route path="/News" element={<NewsSection />} />
          <Route path="/NFT" element={<NftSection />} />
          <Route path="/Stack" element ={<StackSection />} />
          <Route path="/Wallet" element ={<Wallet />} />

        </Routes>

      </Layout>
    </Layout>
  );
}
