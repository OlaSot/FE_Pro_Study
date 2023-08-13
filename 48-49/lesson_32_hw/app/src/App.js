import './App.css';
import AddPostForm from './components/AddPostForm';
import PostsContainer from './components/PostsContainer';

function App() {
  return (
    <div className='main'>
      <AddPostForm />
      <PostsContainer />
    </div>
  );
}

export default App;
