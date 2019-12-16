import { ADD_COMMENT } from './constants/action-types';
//for demonstration purposes

const initialState = {
  comments: [
    {
      id: 0,
      name: 'John',
      userpic: `https://avatars.dicebear.com/v2/human/trololo.svg?`,
      time: new Date().toLocaleString(),
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, perspiciatis quam ut sapiente, excepturi adipisci harum incidunt accusamus sit molestias a inventore. Autem blanditiis voluptatibus aperiam, id molestias veritatis rem.'
    }
  ]
};

//Reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
  }
  return state;
}

//Selector
export const getComments = state => state.comments;

export default rootReducer;
