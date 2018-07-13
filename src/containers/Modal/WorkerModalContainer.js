import React, { Component } from 'react';
import WorkerModal from '../../components/Modal/WorkerModal';
import { addNewWorker, setWorkerLoader, setCurrentWorker, getAllWorkers, updateWorker, setModalType } from '../../actions/workers';
import { closeModal } from '../../actions/modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WorkerModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: true
    };
  }

  // Adds Worker.
  onWorkerAdd(data) {
    this.props.setWorkerLoader(true);
    this.props.addNewWorker(data, this.props.allWorkers);
  }

  // on worker update.
  onWorkerUpdate(data) {
    this.props.setWorkerLoader(true);
    return new Promise((resolve) => {
      this.props.updateWorker(data, resolve);
    }).
      then(() => {
        this.props.getAllWorkers();
      });
  }

  render() {
    const opporModalProps = {
      item: this.props.currentWorker,
      type: this.props.modalType,
      visible: this.state.isOpened
    };
    return (
      <WorkerModal
        {...opporModalProps}
        onCancel={() => {
          this.props.closeModal();
          this.props.setCurrentWorker(null);
          this.setState({ isOpened: false });
          this.props.setModalType('create');
        }}
        onOk={(data) => {
          if (this.props.modalType === 'create') {
            this.onWorkerAdd(data, this.props.allWorkers);
            this.setState({ isOpened: false });
            this.props.setCurrentWorker(null);
            this.props.setModalType('create');
            this.props.closeModal();
          } else {
            this.onWorkerUpdate(data);
            this.setState({ isOpened: false });
            this.props.setCurrentWorker(null);
            this.props.setModalType('create');
            this.props.closeModal();
          }
        }} />
    );
  }
}

// Proptypes
WorkerModalContainer.propTypes = {
  closeModal: PropTypes.func,
  modalType: PropTypes.string,
  setWorkerLoader: PropTypes.func,
  allWorkers: PropTypes.array,
  addNewWorker: PropTypes.func,
  setCurrentWorker: PropTypes.func,
  currentWorker: PropTypes.object,
  getAllWorkers: PropTypes.func,
  updateWorker: PropTypes.func,
  setModalType: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    allWorkers: state.workers.allWorkers,
    loading: state.workers.loading,
    currentWorker: state.workers.currentWorker,
    modalType: state.workers.modalType
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal,
    addNewWorker,
    setCurrentWorker,
    setWorkerLoader,
    getAllWorkers,
    updateWorker,
    setModalType
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkerModalContainer);