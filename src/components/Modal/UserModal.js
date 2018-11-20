import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import {
  Checkbox,
  Form,
  Input,
  Modal,
  LocaleProvider,
  Spin,
  // Select
} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
// const Option = Select.Option;

// Layout
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
class modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      loading: 0,
      spinner: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.input.focus();
    });
  }

  handleOk() {
    this.setState({
      clicked: true,
      spinner: true
    });
    this.props.form.validateFields((error, values) => {
      if (error) {
        this.setState({
          clicked: false,
          spinner: false
        });
        return;
      }
      if (!error) {
        console.log('ok', values);
        // server validate
        const reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
        if ((!isNaN(values.phoneNumber) && reg.test(values.phoneNumber)) || values.phoneNumber === '' || values.phoneNumber === '-') {
          let data = {};

          data = {
            ...this.props.form.getFieldsValue(),
            _id: this.props.item ? this.props.item._id : null
          };

          if (values.firstName.charAt(0) === ' ') {
            this.props.form.setFields({
              firstName: {
                value: values.firstName,
                errors: [new Error('First letter should not be a space.')],
              },
            });
            this.setState({
              clicked: false,
              spinner: false
            });
          } else if (values.lastName.charAt(0) === ' ') {
            this.props.form.setFields({
              lastName: {
                value: values.lastName,
                errors: [new Error('First letter should not be a space.')],
              },
            });
            this.setState({
              clicked: false,
              spinner: false
            });
          }
          else {
            this.props.onOk({ ...data, username: data.username.toLowerCase() });
            this.props.form.resetFields();
            console.log('error', error, values);
          }
        }
        else {
          this.props.form.setFields({
            phoneNumber: {
              value: values.phoneNumber,
              errors: [new Error('Please enter valid phone number')],
            },
          });
          if (values.firstName.charAt(0) === ' ') {
            this.props.form.setFields({
              firstName: {
                value: values.firstName,
                errors: [new Error('First letter should not be a space.')],
              },
            });
          }
          if (values.lastName.charAt(0) === ' ') {
            this.props.form.setFields({
              lastName: {
                value: values.lastName,
                errors: [new Error('First letter should not be a space.')],
              },
            });

          }
          this.setState({
            clicked: false,
            spinner: false
          });
        }
      }
    });
  }

  handleCancel() {
    this.props.form.resetFields();
    this.props.onCancel();
  }

  onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  render() {
    const { visible, item } = this.props;
    const { getFieldDecorator } = this.props.form;
    const modalOpts = {
      title: item ? 'Edit Worker' : 'Add New Worker',
      visible,
      onOk: () => { this.handleOk(); },
      onCancel: () => { this.handleCancel(); },
      wrapClassName: 'vertical-center-modal'
    };

    return (
      <LocaleProvider locale={enUS}>
        <Modal {...modalOpts}>
          <Spin tip="Loading..." size="large" spinning={this.state.spinner}>
            <Form horizontal>
              <FormItem label='First Name：' hasFeedback {...formItemLayout}>
                {getFieldDecorator('firstName', {
                  initialValue: item ? item.firstName : '',
                  rules: [
                    {
                      required: true,
                      message: 'First name is required'
                    }
                  ]
                })(<Input ref={node => this.input = node} />)}
              </FormItem>
              <FormItem label='Last Name：' hasFeedback {...formItemLayout}>
                {getFieldDecorator('lastName', {
                  initialValue: item ? item.lastName : '',
                  rules: [
                    {
                      required: true,
                      message: 'Last name is required'
                    }
                  ]
                })(<Input />)}
              </FormItem>
              <FormItem label='Email:' hasFeedback {...formItemLayout}>
                {getFieldDecorator('email', {
                  initialValue: item ? item.username : '',
                  rules: [
                    {
                      required: true,
                      message: 'Email is required',
                    }, {
                      type: 'email',
                      message: 'Please enter a valid email address',
                    }
                  ]
                })(<Input />)}
              </FormItem>
              <FormItem label='Age' hasFeedback {...formItemLayout}>
                {getFieldDecorator('age', {
                  initialValue: item ? item.phoneNumber : '',
                  rules: [
                    {
                      required: true,
                      message: 'Phone number is required'
                    }
                  ]
                })(
                  <Input
                  />
                )}
              </FormItem>
              <FormItem label='Address' hasFeedback {...formItemLayout}>
                {getFieldDecorator('address', {
                  initialValue: item ? item.phoneNumber : '',
                  rules: [
                    {
                      required: true,
                      message: 'Phone number is required'
                    }
                  ]
                })(
                  <Input
                  />
                )}
              </FormItem>
            </Form>
          </Spin>
        </Modal>
      </LocaleProvider >

    );
  }
}

modal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
};

export default Form.create()(modal);
