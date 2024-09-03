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
  
  const profileContent = (
    <>
   
      <Menu.Item key="editProfile" className='data'  icon={<EditOutlined />}>
        Edit Profile
      </Menu.Item>
      <Menu.Item key="viewProfile" icon={<EyeOutlined />}>
        View Profile
      </Menu.Item>
      <Menu.Item key="socialProfile" icon={<TeamOutlined />}>
        Social Profile
      </Menu.Item>
      <Menu.Item key="billing" icon={<DollarOutlined />}>
        Billing
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
  
  </>
    
  );

  const settingsContent = (
    <>
    
      <Menu.Item key="support" icon={<PhoneOutlined />}>
        Support
      </Menu.Item>
      <Menu.Item key="accountSettings" icon={<SettingOutlined />}>
        Account Settings
      </Menu.Item>
      <Menu.Item key="privacyCenter" icon={<LockOutlined />}>
        Privacy Center
      </Menu.Item>
      <Menu.Item key="feedback" icon={<MailOutlined />}>
        Feedback
      </Menu.Item>
      <Menu.Item key="history" icon={<HistoryOutlined />}>
        History
      </Menu.Item>
    
    </>
  );

  const menu = (
    <Menu>
      <Menu.Divider />
      <div style={{ padding: '16px', textAlign: 'center' ,width:'180px' }}>
        <Tabs
          defaultActiveKey="1"   
        >
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
