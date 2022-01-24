import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><button>Home</button></Link>
      <Link href="/posts/first-post"><button>First post</button></Link>
    </nav>
  )
}

export default Navbar;