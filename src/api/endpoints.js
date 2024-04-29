import react from 'react';

const Client = () => {
    return {
      posts: {
        getAll() {
          return fetch('/posts');
        },
      }}
    }

export default Client();