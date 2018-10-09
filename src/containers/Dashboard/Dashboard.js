import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NumberCard from '../../components/NumberCard/NumberCard';

class Dashboard extends Component {
  cards = [
    {
      color: '#8fd684f5',
      number: 1033,
      type: 'user-add'
    },
    {
      color: '#ffb2b2',
      number: 3233,
      type: 'user-delete'
    },
    {
      color: '#dabb5b',
      number: 999,
      type: 'usergroup-add'
    },
  ]
  render() {
    return (
      <Row gutter={27}>
        {
          this.cards.map((item, index) => {
            return (
              <Col span={8} key={index}>
                <NumberCard color={item.color} number={item.number} type={item.type} />
              </Col>
            );
          })
        }
      </Row>
    );
  }
}

export default Dashboard;