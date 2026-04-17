'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex gap-2">
            <Link href="/" className={`btn btn-sm ${pathname === '/' ? 'btn-success text-white' : 'btn-ghost'}`}>
                Home
            </Link>
            <Link href="/apps/Timeline" className={`btn btn-sm ${pathname === '/apps/Timeline' ? 'btn-success text-white' : 'btn-ghost'}`}>
                Timeline
            </Link>
            <Link href="/apps/Stats" className={`btn btn-sm ${pathname === '/apps/Stats' ? 'btn-success text-white' : 'btn-ghost'}`}>
                Stats
            </Link>
        </div>
    );
};

export default NavLinks;