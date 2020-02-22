


export function getPosts() {
  return (dispatch, getState) => {
    dispatch({type: 'GET_POSTS_BEGIN'});
    return fetch('https://www.reddit.com/r/reactjs.json')
    .then(res => res.json())
    .then(json => {
      console.log(json.data.children.map(c => c.data));
      dispatch({
        type: "GET_POSTS_SUCCESS",
        posts: json.data.children.map(c => c.data),
      })
    })
    .catch(error => {
      dispatch({type: 'GET_POSTS_ERROR', error});
    })
  }
}