import React from 'react';
import Link from 'next/link';
import Twitter from '@/public/icons/twitter';
import { FaInstagram } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";

const SocialMediaBanner = () => {
  return (
    /** <nav>
        <div className='justify-center text-center'>
            <p className='text-sm text-gray-500'>Social Media</p>
        </div>
        <div className='place-content-center'>
            <Link href="https://twitter.com/maxfoxCEO" target="_blank" rel="noopener noreferrer" className='justify-center'>
                <Twitter />
            </Link>
        </div>
    </nav>*/
    <nav>
        <Link href="https://twitter.com/maxfoxCEO" target="_blank" rel="noopener noreferrer" className='justify-center'>
            <span className='text-blue-800 underline'>Twitter</span>
        </Link>
    </nav>
  );
};

export default SocialMediaBanner;
