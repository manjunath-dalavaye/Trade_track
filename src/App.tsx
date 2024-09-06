
import Sidebar from "./components/SidebarComponent/Sidebar";
import Header from "./components/HeaderComponent/Header";
import "./styles/global.scss";
import MainPage from "./components/Maincontent/mainPage";
import PortfolioTable from "./components/TableComponent/TableComponent";
import PieChartCircle from "./components/Maincontent/PieChartCircle";
import ProgressBar from "./components/Maincontent/ProgressBar";
import TransactionCount from "./components/Maincontent/TransactionCount";




export default function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      width: '100vw', 
      overflow: 'hidden'  // Ensure no horizontal overflow
    }}>
      <Sidebar />
      <div style={{ 
        flex: 1, 
        background: '#f8f9fd', 
        overflowX: 'hidden',  // Prevent horizontal overflow in the main content
        boxSizing: 'border-box',  // Ensure padding doesn't affect total width
        paddingRight: '16px'  // Add some padding to avoid content touching the edge
      }}>
        <Header />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',  // Distribute the elements properly
          flexWrap: 'wrap',  // Ensure responsive behavior if the screen is smaller
          padding: '16px'  // Some padding for breathing space
        }}>
          <MainPage />
          <PieChartCircle />
          <div>
            <ProgressBar />
            <TransactionCount />
          </div>
        </div>
        <div style={{ marginTop: "2.62rem",marginLeft:"1rem" }}>
          <PortfolioTable />
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '20px' 
        }}>
          {/* <StackingCard />
          <NewsCard /> */}
        </div>
        {/* <FooterActions /> */}
      </div>
    </div>
  );
}


