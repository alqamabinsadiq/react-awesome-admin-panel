import React, { Component } from 'react';
import { Button, Row, Form, Input } from 'antd';
// import { login } from '../../actions/user';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Notifications from '../Notification/NotificationsContainer';
// Logo
import Logo from '../../styles/images/logo.png';
const FormItem = Form.Item;

class LoginForm extends Component {
  state = {
    loginButtonLoading: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({
          loginButtonLoading: true
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginForm">
        <div className="loginLogo">
          <img src={Logo} alt="logo" />
          <span>Awesome Admin Panel</span>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please Enter Your Email'
                }
              ]
            })(<Input size='large' placeholder='Email' />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please Enter Your Password'
                }
              ]
            })(<Input size='large' type='password' placeholder='Password' />)}
          </FormItem>
          <Row>
            <Button type="primary" htmlType="submit" size="large" loading={this.state.loginButtonLoading}>
              Login
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}

export default connect(null)(Form.create()(LoginForm));