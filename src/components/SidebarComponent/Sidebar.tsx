import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  SecurityScanOutlined,
  WalletOutlined,
  SettingOutlined,
  AppstoreOutlined,
  CloudOutlined,
  BuildOutlined,
  BookOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';


const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const menuItems:MenuProps['items']  = [
    {
      key: '1',
      icon: <BookOutlined/>,
      label: 'News',
      style: { fontSize:"1.63636rem", marginTop: '4.13rem', height: '1.4375rem', lineHeight: '1.4375rem', background: 'transparent', color: '#fff' },
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'NFT',
      style: {fontSize:"1.63636rem", marginTop: '4.18rem',  height: '1.4375rem', lineHeight: '1.4375rem', background: 'transparent', color: '#fff' },
    },
    {
      key: '3',
      icon: <BuildOutlined />,
      label: 'Stacking',
      style: { fontSize:"1.63636rem",marginTop: '1.87rem', height: '1.4375rem', lineHeight: '1.4375rem', background: 'transparent', color: '#fff' },
    },
    {
      key: '4',
      icon: <WalletOutlined />,
      label: 'Wallets',
      style: {fontSize:"1.63636rem", marginTop: '1.87rem', height: '1.4375rem', lineHeight: '1.4375rem', background: 'transparent', color: '#fff', },
    },
    {
      key: '5',
      icon: <SecurityScanOutlined />,
      label: 'Security',
      style: {fontSize:"1.63636rem", marginTop: '1.87rem',height: '1.4375rem', lineHeight: '1.4375rem', background: 'transparent', color: '#fff' },
    },
    {
      key: '6',
      icon: <SettingOutlined />,
      label: 'Settings',
      style: {fontSize:"1.63636rem", marginTop: '1.87rem', height: '1.4375rem', lineHeight: '1.4375rem', background: 'transparent', color: '#fff' },
    },
    {
      key: '7',
      icon: <CloudOutlined />,
      label: 'Cloud money',
      style: {fontSize:"1.63636rem",position:'absolute', height: '1.4375rem', lineHeight: '1.4375rem', background: 'transparent', color: '#fff', bottom:'0px' },
    },
  ];

  const handleMenuClick = (event:any) => {
    console.log("event :",event);
    const { key, keyPath, item } = event; 
    
    switch (key) {
      case '1':
        navigate("News")
        break;
      case '2':
        navigate("NFT")
        break;
      case '3':
          navigate("Stack")
          break;
      case '4':
            navigate("Wallet")
            break;

      default:
        navigate("Stack")
        break;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width=" 20.45455rem"
        style={{
          backgroundColor: '#4c4fff',
          position: 'relative',
          borderTopRightRadius: '15px',
          borderBottomRightRadius: '15px'
        }}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={['1']}
          style={{
            height: '100%',
            borderRight: 0,
            backgroundColor: '#4c4fff',
            color: '#fff'
          }}
          items={menuItems}
          onClick={handleMenuClick} 
        />
      </Sider>
    </Layout>
  );
};

export default Sidebar;
