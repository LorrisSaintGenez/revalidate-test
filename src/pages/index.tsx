import React from 'react';

const Index = () => <div>hi</div>;

const REVALIDATE_DELAY = 60;

export function getStaticProps() {
  // eslint-disable-next-line no-console
  console.log(
    `Hello there, are you really called every ${REVALIDATE_DELAY} seconds?`
  );

  return {
    props: {
      test: 'OK',
    },
    revalidate: REVALIDATE_DELAY,
  };
}

export default Index;
