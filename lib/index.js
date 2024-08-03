// pages/index.js (or your main page file)
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Image Gallery</h1>
      <Link href="/gallery">
        <a>Go to Gallery</a>
      </Link>
    </div>
  );
}
