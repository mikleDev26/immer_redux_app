import reducer from './Reducer';

test('GET_POSTS_SUCCESS gets posts', () => {
  //given
  const state = reducer(undefined, {type: 'INIT'});
  //when
  const newState = reducer(state, {
    type: 'GET_POSTS_SUCCESS',
    posts: [{id: 1, name: 'Test post'}, {id: 2, name: 'Test post'}]
  })
  //then
  expect(newState.posts.length).toBe(2);
})