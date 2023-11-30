import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import MobileNavbar from "./MobileNavbar";
import { ModeToggle } from "../DarkMode/ModeToggle";

export const links = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Portfolio',
        href: '/portfolio'
    },
    {
        label: 'Contact',
        href: '/contact'
    },
]

export default function Header(){
    return (
        <header className="fixed w-full px-7 lg:px-24 z-30 h-24 lg:h-36 flex items-center">
            <div className="flex items-center lg:flex-row lg:items-center w-full justify-between">
                <Link href='/'><Image src='/header/logo.svg' alt="Logo" width={200} height={200} /></Link>
                <nav className="hidden lg:flex gap-x-12 font-semibold">
                    {links.map(({label, href}) => (
                        <Link key={href} href={href} className="text-muted-foreground hover:text-primary transition">{label}</Link>
                    ))}
                </nav>
                <div className="flex items-center gap-x-4">
                    <ModeToggle />
                    <div className="hidden lg:flex text-muted-foreground">
                       <Socials /> 
                    </div>
                </div>
                <MobileNavbar />
            </div>
        </header>
    )
}