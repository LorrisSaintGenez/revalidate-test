import React from 'react';

const REVALIDATE_TIME_IN_S = 30;

const Index = () => {
  const currentTime = new Date().toString();
  return (
    <div>
      <h1>Hello!</h1>
      <p>It is currently --------------- {currentTime}</p>
    </div>
  );
};

export function getStaticProps() {
  return {
    props: {
      renderTime: 'hi',
    },
    revalidate: REVALIDATE_TIME_IN_S, // In seconds
  };
}

export default Index;
