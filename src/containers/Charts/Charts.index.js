import React, { Component } from 'react';
import { Row, Col } from 'antd';
import BubbleChart from '../../components/Charts/Bubble';
import PolarChart from '../../components/Charts/Polar';
import { Doughnut } from '../../components/Charts/Doughnut';
import Bar from '../../components/Charts/Bar';
// import './Dashboard.style.scss';

class Charts extends Component {

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
            <Doughnut height={250} />
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
        <Charts.ChartSection />
        <Charts.BarChart />
      </div>
    );
  }
}

export default Charts;