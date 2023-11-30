import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {CgMenuRight} from 'react-icons/cg'
import { links } from "./Header"
import Link from "next/link"
import Socials from "./Socials"

export default function MobileNavbar() {
  return (
    <div className="lg:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost"><CgMenuRight className='text-3xl' /></Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <nav className="flex flex-col items-center justify-center gap-y-6 py-6 mt-36">
        {links.map(({href, label}) => (
            <Link key={href} href={href} className="text-3xl text-primary font-semibold font-primary">
                {label}
            </Link>
        ))}
        </nav>
        <div className="text-2xl mt-60">
            <Socials />
        </div>
      </SheetContent>
    </Sheet>
    </div>
  )
}
