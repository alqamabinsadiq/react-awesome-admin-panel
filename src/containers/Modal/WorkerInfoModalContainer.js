import React, { Component } from 'react';
import WorkerInfoModal from '../../components/Modal/WorkerInfoModal';
import { closeModal } from '../../actions/modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WorkerInfoModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: true
    };
  }

  render() {
    const taskModalProps = {
      record: this.props.currentWorker,
      type: this.props.modalType,
      visible: this.state.isOpened
    };

    return (
      <WorkerInfoModal
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
WorkerInfoModalContainer.propTypes = {
  modalType: PropTypes.string,
  closeModal: PropTypes.func,
  currentWorker: PropTypes.object
};

// Maps state to props
const mapStateToProps = (state) => {
  return {
    currentWorker: state.workers.currentWorker,
  };
};

// Map dispatch to Props. 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkerInfoModalContainer);