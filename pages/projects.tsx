import Link from 'next/link';

const projects = () => {
  return (
    <>
      <h1>My projects</h1>
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </>
  )
};

export default projects;