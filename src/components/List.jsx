import ListItem from './ListItem';

const List = ({ posts, remove }) => {  

  if (!posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Create a new post</h1>
      </div>
    );
  }
  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id} timeout={500}>
          <ListItem remove={remove} number={index + 1} post={post}  />
        </div>
      ))}
    </div>
  );
};

export default List;
