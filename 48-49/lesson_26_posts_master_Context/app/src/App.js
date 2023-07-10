import './App.css';
import { useState } from 'react';
import { posts_data } from './data/posts_data';
import PostContainer from './components/PostsContainer/PostContainer';
import { Context } from './context';
import AddPostForm from './components/AddPostForm/AddPostForm';


function App() {

  const [posts, setPosts] = useState(posts_data)

  const change_like = (id) => {
    
    const target = posts.find(el => el.id === id)
      
    target.like = !target.like
    setPosts([...posts])
  }

  const delete_post = (id) => {
   const newPosts = posts.filter(el => el.id !== id ) 
      setPosts(newPosts)
    
  }
  
  const add_post = new_post => setPosts([...posts, new_post]);

  const add_comment = (new_comment, id) => {
   
      // 1. Найти пост/объект в массиве 
      
      const target_post = posts.find(el => el.id === id) 

      // 2. У найденного поста обратиться к массиву comments и добавить в него new_comment (push)

      target_post.comments.push(new_comment)

      // 3. Вернуть обновленное состояние

      setPosts([...posts]) // здесь создается копия
      // если мы работаем с состоянием, то мы не можем возвращать мутрированный массив, всегда только копию (новый массив)
  }

  const delete_comment = (post_id, comment_id) => {
    

    // 1. Найти пост/объект в массиве (post_id)
    // 2. У найденного поста обратиться к массиву comments и удалить из него комментарий (filter => comment_id)
    // 3. Вернуть обновленное состояние

    const target_post = posts.find(el => el.id === post_id)

    target_post.comments = target_post.comments.filter(el => el.id !== comment_id)

    setPosts([...posts])

  }


  return (
    <div className='main'>
      <Context.Provider value={{posts, change_like, delete_post, add_post, add_comment, delete_comment}}>
      <AddPostForm />
      <PostContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
