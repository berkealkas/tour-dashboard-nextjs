import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { IoIosNotificationsOutline } from "react-icons/io";
import MobileNav from "./MobileNav";

export default function Navbar() {

    return (
        <nav className="fixed top-0 w-full z-10 bg-[#0F5E5A] text-white md:pt-2">
            <div className="container mx-auto">
                <div className="hidden md:flex justify-between items-center border-b-2 border-[#49839C]">
                    <div className="flex items-center gap-x-10">
                        <Link href='/' className="">
                            <Image className="w-16 rounded-full bg-transparent" src='/logo.png' alt="logo" width={100} height={100}/>
                        </Link>
                        <NavLink href='/'>
                            Dashboard
                        </NavLink>
                        <NavLink href='/tours'>
                            Tours
                        </NavLink>
                        <NavLink href='/guide'>
                            Guide
                        </NavLink>
                        <NavLink href='/calendar'>
                            Calendar
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <IoIosNotificationsOutline className="text-4xl"/>
                        <Image className="w-10 rounded-full" src='/profile.png' alt="profile" width={100} height={100}/>
                    </div>
                </div>
                

                {/* Mobile */}
                <div className="pt-5 md:hidden">
                    <div className="flex justify-between items-center w-full border-b-2 border-[#49839C] pl-5">
                        <Link href='/' className="">
                            <Image className="w-16 rounded-full bg-transparent" src='/logo.png' alt="logo" width={100} height={100}/>
                        </Link>
                        <div className="pr-5">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}