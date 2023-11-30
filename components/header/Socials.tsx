'use client'

import Link from 'next/link';
import {ImFacebook, ImTwitter, ImInstagram, ImPinterest} from 'react-icons/im';

const socials = [
    {
        href: 'https://www.facebook.com',
        icon: ImFacebook
    },
    {
        href: 'https://www.x.com',
        icon: ImTwitter
    },
    {
        href: 'https://www.instagram.com',
        icon: ImInstagram
    },
    {
        href: 'https://www.pinterest.com',
        icon: ImPinterest
    },
] 

export default function Socials () {
    return (
        <>
            <ul className='flex gap-x-6'>
                {socials.map(({href, icon: Icon}) => (
                    <li key={href} className=''>
                        <Link href={href} target='_blank'>
                            <Icon size={20} />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}