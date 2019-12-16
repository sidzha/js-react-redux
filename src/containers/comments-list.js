import React from 'react';
import Comment from '../components/comment';

import { connect } from 'react-redux';
import { getComments } from '../store/reducer';

const mapStateToProps = state => {
  return { comments: getComments(state) };
};

const ConnectedCommentsList = ({ comments }) => {
  console.log(comments);

  if (!comments.length) return <h3>Нет комментариев!</h3>;
  return (
    <ul className="list-group">
      {comments.map((comment, i) => {
        const { name, userpic, time, text } = comment;

        return (
          <li key={i} className="list-group-item">
            <Comment name={name} userpic={userpic} time={time} text={text} />
          </li>
        );
      })}
    </ul>
  );
};

const CommentsList = connect(mapStateToProps)(ConnectedCommentsList);

export default CommentsList;
