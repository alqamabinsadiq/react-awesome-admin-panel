import React, { Component } from 'react';
import TaskModal from '../../components/Modal/TaskModal';
import { setTasksLoader, createNewTask, setCurrentTask, setModalType, updateTask, getAllTasks, setCurrentTaskContainer } from '../../actions/tasks';
import { getVacantUnitsByPropertyId } from '../../actions/unit';
import { setPropertyLoader, getAllUnitsForPropertyTracker } from '../../actions/property';
import { closeModal } from '../../actions/modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TaskModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: true,
      spinner: false
    };
  }

  // Creates new task.
  onTaskCreate(data) {
    this.props.setTasksLoader(true);
    return new Promise((resolve) => {
      this.props.createNewTask(data, resolve);
    }).
      then(() => {
        this.props.getAllTasks();
      });
  }

  // Handles the task update.
  onTaskUpdate(data) {
    this.props.setTasksLoader(true);
    this.props.setPropertyLoader(true);
    return new Promise((resolve) => {
      this.props.updateTask(data, resolve);
    }).
      then(() => {
        // this.props.setPropertyLoader(false);
        this.props.currentTaskContainer === 'propertyTracker' ?
          this.props.getAllUnitsForPropertyTracker(this.props.currentProperty).then(() => {
            this.props.setCurrentTaskContainer(null);
          }) :
          this.props.getAllTasks();
      });
  }

  // Get units of selected property
  onPropertyChange(data) {
    this.setState({
      spinner: true
    });
    this.props.getVacantUnitsByPropertyId(data).then(() => {
      this.setState({
        spinner: false
      });
    });
  }

  render() {
    const taskModalProps = {
      item: this.props.currentTask,
      type: this.props.modalType,
      visible: this.state.isOpened,
      categories: this.props.taskCategories,
      properties: this.props.allProperties,
      onPropertyChange: this.onPropertyChange.bind(this),
      supervisors: this.props.allSupervisors,
      units: this.props.allUnitsByProperty,
      workers: this.props.allWorkers,
      spinner: this.state.spinner
    };

    return (
      <TaskModal
        {...taskModalProps}
        onCancel={() => {
          this.props.closeModal();
          this.setState({ isOpened: false });
          this.props.setCurrentTask(null);
          this.props.setModalType('create');
          this.props.setTasksLoader(false);
          this.props.setPropertyLoader(false);
        }}
        onOk={(data) => {
          if (this.props.modalType === 'create') {
            this.onTaskCreate(data, this.props.allTasks);
            this.setState({ isOpened: false });
            this.props.closeModal();
            this.props.setCurrentTask(null);
            this.props.setModalType('create');
            // this.props.setTasksLoader(false);
          }
          else {
            this.onTaskUpdate(data);
            this.setState({ isOpened: false });
            this.props.closeModal();
            this.props.setCurrentTask(null);
            this.props.setModalType('create');
            // this.props.setTasksLoader(false);
          }
        }} />
    );
  }
}

// Proptypes
TaskModalContainer.propTypes = {
  modalType: PropTypes.string,
  closeModal: PropTypes.func,
  taskCategories: PropTypes.array,
  setTasksLoader: PropTypes.func,
  createNewTask: PropTypes.func,
  allTasks: PropTypes.array,
  allProperties: PropTypes.array,
  allUnitsByProperty: PropTypes.array,
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  allSupervisors: PropTypes.array,
  getVacantUnitsByPropertyId: PropTypes.func,
  allWorkers: PropTypes.array,
  setModalType: PropTypes.func,
  updateTask: PropTypes.func,
  getAllTasks: PropTypes.func,
  currentTaskContainer: PropTypes.string,
  setPropertyLoader: PropTypes.func,
  currentProperty: PropTypes.string,
  getAllUnitsForPropertyTracker: PropTypes.func,
  setCurrentTaskContainer: PropTypes.func
};

// Maps state to props
const mapStateToProps = (state) => {
  return {
    allTasks: state.tasks.allTasks,
    loading: state.tasks.loading,
    taskCategories: state.tasks.taskCategories,
    allProperties: state.property.allProperties,
    currentProperty: state.property.currentProperty,
    allUnitsByProperty: state.unit.allVacantUnitsByProperty,
    currentTask: state.tasks.currentTask,
    allSupervisors: state.supervisor.allSupervisors,
    allWorkers: state.workers.allWorkers,
    modalType: state.tasks.modalType,
    currentTaskContainer: state.tasks.currentTaskContainer
  };
};

// Map dispatch to Props. 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal,
    createNewTask,
    setTasksLoader,
    getVacantUnitsByPropertyId,
    setCurrentTask,
    setModalType,
    updateTask,
    getAllTasks,
    setPropertyLoader,
    getAllUnitsForPropertyTracker,
    setCurrentTaskContainer
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModalContainer);