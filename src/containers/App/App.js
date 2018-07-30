import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Notifications from '../Notification/Notification';
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="reactRoot">
        <Notifications />
        <Layout style={{ height: '100vh' }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
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
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <Menu
                mode="horizontal"
              >
                <SubMenu title={<span><Icon type="user" />Admin</span>}>
                  <MenuItemGroup title="Settings">
                    <Menu.Item key="setting:1">Logout</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              </Menu>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              Content
          </Content>
            <Footer style={{ textAlign: 'center', fontFamily: 'Arimo', fontSize: '12px' }}>
              <b>Contact:</b> <a href="mailto:alqamabinsadiq@gmail.com">alqamabinsadiq@gmail.com</a>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default App;