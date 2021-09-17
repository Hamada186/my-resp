import { useState } from 'react';
import Link from 'next/link';

export const getServerSideProps = () => {
  return{
    props: { initialCount: 10 }
  };
};

export default function Index({ initialCount }){
  const [count, setCount] = useState(initialCount)

  return(
    <>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(cnt => cnt + 1)}>
          increment
        </button>
        <button onClick={() => setCount(cnt => cnt - 1)}>
          decrement
        </button>
      </div>
      <Link href = "/translate">
        日本語翻訳
      </Link>
    </>
  )
}