
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  BookOutlined,
  SecurityScanOutlined,
  WalletOutlined,
  SettingOutlined,
  AppstoreOutlined,
  CloudOutlined,
  BuildOutlined
} from '@ant-design/icons';
import { MenuItemGroupProps } from 'antd/es/menu';
import { Book } from '../../icons';

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const menuItems  = [
    {
      key: '1',
      icon: <Book/>,
      label: 'News',
      style: { marginTop: '70px', height: '50px', lineHeight: '50px', background: 'transparent', color: '#fff' },
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'NFT',
      style: { height: '50px', lineHeight: '50px', background: 'transparent', color: '#fff' },
    },
    {
      key: '3',
      icon: <BuildOutlined />,
      label: 'Stacking',
      style: { height: '50px', lineHeight: '50px', background: 'transparent', color: '#fff' },
    },
    {
      key: '4',
      icon: <WalletOutlined />,
      label: 'Wallets',
      style: { height: '50px', lineHeight: '50px', background: 'transparent', color: '#fff' },
    },
    {
      key: '5',
      icon: <SecurityScanOutlined />,
      label: 'Security',
      style: { height: '50px', lineHeight: '50px', background: 'transparent', color: '#fff' },
    },
    {
      key: '6',
      icon: <SettingOutlined />,
      label: 'Settings',
      style: { height: '50px', lineHeight: '50px', background: 'transparent', color: '#fff' },
    },
    {
      key: '7',
      icon: <CloudOutlined />,
      label: 'Cloud money',
      style: { height: '50px', lineHeight: '50px', background: 'transparent', color: '#fff' },
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
        width={225}
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
