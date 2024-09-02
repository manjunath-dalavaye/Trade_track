import { Layout } from "antd";
import Sidebar from "./components/SidebarComponent/Sidebar";
import Header from "./components/HeaderComponent/Header";
import './styles/global.scss'

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh", borderRadius:"0 12px 14px 8px" }}>
      <Layout.Sider width={225}>
        <Sidebar />
      </Layout.Sider>

      <Layout>
        <Layout.Header style={{ background: "#fff", padding: 0 }}>
          <Header />
        </Layout.Header>

        
      </Layout>
    </Layout>
  );
}
