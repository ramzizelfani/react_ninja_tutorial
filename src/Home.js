import useFetch from './useFetch';
import BlogList from './BlogList';
export default function Home() {
  const { data: blogs, isPending, error } = useFetch(
    'http://localhost:8000/blogs'
  );

  return (
    <div className='home'>
      {error !== '' && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'Mohsen')}
          title='Mohsen Blogs'
        />
      )}
    </div>
  );
}
