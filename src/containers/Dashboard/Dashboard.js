import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { push } from 'react-router-redux';
import { Col, Row, Select, Spin, LocaleProvider } from 'antd';
import NumberCard from '../../components/NumberCard/NumberCard';
import { connect } from 'react-redux';
// import { getCount } from '../../actions/tasks';
// import { getAllProperties, setCurrentProperty } from '../../actions/property';
const Option = Select.Option;
import enUS from 'antd/lib/locale-provider/en_US';
// import { socketConnect } from 'socket.io-react';
// let color = {
//   green: '#64ea91',
//   blue: '#8fc9fb',
//   purple: '#d897eb'
// };

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      // loading: true
    };
    // props.socket.emit('get-online-user');
    // props.socket.on('online-user-update', msg => console.log(msg));
  }

  componentDidMount() {
    // this.props.getAllProperties().then(() => {
    //   this.props.getCount(this.props.allProperties[0]._id);
    //   this.props.setCurrentProperty(this.props.allProperties[0]._id);
    //   this.setState({
    //     dataSource: this.props.allProperties,
    //     currentPropId: this.props.allProperties[0]._id,
    //     loading: false
    //   });
    // });
  }

  // onDropdownValueChange(id) {
  //   this.props.setCurrentProperty(id);
  //   this.setState({
  //     loading: true,
  //     currentPropId: id,
  //   });
  //   this.props.getCount(id).then(() => {
  //     this.setState({
  //       loading: false
  //     });
  //   });
  // }

  renderNumberCards() {
    this.numbers = [
      {
        title: 'Active Tasks',
        type: 'active',
        number: 200
      }, {
        title: 'Pending Tasks',
        type: 'pending',
        number: 300
      },
      {
        title: 'Pending Units',
        type: 'pending',
        number: 150
      },
      {
        type: 'complete',
        title: 'Completed Unit',
        number: 100
      },
      {
        title: 'Unassigned Tasks',
        type: 'unassigned',
        number: 100
      },
      {
        title: 'Vacant Leased',
        type: 'leased',
        number: 200
      },
      {
        title: 'Vacant Not Leased',
        type: 'notLeased',
        number: 2000
      }
    ];
    return (this.numbers.map((item, key) => <Col key={key} span={8} >
      <NumberCard {...item} />
    </Col>));
  }

  render() {
    return (
      <div style={{ background: '#ECECEC' }}>
        {this.state.loading ?
          <Row gutter={48} type="flex" justify="center" align="middle">
            <Col>
              <Spin tip="Loading..." size="large" spinning />
            </Col>
          </Row>
          :
          <Row gutter={48}>
            {this.renderNumberCards()}
          </Row>
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  unassignedTasks: PropTypes.number,
  completeTasks: PropTypes.number,
  vacantLeased: PropTypes.number,
  vacantNotLeased: PropTypes.number,
  activeTasks: PropTypes.number,
  pendingUnit: PropTypes.number,
  completeUnit: PropTypes.number,
  pendingTasks: PropTypes.number,
  getDashBoardItems: PropTypes.func,
  getCount: PropTypes.func

};

// const mapStateToProps = (state) => {
//   return {
//     activeTasks: state.tasks.activeTasks,
//     pendingTasks: state.tasks.pendingTasks,
//     completeUnit: state.tasks.completeUnit,
//     pendingUnit: state.tasks.pendingUnit,
//     unassignedTasks: state.tasks.unassignedTasks,
//     vacantLeased: state.tasks.vacantLeased,
//     vacantNotLeased: state.tasks.vacantNotLeased,
//     allProperties: state.property.allProperties
//   };
// };

export default connect(null)(Dashboard);
