import React from 'react';

const REVALIDATE_TIME_IN_S = 30;

const Home = () => {
  const currentTime = new Date().toString();
  return (
    <div>
      <h1>Hello!</h1>
      <p>It is currently --------------- {currentTime}</p>
    </div>
  );
};

export async function getStaticProps() {
  console.log(new Date().toString());
  return {
    props: {
      renderTime: 'hi',
    },
    revalidate: REVALIDATE_TIME_IN_S, // In seconds
  };
}

export default Home;
