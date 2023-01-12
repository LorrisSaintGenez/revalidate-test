import React from 'react';

const REVALIDATE_TIME_IN_S = 30;

const Home = ({ renderTime }: { renderTime: string }) => {
  const currentTime = new Date().toString();
  return (
    <>
      <div>
        <h1>Hello!</h1>
        <p>Last rendered at -------------- {renderTime}</p>
        <p>It is currently --------------- {currentTime}</p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  console.log('hello');
  return {
    props: {
      renderTime: new Date().toString(),
    },
    revalidate: REVALIDATE_TIME_IN_S, // In seconds
  };
}

export default Home;
