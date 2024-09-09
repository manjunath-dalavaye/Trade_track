
import React from 'react';
import { Dropdown, Menu, Tabs, Typography } from 'antd';
import {
  LogoutOutlined,
  EditOutlined,
  EyeOutlined,
  TeamOutlined,
  DollarOutlined,
  PhoneOutlined,
  LockOutlined,
  MailOutlined,
  HistoryOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Text } = Typography;

const ProfileDropdown: React.FC = () => {
  // Style for menu items
  const menuItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
  };

  // Profile Tab Content
  const profileContent = (
    <Menu>
      <Menu.Item key="editProfile" style={menuItemStyle} icon={<EditOutlined />}>
        <Text>Edit Profile</Text>
      </Menu.Item>
      <Menu.Item key="viewProfile" style={menuItemStyle} icon={<EyeOutlined />}>
        <Text>View Profile</Text>
      </Menu.Item>
      <Menu.Item key="socialProfile" style={menuItemStyle} icon={<TeamOutlined />}>
        <Text>Social Profile</Text>
      </Menu.Item>
      <Menu.Item key="billing" style={menuItemStyle} icon={<DollarOutlined />}>
        <Text>Billing</Text>
      </Menu.Item>
      <Menu.Item key="logout" style={menuItemStyle} icon={<LogoutOutlined />}>
        <Text>Logout</Text>
      </Menu.Item>
    </Menu>
  );

  // Settings Tab Content
  const settingsContent = (
    <Menu>
      <Menu.Item key="support" style={menuItemStyle} icon={<PhoneOutlined />}>
        <Text>Support</Text>
      </Menu.Item>
      <Menu.Item key="accountSettings" style={menuItemStyle} icon={<LockOutlined />}>
        <Text>Account Settings</Text>
      </Menu.Item>
      <Menu.Item key="privacyCenter" style={menuItemStyle} icon={<LockOutlined />}>
        <Text>Privacy Center</Text>
      </Menu.Item>
      <Menu.Item key="feedback" style={menuItemStyle} icon={<MailOutlined />}>
        <Text>Feedback</Text>
      </Menu.Item>
      <Menu.Item key="history" style={menuItemStyle} icon={<HistoryOutlined />}>
        <Text>History</Text>
      </Menu.Item>
    </Menu>
  );

  // Tabs Menu with Profile and Settings
  const menu = (
    <div style={{ padding: '16px', width: '240px', backgroundColor: '#fff' }}>
      <Tabs defaultActiveKey="1" centered tabBarStyle={{ backgroundColor: '#f0f0f0' }}>
        <TabPane tab="Profile" key="1">
          {profileContent}
        </TabPane>
        <TabPane tab="Settings" key="2">
          {settingsContent}
        </TabPane>
      </Tabs>
    </div>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <div>
        <img src="/src/assets/ellipse-54.svg" style={{ width: 20, height: 20 }} alt="Profile" />
      </div>
    </Dropdown>
  );
};

export default ProfileDropdown;
