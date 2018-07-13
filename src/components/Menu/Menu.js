import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import managerIcon from '../../styles/images/manager.svg';
class SliderMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
        onSelect={({ key }) => { this.props.onSelect(key); }}>
        <Menu.Item key="/dashboard">
          <Icon type="pie-chart" />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="/dashboard/explorer">
          <Icon type="book" />
          <span>Explorer</span>
        </Menu.Item>
        <Menu.Item key="/dashboard/property-tracker">
          <Icon type="clock-circle-o" />
          <span>Property Tracker</span>
        </Menu.Item>
        <Menu.Item key="/dashboard/users">
          <Icon type="team" />
          <span>Workers</span>
        </Menu.Item>
        <Menu.Item key="/dashboard/tasks">
          <Icon type="flag" />
          <span>Tasks</span>
        </Menu.Item>
        <Menu.Item key="/dashboard/supervisors">
          <img className="anticon anticon-flag" src={managerIcon} style={{ height: '14px' }} />
          <span>Supervisors</span>
        </Menu.Item>
        <Menu.Item key="/dashboard/worker-pay-rates">
          <Icon type="pay-circle" />
          <span>Worker Pay Rates</span>
        </Menu.Item>
      </Menu>
    );
  }
}

SliderMenu.propTypes = {
  onSelect: PropTypes.func
};

export default SliderMenu;