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
      loading: true
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
        number: this.props.activeTasks
      }, {
        title: 'Pending Tasks',
        type: 'pending',
        number: this.props.pendingTasks
      },
      {
        title: 'Pending Units',
        type: 'pending',
        number: this.props.pendingUnit
      },
      {
        type: 'complete',
        title: 'Completed Unit',
        number: this.props.completeUnit
      },
      {
        title: 'Unassigned Tasks',
        type: 'unassigned',
        number: this.props.unassignedTasks
      },
      {
        title: 'Vacant Leased',
        type: 'leased',
        number: this.props.vacantLeased,
        link: '/dashboard/property-tracker?Vacant Leased'
      },
      {
        title: 'Vacant Not Leased',
        type: 'notLeased',
        link: '/dashboard/property-tracker?Vacant Not Leased',
        number: this.props.vacantNotLeased
      },
      // {
      //   title: 'Online Users',
      //   type: 'online',
      //   number: 2
      // }
    ];
    return (this.numbers.map((item, key) => <Col key={key} span={8} >
      <NumberCard {...item} />
    </Col>));
  }

  render() {
    return (
      <div style={{ background: '#ECECEC' }}>
        <Row gutter={24} style={{ marginBottom: 10 }} type="flex" justify="end">
          <Col >
            <LocaleProvider locale={enUS}>
              <Select
                showSearch
                style={{ width: 200 }}
                value={this.state.currentPropId}
                placeholder="Select a property"
                optionFilterProp="children"
                onChange={this.onDropdownValueChange.bind(this)}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {/* <Option value={1} key={1}>Alqama</Option> */}
                {
                  this.state.dataSource ? this.state.dataSource.map((item) => {
                    return (
                      <Option value={item._id} key={item._id}>{item.name}</Option>
                    );
                  }) : null
                }
              </Select>
            </LocaleProvider>
          </Col>
        </Row>
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
