import React from 'react';
import crypto from 'crypto';

const Index = () => (
  <div>
    <h1>Hello!</h1>
    <p>It is currently --------------- {new Date().toString()}</p>
  </div>
);

const REVALIDATE_DELAY = 30;

export function getStaticProps() {
  const id = crypto.randomBytes(16).toString('hex');

  console.log(id);

  return {
    props: {
      test: 'hi',
    },
    revalidate: REVALIDATE_DELAY, // In seconds
  };
}

export default Index;
