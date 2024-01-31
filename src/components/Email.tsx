'use client'

import { IoMdMail } from "react-icons/io";

export default function Email({ email }: { email: string }) {
    const handleEmail = () => {
        const emailLink = `mailto:${email}`

        window.location.href = emailLink
    }

    return (
        <button className="text-[#127CD6]" onClick={handleEmail}>
            <IoMdMail />
        </button>
    )
}