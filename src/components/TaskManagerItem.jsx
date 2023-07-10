import PropTypes from 'prop-types';

const TaskManagerItem = ({ task }) => <li key={task.id}>{task.title}</li>;

TaskManagerItem.propTypes = {
  itemProp: PropTypes.shape({}).isRequired,
};

TaskManagerItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TaskManagerItem;
