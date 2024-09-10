
import Sidebar from "./components/SidebarComponent/Sidebar";
import Header from "./components/HeaderComponent/Header";
import "./styles/global.scss";
import MainPage from "./components/Maincontent/mainPage";
import PortfolioTable from "./components/TableComponent/TableComponent";
import PieChartCircle from "./components/Maincontent/PieChartCircle";
import ProgressBar from "./components/Maincontent/ProgressBar";
import TransactionCount from "./components/Maincontent/TransactionCount";
import CryptoCard from "./components/Maincontent/CryptoCard";
import Stacking from "./components/Maincontent/Stacking";
import NewsCard from "./components/Maincontent/NewsCard";




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
   // Add some padding to avoid content touching the edge
      }}>
        <Header />
        <div style={{ 
          margin:0,
          padding:0,
          display: 'flex', 
           // Distribute the elements properly
          flexWrap: 'wrap',  // Ensure responsive behavior if the screen is smaller
         // Some padding for breathing space
        }}>
          <MainPage />
          <PieChartCircle />
          <div>
            <ProgressBar />
            <TransactionCount />
          </div>
        
        </div>
        <div style={{ 
          display: 'flex', 
          marginTop: "2.62rem", 
          marginLeft:"1rem", 
        }}>
          <PortfolioTable />
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            // Some space between the table and the cards
          }}>
            <CryptoCard /> 
            <Stacking />
            <NewsCard/>
          </div>
        </div>
        
        {/* <FooterActions /> */}
      </div>
    </div>
  );
}






