
import React from 'react';
import { Dropdown, Menu, Tabs } from 'antd';
import {
  SettingOutlined,
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

const ProfileDropdown: React.FC = () => {
  const menuItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
  };

  const profileContent = (
    <div>
    <Menu>
      <Menu.Item key="editProfile" style={menuItemStyle} icon={<EditOutlined />}>
        Edit Profile
      </Menu.Item>
      <Menu.Item key="viewProfile" style={menuItemStyle} icon={<EyeOutlined />}>
        View Profile
      </Menu.Item>
      <Menu.Item key="socialProfile" style={menuItemStyle} icon={<TeamOutlined />}>
        Social Profile
      </Menu.Item>
      <Menu.Item key="billing" style={menuItemStyle} icon={<DollarOutlined />}>
        Billing
      </Menu.Item>
      <Menu.Item key="logout" style={menuItemStyle} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
      </Menu>
    </div>
  );

  const settingsContent = (
    <div>
    <Menu>
      <Menu.Item key="support" style={menuItemStyle} icon={<PhoneOutlined />}>
        Support
      </Menu.Item>
      <Menu.Item key="accountSettings" style={menuItemStyle} icon={<SettingOutlined />}>
        Account Settings
      </Menu.Item>
      <Menu.Item key="privacyCenter" style={menuItemStyle} icon={<LockOutlined />}>
        Privacy Center
      </Menu.Item>
      <Menu.Item key="feedback" style={menuItemStyle} icon={<MailOutlined />}>
        Feedback
      </Menu.Item>
      <Menu.Item key="history" style={menuItemStyle} icon={<HistoryOutlined />}>
        History
      </Menu.Item>
      </Menu>
    </div>
  );

  const menu = (
    <Menu>
      <Menu.Divider />
      <div style={{ padding: '16px', textAlign: 'center', width: '200px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Profile" key="1">
            {profileContent}
          </TabPane>
          <TabPane tab="Settings" key="2">
            {settingsContent}
          </TabPane>
        </Tabs>
      </div>
    </Menu>
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






