import { getPosts } from './Actions';


function mockFetch(data) {
  return jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => data
    })
  )
}

// test('getPosts', () => {
//   const result = getPosts();
//   // expect(result.type).toEqual('GET_POSTS_SUCCESS');
//   expect(result).toMatchSnapshot();
// });

describe('getPosts', () => {
  it('fetches posts', async () => {
    global.fetch = mockFetch({
      data: {
        children: [
          {data: {id: 1}},
          {data: {id: 2}},
        ],
      }
    });
    const dispatch = jest.fn();
    await getPosts()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_POSTS_BEGIN'
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: 'GET_POSTS_SUCCESS',
      posts: [
        {id: 1},
        {id: 2},
      ]
    });
  });
});