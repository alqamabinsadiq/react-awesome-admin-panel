import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PayRatesModal from '../../components/Modal/PayRatesModal';
import { closeModal } from '../../actions/modal';
import { setWorkerPayRatesLoader, updateDefaultPayRates, getWorkerPayRates, setCurrentPayRate } from '../../actions/payRates';

class PayRatesModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: true
    };
  }

  // Handles the task update.
  onPayRatesUpdate(data) {
    this.props.setWorkerPayRatesLoader(true);
    return new Promise((resolve, reject) => {
      this.props.updateDefaultPayRates(data._id, data, resolve, reject);
    }).
      then(() => {
        this.props.getWorkerPayRates();
      });
  }

  render() {
    const taskModalProps = {
      item: this.props.currentPayRate,
      type: this.props.modalType,
      visible: this.state.isOpened
    };

    return (
      <PayRatesModal
        {...taskModalProps}
        onCancel={() => {
          this.props.closeModal();
          this.setState({ isOpened: false });
        }}
        onOk={(data) => {
          this.onPayRatesUpdate(data);
          this.setState({ isOpened: false });
          this.props.setCurrentPayRate(null);
          this.props.closeModal();
        }} />
    );
  }
}

// Proptypes
PayRatesModalContainer.propTypes = {
  modalType: PropTypes.string,
  closeModal: PropTypes.func,
  setWorkerPayRatesLoader: PropTypes.func,
  updateDefaultPayRates: PropTypes.func,
  getWorkerPayRates: PropTypes.func,
  setCurrentPayRate: PropTypes.func,
  currentPayRate: PropTypes.object
};

// Maps state to props
const mapStateToProps = (state) => {
  return {
    currentPayRate: state.payRates.currentPayRate,
  };
};

// Map dispatch to Props. 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal,
    setWorkerPayRatesLoader,
    updateDefaultPayRates,
    getWorkerPayRates,
    setCurrentPayRate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PayRatesModalContainer);