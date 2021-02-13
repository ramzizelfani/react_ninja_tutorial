import {useHistory} from 'react-router-dom'
import { useState } from 'react';
export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mohsen');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setIsPending(true);
    // setTimeout(() => {

    // }, 1000)
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      console.log('New Blog added');
      // history.go(-1)
      history.push('/');
    });
  };
  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='Mohsen'>Mohsen</option>
          <option value='Ali'>Ali</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}
