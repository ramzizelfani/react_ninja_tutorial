import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
export default function BlogDetails() {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  return (
    <div className='blog-details'>
      {isPending && <div> Loading...</div>}
      {error && <div> {error.message}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}
