import { ADD_COMMENT } from '../constants/action-types';

export const randomSeed = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

export default function addNewComment(name, text) {
  return {
    type: ADD_COMMENT,
    payload: {
      id: randomSeed(),
      name,
      userpic: `https://avatars.dicebear.com/v2/human/${randomSeed()}.svg?`,
      time: new Date().toLocaleString(),
      text
    }
  };
}
