import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../styles/images/logo.png';
import { logout } from '../../actions/user';
import SiderMenu from '../../components/Menu/Menu';
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  static propTypes = {
    logout: PropTypes.func,
    children: PropTypes.any
  }

  state = {
    collapsed: false,
  };

  // show/hide sider.
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  // Main Layout Header
  static Header = ({ collapsed, toggle, logout }) => {
    return <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
      <Menu
        mode="horizontal"
      >
        <SubMenu title={<span><Icon type="user" />Admin</span>}>
          <MenuItemGroup title="Settings">
            <Menu.Item key="setting:2">Profile</Menu.Item>
            <Menu.Item key="setting:1" >
              <a href="" onClick={logout}>
                <Icon type="logout" theme="outlined" />
                Logout
                </a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    </Header>
  }

  // Main Footer
  static Footer = () => {
    return <Footer
      style={{ textAlign: 'center', fontFamily: 'Arimo', fontSize: '12px' }}
    >
      <b>Contact:</b> <a href="mailto:alqamabinsadiq@gmail.com">alqamabinsadiq@gmail.com</a> for issues.
  </Footer>
  }

  // Sider 
  static Sider = ({ collapsed }) => {
    return <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Admin Panel</span>
      </div>
      <SiderMenu />
    </Sider>
  }

  render() {
    const { children } = this.props;
    return (
      <div className="reactRoot">
        <Layout style={{ height: '100vh' }}>
          <App.Sider collapsed={this.state.collapsed} />
          <Layout>
            <App.Header collapsed={this.state.collapsed} toggle={this.toggle} logout={this.props.logout} />
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              {children}
            </Content>
            <App.Footer />
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default connect(null, { logout })(App);