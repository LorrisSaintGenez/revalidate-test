import React from 'react';
import crypto from 'crypto';

const id = crypto.randomBytes(16).toString('hex');

const Index = () => {
  if (typeof window === 'undefined') {
    console.log('Rendering on Server');
  }
  return <div>hi</div>;
};

const REVALIDATE_DELAY = 30;

export function getStaticProps() {
  console.log(id);
  return {
    props: {
      test: 'hi',
    },
    revalidate: REVALIDATE_DELAY, // In seconds
  };
}

export default Index;
