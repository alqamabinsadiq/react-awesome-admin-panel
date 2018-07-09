import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import SliderMenu from '../../components/Menu/Menu';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../../actions/user';
import Notifications from '../Notification/NotificationsContainer';
import ModalContainer from '../Modal';
import 'antd/dist/antd.css';
// Components
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// Icons
import Logo from '../../styles/images/cambio.png';
// Styles
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onMenuSelect = this._onMenuSelect.bind(this);
    this.state = {
      collapsed: false,
    };
  }

  _onMenuSelect(key) {
    this.props.push(key);
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div className="reactRoot">
        <Notifications />
        <ModalContainer />
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            trigger
          >
            <div className="logo">
              <img src={Logo} />
              <span>Cambio</span>
            </div>
            <SliderMenu onSelect={this.onMenuSelect} />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '1em' }} >
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => { this.toggle(); }}
              />
              <div>
                <Menu className="header-menu" mode="horizontal" >
                  <SubMenu
                    style={{
                      float: 'right'
                    }}
                    title={<span> <Icon type="user" />Admin </span>}>
                    <MenuItemGroup title="Settings">
                      <Menu.Item key="logout">
                        <a onClick={() => { this.props.logout(); }}>Sign Out</a>
                      </Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                </Menu>
              </div>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ padding: 24, minHeight: 360 }}>
                <div className="base">
                  {this.props.children}
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Contact <a href="mailto:everest@rockvillesolutions.com">everest@rockvillesolutions.com</a> for issues.
          </Footer>
          </Layout>
        </Layout>

      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  logout: PropTypes.func,
  push: PropTypes.func
};

export default connect(null, { push, logout })(App);
