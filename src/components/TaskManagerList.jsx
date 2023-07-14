import PropTypes from 'prop-types';
import TaskManagerItem from './TaskManagerItem';

const TaskManagerList = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <TaskManagerItem key={task.id} task={task} />
    ))}
  </ul>
);

TaskManagerList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default TaskManagerList;
