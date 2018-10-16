import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col, Icon, Popconfirm } from 'antd';
import { Button, SearchInput } from '../../components/Shared'

class TableContainer extends Component {
  state = {
    dataSource: [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    }]
  }
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      filters: [{
        text: 'Joe',
        value: 'Joe',
      }, {
        text: 'Jim',
        value: 'Jim',
      }, {
        text: 'Submenu',
        value: 'Submenu',
        children: [{
          text: 'Green',
          value: 'Green',
        }, {
          text: 'Black',
          value: 'Black',
        }],
      }],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
    }, {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    }, {
      title: 'Address',
      dataIndex: 'address',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
    },
    {
      title: 'Operation',
      key: 'operation',
      width: 100,
      // fixed: 'right',
      render: (text, record) => {
        return (
          <Popconfirm title="Are you sure you want to delete?" onConfirm={() => console.log('confirmed')}>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Icon style={{ alignSelf: 'center', cursor: 'pointer', fontSize: '1.7em', color: 'rgb(255,143,143)', padding: 4, background: '#efeded', borderRadius: 25, boxShadow: '1px 1px 1px rgba(0,0,0,0.3)' }} type="user-delete" />
            </div>
          </Popconfirm>
        );
      }
    }
    ];

    // TODO: refactor code and make create a static HEader.
    return (
      <div>
        <Row style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Col span={6} >
            <SearchInput
              placeholder="input search text"
              onSearch={value => console.log(value)}
            />
          </Col>
          <Col span={4} offset={14} style={{ justifyContent: 'flex-end', flexDirection: 'row', display: 'flex' }}>
            <Button
              type="primary"
              iconType="plus"
              hasIcon={true}
              label="Add New Record"
            />
          </Col>
        </Row>
        <Table columns={columns} dataSource={this.state.dataSource} bordered />
      </div >
    );
  }
}

export default connect(null)(TableContainer);