import React from 'react';
import { Layout, Menu } from 'antd';
import {
  BookOutlined,
  SecurityScanOutlined,
  WalletOutlined,
  SettingOutlined,
  AppstoreOutlined,
  CloudOutlined,
  BuildOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const menuItems = [
    {
      key: '1',
      icon: <BookOutlined />,
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
        />
      </Sider>
    </Layout>
  );
};

export default Sidebar;
