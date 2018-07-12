import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Notifications from 'react-notification-system-redux';
// Styles

const style = {
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      margin: '10px 5px 2px 1px'
    }
  }
};

class NotificationsContainer extends Component {


  render() {
    return (
      <Notifications
        notifications={this.props.notifications}
        style={style}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications
});

// NotificationsContainer.propTypes = {
//     notifications: PropTypes.array
//   };

export default connect(mapStateToProps)(NotificationsContainer);
