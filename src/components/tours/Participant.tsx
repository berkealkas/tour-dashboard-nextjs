'use client'

import { useState } from "react"

export default function Participant({ participant }: { participant: number }) {
    const [participantCount, setParticipantCount] = useState(participant)

    const handleIncrement = () => {
        setParticipantCount(participantCount + 1)
    }

    const handleDecrement = () => {
        if (participantCount > 1)
            setParticipantCount(participantCount - 1)
    }

    return (
        <div className="flex items-center gap-x-5">
            <button onClick={handleDecrement} className="w-7 text-xl rounded-xl text-gray-600 border border-gray-400 hover:bg-gray-200 duration-300 focus:outline-none">-</button>
            <input className="w-10 rounded-xl text-gray-600 text-center border-gray-400" type="tel" value={participantCount} onChange={e => (e.target.value)}/>
            <button onClick={handleIncrement} className="w-7 text-xl rounded-xl text-gray-600 border border-gray-400 hover:bg-gray-200 duration-300 focus:outline-none">+</button>
        </div>
    )
}