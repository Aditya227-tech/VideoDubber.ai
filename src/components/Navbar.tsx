"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className='flex fixed z-30 justify-around w-screen bg-black text-white h-[50px] items-center'>
      <div className='t text-xl font-bold text-purple-400'>Listify</div>
      <ul className='flex gap-x-4'>
        <li><Link href="/" className={path == '/' ? ('text-purple-400 font-semibold') : ('')}>Home</Link></li>
        <li><Link href="addUser" className={path == '/addUser' ? ('text-purple-400 font-semibold') : ('')}>More Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
