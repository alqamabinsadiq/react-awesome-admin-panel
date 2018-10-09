import React from 'react';
import { Menu, Icon } from 'antd';

// Sider Menu Component
export default (props) =>
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    <Menu.Item key="dashboard">
      <Icon type="pie-chart" />
      <span>Dashboard</span>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="video-camera" />
      <span>nav 2</span>
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="upload" />
      <span>nav 3</span>
    </Menu.Item>
  </Menu>