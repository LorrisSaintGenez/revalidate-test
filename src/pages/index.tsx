import React from 'react';

const REVALIDATE_TIME_IN_S = 30;

const Index = () => (
  <div>
    <h1>Hello!</h1>
    <p>It is currently --------------- {new Date().toString()}</p>
  </div>
);

export function getStaticProps() {
  console.log(
    `Hello there, are you really called every ${REVALIDATE_TIME_IN_S} seconds?`
  );

  return {
    props: {
      test: 'hi',
    },
    revalidate: REVALIDATE_TIME_IN_S, // In seconds
  };
}

export default Index;
