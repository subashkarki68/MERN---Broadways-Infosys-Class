const BlogList = (props: any) => {
  const { blogs } = props;
  return (
    <>
      <ul>
        {blogs.map((blog: any) => {
          return (
            <li className='mt-3' key={blog.id}>
              {blog.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const EmptyList = () => {
  return <h2>Empty List</h2>;
};

export const List = (props: any) => {
  const { blogs } = props;
  return <>{blogs.length > 0 ? <BlogList blogs={blogs} /> : <EmptyList />}</>;
};
