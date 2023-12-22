import React from 'react';
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='justify-center flex place-content-center items-center p-4 sticky'>
        <Link className='flex self-center items-center pt-2 text-lg hover:underline underline-offset-8 transition ease-in-out duration-200 hover:scale-105' href='/'>Home</Link>
        <Link href='/'>
            <h1 className='flex text-4xl text-center self-center pr-8 pl-8 font-bold transition ease-in-out duration-300 hover:scale-105'>Max Fox</h1>
        </Link>
        <Link className='flex self-center items-center pt-2 text-lg hover:underline underline-offset-8 transition ease-in-out duration-200 hover:scale-105' href='/posts'>Posts</Link>
    </nav>
  );
};

export default NavBar;
