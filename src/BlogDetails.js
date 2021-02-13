import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
export default function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    }).then (() => {
      console.log('Blog Deleted!!!')
      history.push('/')
    })
  }
  return (
    <div className='blog-details'>
      {isPending && <div> Loading...</div>}
      {error && <div> {error.message}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
