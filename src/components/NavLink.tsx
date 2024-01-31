'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLinkProps = {
    href: string
    children: React.ReactNode
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const pathname = usePathname()
    
    return (
        <Link href={href} className={`${pathname === `${href}` ? 'bg-[#9E173A] rounded-lg py-2 px-5' : ' hover:text-slate-300'}`}>
            {children}
        </Link>
    )
}