import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BubbleChart from '../../components/Charts/Bubble';
import PolarChart from '../../components/Charts/Polar';
import { Doughnut } from '../../components/Charts/Doughnut';
import Bar from '../../components/Charts/Bar';
import './Charts.style.scss';

class Charts extends Component {

  static CircularChartsSection = () => {
    return (
      <Row gutter={27} style={{ height: 300 }}>
        <Col span={8}>
          <Card hoverable className="circular-chart-card" bodyStyle={{ padding: 5 }}>
            <div className="title">Bubble Chart</div>
            <BubbleChart />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable className="circular-chart-card" bodyStyle={{ padding: 5 }}>
            <div className="title">Polar Chart</div>
            <PolarChart />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable className="circular-chart-card" bodyStyle={{ padding: 5 }}>
            <div className="title">Doughnut Chart</div>
            <Doughnut height={250} />
          </Card>
        </Col>
      </Row>
    );
  }

  static BarChart = () => <Row gutter={27} style={{ margin: '3rem', height: 400 }}><Bar /></Row>


  render() {
    return (
      <div>
        <Charts.CircularChartsSection />
        <Charts.BarChart />
      </div>
    );
  }
}

export default Charts;