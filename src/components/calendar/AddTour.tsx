'use client'

import { useState } from "react"
import { Calendar } from "@lib/definition"
import { calendar } from "@lib/data"

export default function AddTour({ handleToggleModal }:{ handleToggleModal: { (): void }}) {
    const [tour, setTour] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guide, setGuide] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newCustomer: Calendar = {
            tour,
            date,
            time,
            guide,
            image
        };

        calendar.push(newCustomer);
        handleToggleModal()
    }
    

    return (
        <form className="flex flex-col gap-y-5 text-gray-600" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-3">
                <label>Tour</label>
                <input 
                    type="text" 
                    required 
                    className="rounded-xl border-gray-300 focus:border-[#0F5E5A] focus:ring-[#0F5E5A]" 
                    value={tour}
                    onChange={e => setTour(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-y-3">
                <label>Date</label>
                <input 
                    required 
                    className="rounded-xl border-gray-300 focus:border-[#0F5E5A] focus:ring-[#0F5E5A]" 
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-y-3">
                <label>Time</label>
                <input 
                    required 
                    className="rounded-xl border-gray-300 focus:border-[#0F5E5A] focus:ring-[#0F5E5A]" 
                    value={time}
                    onChange={e => setTime(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-y-3">
                <label>Guide</label>
                <input 
                    type="number" 
                    required 
                    className="rounded-xl border-gray-300 focus:border-[#0F5E5A] focus:ring-[#0F5E5A]" 
                    value={guide}
                    onChange={e => setGuide(e.target.value)}
                />
            </div>
            <button className="text-lg bg-[#0F5E5A] rounded-xl py-3 px-8 text-white" onSubmit={handleSubmit}>
                Save
            </button>
        </form>
    )
}