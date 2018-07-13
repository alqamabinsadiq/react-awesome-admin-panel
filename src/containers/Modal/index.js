import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as ModalActions from '../../actions/modal';
// Containers

class Modal extends Component {
  constructor(props) {
    super(props);
    this.renderModal = this._renderModal.bind(this);
  }

  _renderModal() {
    switch (this.props.template) {

      default: {
        return null;
      }
    }
  }

  render() {
    if (!this.props.template) {
      return null;
    }
    return (
      <div>
        {this.renderModal()}
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  params: PropTypes.object,
  template: PropTypes.string
};

// const mapStateToProps = (state) => {
//   return {
//     template: state.modal.template
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...ModalActions
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Modal);