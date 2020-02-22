import React from 'react';
import { connect } from 'react-redux';


export function handleErrorOrLoading(isLoading, error) {
  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>{error.message}</div>
  }
}

function Reddit(props) {
  const { posts, isLoading, error } = props;
  return (
    <ul>
      {handleErrorOrLoading(isLoading, error)}
      {posts.map(post => (
        <li key={post.id}>
          <span>{post.score}</span>
          <div>
            <h2>{post.title}</h2>
            <div>{post.num_comments} comments</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  posts: state.posts,
  isLoading: state.isLoading,
  error: state.error
});

export default connect(mapStateToProps)(Reddit);
