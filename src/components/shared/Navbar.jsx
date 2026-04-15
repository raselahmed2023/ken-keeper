import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    return (
        <div className="  bg-base-100 shadow-sm ">
            <div className='navbar container mx-auto'>
                <div className="flex-1">
                    <Image src={logo} alt="Logo" width={120} ></Image>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/' className='text-xl'><FaHome />Home</Link></li>
                        <li><Link href="/apps/Timeline" className='text-xl'><IoTimerOutline />Timeline</Link></li>
                        <li><a href="/apps/Stats" className='text-xl'><TfiStatsUp />Stats</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;