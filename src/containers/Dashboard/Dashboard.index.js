import React, { Component } from 'react';
import { Row, Col, Card, Progress, Badge } from 'antd';
// import { Chart } from 'chart.js';
import NumberCard from '../../components/NumberCard/NumberCard';
// import BubbleChart from '../../components/Charts/Bubble';
// import PolarChart from '../../components/Charts/Polar';
import { Doughnut } from '../../components/Charts/Doughnut';
import Bar from '../../components/Charts/Bar';
import './Dashboard.style.scss';

class Dashboard extends Component {
  cards = [
    {
      title: '',
      color: '#8fd684f5',
      number: 1033,
      type: 'user-add'
    },
    {
      title: '',
      color: '#ffb2b2',
      number: 3233,
      type: 'user-delete'
    },
    {
      title: '',
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

  // static ChartSection = () => {
  //   return (
  //     <Row gutter={27} style={{ marginTop: '3rem', height: 300 }}>
  //       <Col span={8}>
  //         <div>
  //           <BubbleChart />
  //         </div>
  //       </Col>
  //       <Col span={8}>
  //         <div>
  //           <PolarChart />
  //         </div>
  //       </Col>
  //       <Col span={8}>
  //         <div>
  //           <Doughnut />
  //         </div>
  //       </Col>
  //     </Row>
  //   );
  // }

  static BarChart = () => <Row gutter={27} style={{ margin: '3rem', height: 400 }}><Bar /></Row>


  static ProgressBar = () => {
    return (
      <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
        <div className="statsWithProgressBar">
          <div className="header">
            <span className="headerNum">3201</span> <span className="statsHeaderTitle">Progress</span>
          </div>
          <div style={{ marginTop: 15 }}>
            <div>
              January
                <Progress percent={60} strokeColor='#ffc920b3' format={percent => `${percent}`} />
            </div>
            <div>
              Febuary
                <Progress percent={60} strokeColor='#ff6666f5' format={percent => `${percent}`} />
            </div>
            <div>
              March
                <Progress percent={40} strokeColor='#7edacf' format={percent => `${percent}`} />
            </div>
          </div>
        </div>
      </Card>
    );
  }
  static Stats = () => {
    return (
      <Row gutter={27} style={{ marginTop: 30 }}>
        <Col span={8}>
          <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
            <Doughnut height={200} />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
            <div className="userStats-circular-progress">
              <div className="userStats-card-header">
                <div className="card-header-number-count">
                  200
                </div>
                <div className="card-header-label">
                  User daily use
                </div>
              </div>
              <div className="userStats-badge-and-prgress">
                <Badge
                  count={35}
                  overflowCount={30}
                  style={{
                    backgroundColor: '#7edacf',
                    borderRadius: 4,
                    // margin: 10,
                    marginBottom: '2rem',
                    width: 60,
                    height: 30,
                    fontSize: 19,
                    textAlign: 'center',
                    lineHeight: '30px'
                  }} />
                <Progress style={{ stroke: '#7edacf' }} type="circle" percent={75} />
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Dashboard.ProgressBar />
        </Col>
      </Row>
    );
  }

  render() {
    // const Bubble = new Chart()
    return (
      <div>
        <Dashboard.NumberCards cards={this.cards} />
        <Dashboard.Stats />
        {/* <Dashboard.ChartSection /> */}
        <Dashboard.BarChart />
      </div>
    );
  }
}

export default Dashboard;