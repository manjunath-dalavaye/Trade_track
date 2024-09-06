
// import React from 'react';
// import { Dropdown, Menu, Tabs } from 'antd';
// import {
//   SettingOutlined,
//   LogoutOutlined,
//   EditOutlined,
//   EyeOutlined,
//   TeamOutlined,
//   DollarOutlined,
//   PhoneOutlined,
//   LockOutlined,
//   MailOutlined,
//   HistoryOutlined,
// } from '@ant-design/icons';

// const { TabPane } = Tabs;

// const ProfileDropdown: React.FC = () => {
//   const menuItemStyle: React.CSSProperties = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '8px 16px',
//   };

//   const profileContent = (
//     <div>
//     <Menu>
//       <Menu.Item key="editProfile" style={menuItemStyle} icon={<EditOutlined />}>
//         Edit Profile
//       </Menu.Item>
//       <Menu.Item key="viewProfile" style={menuItemStyle} icon={<EyeOutlined />}>
//         View Profile
//       </Menu.Item>
//       <Menu.Item key="socialProfile" style={menuItemStyle} icon={<TeamOutlined />}>
//         Social Profile
//       </Menu.Item>
//       <Menu.Item key="billing" style={menuItemStyle} icon={<DollarOutlined />}>
//         Billing
//       </Menu.Item>
//       <Menu.Item key="logout" style={menuItemStyle} icon={<LogoutOutlined />}>
//         Logout
//       </Menu.Item>
//       </Menu>
//     </div>
//   );

//   const settingsContent = (
//     <div>
//     <Menu>
//       <Menu.Item key="support" style={menuItemStyle} icon={<PhoneOutlined />}>
//         Support
//       </Menu.Item>
//       <Menu.Item key="accountSettings" style={menuItemStyle} icon={<SettingOutlined />}>
//         Account Settings
//       </Menu.Item>
//       <Menu.Item key="privacyCenter" style={menuItemStyle} icon={<LockOutlined />}>
//         Privacy Center
//       </Menu.Item>
//       <Menu.Item key="feedback" style={menuItemStyle} icon={<MailOutlined />}>
//         Feedback
//       </Menu.Item>
//       <Menu.Item key="history" style={menuItemStyle} icon={<HistoryOutlined />}>
//         History
//       </Menu.Item>
//       </Menu>
//     </div>
//   );

//   const menu = (
//     <Menu>
//       <Menu.Divider />
//       <div style={{ padding: '16px', textAlign: 'center', width: '200px' }}>
//         <Tabs defaultActiveKey="1">
//           <TabPane tab="Profile" key="1">
//             {profileContent}
//           </TabPane>
//           <TabPane tab="Settings" key="2">
//             {settingsContent}
//           </TabPane>
//         </Tabs>
//       </div>
//     </Menu>
//   );

//   return (
//     <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
//       <div>
//         <img src="/src/assets/ellipse-54.svg" style={{ width: 20, height: 20 }} alt="Profile" />
//       </div>
//     </Dropdown>
//   );
// };

// export default ProfileDropdown;


// import React from 'react';
// import { Dropdown, Menu, Tabs,  Typography } from 'antd';
// import {
//   LogoutOutlined,
//   EditOutlined,
//   EyeOutlined,
//   TeamOutlined,
//   DollarOutlined,
//   PhoneOutlined,
//   LockOutlined,
//   MailOutlined,
//   HistoryOutlined,
// } from '@ant-design/icons';

// const { TabPane } = Tabs;
// const { Text } = Typography;

// const ProfileDropdown: React.FC = () => {
//   // Style for menu items
//   const menuItemStyle: React.CSSProperties = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '10px 16px',
//   };

//   // Profile Tab Content
//   const profileContent = (
//     <Menu>
//       <Menu.Item key="editProfile" style={menuItemStyle}>
//         <EditOutlined />
//         <Text>Edit Profile</Text>
//       </Menu.Item>
//       <Menu.Item key="viewProfile" style={menuItemStyle}>
//         <EyeOutlined />
//         <Text>View Profile</Text>
//       </Menu.Item>
//       <Menu.Item key="socialProfile" style={menuItemStyle}>
//         <TeamOutlined />
//         <Text>Social Profile</Text>
//       </Menu.Item>
//       <Menu.Item key="billing" style={menuItemStyle}>
//         <DollarOutlined />
//         <Text>Billing</Text>
//       </Menu.Item>
//       <Menu.Item key="logout" style={menuItemStyle}>
//         <LogoutOutlined />
//         <Text>Logout</Text>
//       </Menu.Item>
//     </Menu>
//   );

//   // Settings Tab Content
//   const settingsContent = (
//     <Menu>
//       <Menu.Item key="support" style={menuItemStyle}>
//         <PhoneOutlined />
//         <Text>Support</Text>
//       </Menu.Item>
//       <Menu.Item key="accountSettings" style={menuItemStyle}>
//         <LockOutlined />
//         <Text>Account Settings</Text>
//       </Menu.Item>
//       <Menu.Item key="privacyCenter" style={menuItemStyle}>
//         <LockOutlined />
//         <Text>Privacy Center</Text>
//       </Menu.Item>
//       <Menu.Item key="feedback" style={menuItemStyle}>
//         <MailOutlined />
//         <Text>Feedback</Text>
//       </Menu.Item>
//       <Menu.Item key="history" style={menuItemStyle}>
//         <HistoryOutlined />
//         <Text>History</Text>
//       </Menu.Item>
//     </Menu>
//   );

//   // Tabs Menu with Profile and Settings, with solid background
//   const menu = (
//     <div style={{ padding: '16px', width: '240px', backgroundColor: '#fff' }}>
//       <Tabs defaultActiveKey="1" centered tabBarStyle={{ backgroundColor: '#f0f0f0' }}>
//         <TabPane tab="Profile" key="1">
//           {profileContent}
//         </TabPane>
//         <TabPane tab="Settings" key="2">
//           {settingsContent}
//         </TabPane>
//       </Tabs>
//     </div>
//   );

//   return (
//     <Dropdown overlay={menu} trigger={['click']} placement="bottomRight"> <div>
//       <img src="/src/assets/ellipse-54.svg" style={{ width: 20, height: 20 }} alt="Profile" />
//    </div>
//   </Dropdown>
//   );
// };

// export default ProfileDropdown;


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
