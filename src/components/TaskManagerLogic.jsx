import InputTaskManager from './InputTaskManager';
import TaskManagerList from './TaskManagerList';

const TaskManagerLogic = () => {
  const tasks = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];

  return (
    <div>
      <InputTaskManager />
      <TaskManagerList tasks={tasks} />
    </div>
  );
};

export default TaskManagerLogic;
