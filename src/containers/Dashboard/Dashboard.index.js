import React, { Component } from 'react';
import { Row, Col, Card, Progress, Badge } from 'antd';
import NumberCard from '../../components/NumberCard/NumberCard';
// import { Doughnut } from '../../components/Charts/Doughnut';
import Bar from '../../components/Charts/Bar';
import CountUp from 'react-countup';
import './Dashboard.style.scss';

class Dashboard extends Component {
  cards = [
    {
      title: 'Active Users',
      color: '#8fd684f5',
      number: 1033,
      type: 'user-add'
    },
    {
      title: 'Pending Users',
      color: '#ffb2b2',
      number: 3233,
      type: 'user-delete'
    },
    {
      title: 'New Groups',
      color: '#dabb5b',
      number: 999,
      type: 'usergroup-add'
    },
  ]

  // Number Cards can be used to show stats of users.
  static NumberCards = ({ cards }) => {
    return (
      <Row gutter={27}>
        {
          cards.map((item, index) => {
            return (
              <Col span={8} key={index}>
                <NumberCard color={item.color} number={item.number} type={item.type} title={item.title} />
              </Col>
            );
          })
        }
      </Row>
    )
  }

  static BarChart = () => <Row gutter={27} style={{ margin: '3rem', height: 400 }}><Bar /></Row>

  // Progress card can be used to show progress by months.
  static ProgressBar = () => {
    return (
      <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
        <div className="statsWithProgressBar">
          <div className="header">
            <span className="headerNum"><CountUp end={3201} /></span> <span className="statsHeaderTitle">Progress</span>
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

  // Circular Progress can be used to show the increament od user on daily basis.
  static CircularProgress = () => {
    return (
      <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
        <div className="userStats-circular-progress">
          <div className="userStats-card-header">
            <div className="card-header-number-count">
              <CountUp end={200} />
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
    );
  }

  // Stats Section on Dashboard.
  static Stats = () => {
    return (
      <Row gutter={27} style={{ marginTop: 30 }}>
        <Col span={8}>
          <Dashboard.ProgressBar />
        </Col>
        <Col span={8}>
          <Dashboard.CircularProgress />
        </Col>
        <Col span={8}>
          <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
            <div style={{ height: 200 }}>
              <Bar />
            </div>
          </Card>
        </Col>
      </Row >
    );
  }

  render() {
    return (
      <div>
        <Dashboard.NumberCards cards={this.cards} />
        <Dashboard.Stats />
        {/* <Dashboard.BarChart /> */}
      </div>
    );
  }
}

export default Dashboard;