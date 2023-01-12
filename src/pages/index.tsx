import React from 'react';

const Index = () => <div>hi</div>;

const REVALIDATE_DELAY = 30;

export function getStaticProps() {
  return {
    props: {
      test: 'hi',
    },
    revalidate: REVALIDATE_DELAY, // In seconds
  };
}

export default Index;
