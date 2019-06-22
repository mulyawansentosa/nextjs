import Link from 'next/link';

const Navbar = () => (
    <ul>
        <li><Link href="/"><a>Satu</a></Link></li>
        <li><Link href="/about"><a>Dua</a></Link></li>
    </ul>
);
export default Navbar;