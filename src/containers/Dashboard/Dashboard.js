import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import { Chart } from 'chart.js';
import NumberCard from '../../components/NumberCard/NumberCard';
import BubbleChart from '../../components/Charts/Bubble';
import PolarChart from '../../components/Charts/Polar';
import Doughnut from '../../components/Charts/Doughnut';
import Bar from '../../components/Charts/Bar';

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

  static NumberCards = ({ cards }) => {
    return (
      <Row gutter={27}>
        {
          cards.map((item, index) => {
            return (
              <Col span={8} key={index}>
                <NumberCard color={item.color} number={item.number} type={item.type} />
              </Col>
            );
          })
        }
      </Row>
    )
  }

  static ChartSection = () => {
    return (
      <Row gutter={27} style={{ marginTop: '3rem', height: 300 }}>
        <Col span={8}>
          <div>
            <BubbleChart />
          </div>
        </Col>
        <Col span={8}>
          <div>
            <PolarChart />
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Doughnut />
          </div>
        </Col>
      </Row>
    );
  }

  static BarChart = () => <Row gutter={27} style={{ margin: '3rem', height: 400 }}><Bar /></Row>


  render() {
    // const Bubble = new Chart()
    return (
      <div>
        <Dashboard.NumberCards cards={this.cards} />
        <Dashboard.ChartSection />
        <Dashboard.BarChart />
      </div>
    );
  }
}

export default Dashboard;