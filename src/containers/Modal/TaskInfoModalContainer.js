import React, { Component } from 'react';
import TaskInfoModal from '../../components/Modal/TaskInfoModal';
import { closeModal } from '../../actions/modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TaskModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: true
    };
  }

  render() {
    const taskModalProps = {
      record: this.props.currentTask,
      type: this.props.modalType,
      visible: this.state.isOpened
    };

    return (
      <TaskInfoModal
        {...taskModalProps}
        onCancel={() => {
          this.props.closeModal();
          this.setState({ isOpened: false });
        }}
        onOk={() => {
          this.setState({ isOpened: false });
          this.props.closeModal();
        }} />
    );
  }
}

// Proptypes
TaskModalContainer.propTypes = {
  modalType: PropTypes.string,
  closeModal: PropTypes.func,
  currentTask: PropTypes.object
};

// Maps state to props
const mapStateToProps = (state) => {
  return {
    currentTask: state.tasks.currentTask,
  };
};

// Map dispatch to Props. 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModalContainer);