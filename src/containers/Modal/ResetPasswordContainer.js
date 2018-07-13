import React, { Component } from 'react';
import ResetPasswordModal from '../../components/Modal/ResetPasswordModal';
import { resetWorkerPassword, setWorkerLoader, setCurrentWorker } from '../../actions/workers';
import { closeModal } from '../../actions/modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ResetPasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: true
    };
  }

  // Adds Worker.
  onPasswordReset({ password }) {
    console.log(password);
    this.props.setWorkerLoader(true);
    this.props.resetWorkerPassword(password, this.props.currentWorker.username);
  }

  render() {
    const resetModalProps = {
      item: this.props.currentWorker,
      type: this.props.modalType,
      visible: this.state.isOpened
    };
    return (
      <ResetPasswordModal
        {...resetModalProps}
        onCancel={() => {
          this.props.closeModal();
          this.props.setCurrentWorker(null);
          this.setState({ isOpened: false });
        }}
        onOk={(data) => {
          this.onPasswordReset(data);
          this.setState({ isOpened: false });
          this.props.closeModal();
        }} />
    );
  }
}
// Proptypes
ResetPasswordContainer.propTypes = {
  closeModal: PropTypes.func,
  modalType: PropTypes.string,
  setWorkerLoader: PropTypes.func,
  resetWorkerPassword: PropTypes.func,
  setCurrentWorker: PropTypes.func,
  currentWorker: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    loading: state.workers.loading,
    currentWorker: state.workers.currentWorker
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal,
    resetWorkerPassword,
    setCurrentWorker,
    setWorkerLoader
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);