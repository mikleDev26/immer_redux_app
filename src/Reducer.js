import produce from 'immer';

const initialState = {
  isLoading: false,
  error: null,
  posts: [],
};


export default function reducer(state = initialState, action) {
  return produce(state, draft => {
    switch(action.type){
      case 'GET_POSTS_BEGIN':
        draft.isLoading = true;
        draft.error =  null;
        return;
        // return {
        //   ...state,
        //   isLoading: true,
        //   error: null,
        // }
  
      case 'GET_POSTS_ERROR':
        draft.isLoading = false;
        draft.error = action.error;
        return;
        // return {
        //   ...state,
        //   isLoading: false,
        //   error: action.error
        // }
      case ('GET_POSTS_SUCCESS'):
        draft.posts = action.posts;
        draft.isLoading = false;
        return;
        // return {
        //   ...state,
        //   posts: action.posts,
        //   isLoading: false
        // }; 
        default: 
          return state;
    }
  });
}