import React, { Component } from 'react';
import { Button, Row, Form, Input } from 'antd';
import { login } from '../../actions/user';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Notifications from '../Notification/NotificationsContainer';
const FormItem = Form.Item;
// Icons
// import Logo from '../../styles/images/cambio.png';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginButtonLoading: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({
          loginButtonLoading: true
        });
        return new Promise((resolve) => {
          return this.props.login(values, resolve);
        }).
          then(() => {
            this.setState({
              loginButtonLoading: false
            });
          }).
          catch(() => {
            this.setState({
              loginButtonLoading: false
            });
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={"loginForm"}>
        <Notifications />
        <div className={"LoginLogo"}>
          <img src={Logo} />
          <span>Awesome Admin Panel</span>
        </div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
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
      </div>);
  }
}
export default connect(null, { login })(Form.create()(LoginForm));
