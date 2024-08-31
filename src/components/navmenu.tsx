import Link from 'next/link';

export default function Navmenu() {
  return (
    <nav>
      <ul style={{display: 'flex'}}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/projects">Contact</Link>
        </li>
        <li>
          <Link href="/services">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}