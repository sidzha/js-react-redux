import React from 'react';
import Section from './section';
import AddCommentForm from '../containers/add-comment-form';
import CommentsList from '../containers/comments-list';

function App() {
  return (
    <main>
      <h1 hidden></h1>
      <Section title={'Новый комментарий:'}>
        <AddCommentForm />
      </Section>
      <Section title={'Комментарии:'}>
        <CommentsList />
      </Section>
    </main>
  );
}
export default App;
