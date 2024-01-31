'use client'

import { FaWhatsappSquare } from "react-icons/fa";

export default function Whatsapp({ phoneNumber }: { phoneNumber: string }) {
    const handleMessage = () => {
        const formattedPhoneNumber = phoneNumber.replace(/[^\d]+/g, '')

        const whatsappLink = `https://wa.me/${formattedPhoneNumber}`
      
        window.open(whatsappLink, '_blank');
    }

    return (
        <button className="text-[#25D366]" onClick={handleMessage}>
            <FaWhatsappSquare />
        </button>
    )
}