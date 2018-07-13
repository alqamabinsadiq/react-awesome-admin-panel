import React, { Component } from 'react';
import SupervisorModal from '../../components/Modal/SupervisorModal';
import {
  addNewSupervisor,
  setSupervisorLoader,
  getAllSupervisors,
  setCurrentSupervisor,
  setModalType,
  updateSupervisor
}
  from '../../actions/supervisor';
import { closeModal } from '../../actions/modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SupervisorModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: true
    };
  }

  // Adds Supervisor.
  onSupervisorAdd(data) {
    this.props.setSupervisorLoader(true);
    this.props.addNewSupervisor(data, this.props.allSupervisors);
  }

  // on supervisor update.
  onSupervisorUpdate(data) {
    this.props.setSupervisorLoader(true);
    return new Promise((resolve) => {
      this.props.updateSupervisor(data, resolve);
    }).
      then(() => {
        this.props.getAllSupervisors();
      });
  }

  render() {
    // props for modal.
    const opporModalProps = {
      item: this.props.currentSupervisor,
      type: this.props.modalType,
      visible: this.state.isOpened
    };

    return (
      <SupervisorModal
        {...opporModalProps}
        onCancel={() => {
          this.props.closeModal();
          this.props.setCurrentSupervisor(null);
          this.setState({ isOpened: false });
        }}
        onOk={(data) => {
          if (this.props.modalType === 'create') {
            this.onSupervisorAdd(data);
            this.setState({ isOpened: false });
            this.props.setCurrentSupervisor(null);
            this.props.setModalType('create');
            this.props.closeModal();
          } else {
            this.onSupervisorUpdate(data);
            this.setState({ isOpened: false });
            this.props.setCurrentSupervisor(null);
            this.props.setModalType('create');
            this.props.closeModal();
          }
        }} />
    );
  }
}

// Proptypes
SupervisorModalContainer.propTypes = {
  closeModal: PropTypes.func,
  modalType: PropTypes.string,
  setModalType: PropTypes.func,
  setSupervisorLoader: PropTypes.func,
  addNewSupervisor: PropTypes.func,
  getAllSupervisors: PropTypes.func,
  setCurrentSupervisor: PropTypes.func,
  allSupervisors: PropTypes.array,
  currentSupervisor: PropTypes.object,
  updateSupervisor: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    currentSupervisor: state.supervisor.currentSupervisor,
    allSupervisors: state.supervisor.allSupervisors,
    loading: state.supervisor.loading,
    modalType: state.supervisor.modalType
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal,
    addNewSupervisor,
    setSupervisorLoader,
    getAllSupervisors,
    setCurrentSupervisor,
    setModalType,
    updateSupervisor
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SupervisorModalContainer);