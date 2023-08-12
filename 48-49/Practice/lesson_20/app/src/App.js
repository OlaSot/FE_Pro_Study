import './App.css';
import AddForm from './components/AddForm/AddForm';
import AddTaskForm from './components/AddTaskForm';
import TasksContainer from './components/TasksContainer';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <div>
      <AddForm />
      <UsersContainer />
      <AddTaskForm />
      <TasksContainer />
    </div>
  );
}

export default App;
