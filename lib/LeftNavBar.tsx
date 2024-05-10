'use client'
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from 'react-icons/fa6';

const LeftNav = () => {
    const currentPath = usePathname();
    return (


        // <div className='flex'>
        //     <div className='mx-4'>
        //         <Link className={classNames({
        //             'text-zinc-900 ': currentPath === '/',
        //             'text-zinc-500': currentPath !== '/',
        //             'hover:text-zinc-400 transition-colors mx-4': true,
        //         })} href={'/'}>Dashboard</Link>
        //     </div>
        //     <div>
        //         <Link className={classNames({
        //             'text-zinc-900': currentPath === '/issues',
        //             'text-zinc-500': currentPath !== '/issues',
        //             'hover:text-zinc-400 transition-colors mx-4': true,
        //         })} href={'/issues'}>Issues</Link>
        //     </div>
        // </div>
        <div className='flex items-center'>
            <div className='mx-4'>
                <Link href={'/'}> Dashboard</Link>
            </div>
            <div>
                <Link href={'/issues'}>Issues</Link>
            </div>
        </div>

    )
}

export default LeftNav