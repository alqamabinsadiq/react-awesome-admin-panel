import React, { Component } from 'react';
import { Button, Row, Form, Input } from 'antd';
// import { login } from '../../actions/user';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Notifications from '../Notification/Notification';
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

  static FormInput = ({ getFieldDecorator, placeholder, name, message, type }) => {
    return <FormItem hasFeedback>
      {getFieldDecorator(name, {
        rules: [
          {
            required: true,
            message: message
          }
        ]
      })(<Input size='large' placeholder={placeholder} type={type} />)}
    </FormItem>
  }

  // Form
  static Form = ({ form, loading, onSubmit }) => {
    const { getFieldDecorator } = form;

    return <Form onSubmit={onSubmit}>
      <LoginForm.FormInput getFieldDecorator={getFieldDecorator} message="Please Enter Your Email" name="username" placeholder="Email" type="text" />
      <LoginForm.FormInput getFieldDecorator={getFieldDecorator} message="Please Enter Your Password" name="password" placeholder="Password" type="password" />
      <Row>
        <Button type="primary" htmlType="submit" size="large" loading={loading}>
          Login
        </Button>
      </Row>
    </Form>
  }

  // logo and title
  static Logo = () => {
    return <div className="loginLogo">
      <img src={Logo} alt="logo" />
      <span>Awesome Admin Panel</span>
    </div>
  }

  render() {
    return (
      <div className="loginForm">
        {/* <Notifications /> */}
        <LoginForm.Logo />
        <LoginForm.Form
          form={this.props.form}
          loading={this.state.loginButtonLoading}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(null)(Form.create()(LoginForm));