import { GetStaticProps } from 'next'
import crypto from 'crypto';

const id = crypto.randomBytes(16).toString('hex');

const Index = () => {
  if (typeof window === 'undefined') {
    console.log('Rendering on Server');
  }
  return (
    <div>
      <h1>Hello!</h1>
      <p>It is currently ---------------</p>
    </div>
  );
};

const REVALIDATE_DELAY = 30;

export const getStaticProps: GetStaticProps = async () => {
  console.log(id);
  return {
    props: {
      test: 'hi',
    },
    revalidate: REVALIDATE_DELAY, // In seconds
  };
}

export default Index;
