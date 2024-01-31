'use client'

import { useState } from "react"
import { customers } from "@lib/data"
import { Customers } from "@lib/definition"
import { nanoid } from "@reduxjs/toolkit"

export default function AddCustomer({ params, handleToggleModal }: { params: { id: string }, handleToggleModal: { (): void }}) {
    const id = params.id

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [participant, setParticipant] = useState<number>(1)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newCustomer: Customers = {
            id: id,
            customer_id: nanoid(),
            name,
            phone_number: phoneNumber,
            email,
            participant,
            status: 'Check In' || 'Active' || 'No Show',
            source: 'Other',
        };

        customers.push(newCustomer);
        handleToggleModal()
    }
    

    return (
        <form className="flex flex-col gap-y-5 text-gray-600" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-3">
                <label>Name</label>
                <input 
                    type="text" 
                    required 
                    className="rounded-xl border-gray-300 focus:border-[#0F5E5A] focus:ring-[#0F5E5A]" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-y-3">
                <label>Phone Number</label>
                <input 
                    type="number" 
                    required 
                    className="rounded-xl border-gray-300 focus:border-[#0F5E5A] focus:ring-[#0F5E5A]" 
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-y-3">
                <label>E-Mail</label>
                <input 
                    type="email" 
                    required 
                    className="rounded-xl border-gray-300 focus:border-[#0F5E5A] focus:ring-[#0F5E5A]" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-y-3">
                <label>Participant</label>
                <input 
                    type="number" 
                    required 
                    className="rounded-xl border-gray-300 focus:border-[#0F5E5A] focus:ring-[#0F5E5A]" 
                    value={participant}
                    onChange={e => setParticipant(Number(e.target.value))}
                />
            </div>
            <button className="text-lg bg-[#0F5E5A] rounded-xl py-3 px-8 text-white" onSubmit={handleSubmit}>
                Save
            </button>
        </form>
    )
}