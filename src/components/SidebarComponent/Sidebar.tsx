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
  const iconAndLabelStyle = {
    color: '#FFF',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: '"DM Sans"',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  };

  const menuItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <BookOutlined style={{ color: '#FFF', marginLeft: '1.26rem' }} />,
      label: <span style={{ ...iconAndLabelStyle, marginLeft: '1.2rem' }}>News</span>,
      style: { marginTop: '4.13rem' },
    },
    {
      key: '2',
      icon: <AppstoreOutlined style={{ color: '#FFF', marginLeft: '1.26rem' }} />,
      label: <span style={{ ...iconAndLabelStyle, marginLeft: '1.2rem' }}>NFT</span>,
    },
    {
      key: '3',
      icon: <BuildOutlined style={{ color: '#FFF', marginLeft: '1.26rem' }} />,
      label: <span style={{ ...iconAndLabelStyle, marginLeft: '1.2rem' }}>Stacking</span>,
    },
    {
      key: '4',
      icon: <WalletOutlined style={{ color: '#FFF', marginLeft: '1.26rem' }} />,
      label: <span style={{ ...iconAndLabelStyle, marginLeft: '1.2rem' }}>Wallets</span>,
    },
    {
      key: '5',
      icon: <SecurityScanOutlined style={{ color: '#FFF', marginLeft: '1.26rem' }} />,
      label: <span style={{ ...iconAndLabelStyle, marginLeft: '1.2rem' }}>Security</span>,
    },
    {
      key: '6',
      icon: <SettingOutlined style={{ color: '#FFF', marginLeft: '1.26rem' }} />,
      label: <span style={{ ...iconAndLabelStyle, marginLeft: '1.2rem' }}>Settings</span>,
    },
    {
      key: '7',
      icon: <CloudOutlined style={{ color: '#FFF', marginLeft: '1.26rem' }} />,
      label: <span style={{ ...iconAndLabelStyle, marginLeft: '1.2rem' }}>Cloud money</span>,
      style: { position: 'absolute', bottom: '0px' },
    },
  ];

  const handleMenuClick = (event: any) => {
    const { key } = event;

    switch (key) {
      case '1':
        navigate('News');
        break;
      case '2':
        navigate('NFT');
        break;
      case '3':
        navigate('Stack');
        break;
      case '4':
        navigate('Wallet');
        break;
      default:
        navigate('Stack');
        break;
    }
  };

  return (
  
      <Sider
        style={{
          width: '14.0625rem',
          minHeight:"100vh",
          backgroundColor: '#4c4fff',
          position: 'relative',
          borderTopRightRadius: '15px',
          borderBottomRightRadius: '15px',
        }}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={['1']}
          style={{
            height: '100%',
            borderRight: 0,
            backgroundColor: '#4c4fff',
            color: '#fff',
          }}
          items={menuItems}
          onClick={handleMenuClick}
          selectedKeys={[]}
        />
      </Sider>
 
  );
};

export default Sidebar;
