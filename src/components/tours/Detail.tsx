'use client'

import { customers } from "@lib/data"
import CustomerStatus from "./CustomerStatus"
import Participant from "./Participant"
import Whatsapp from "@components/Whatsapp"
import Email from "@components/Email"
import { IoIosAddCircle } from "react-icons/io"
import NewCustomerModal from "./NewCustomerModal"
import { toggleModal, selectModal } from "@redux/features/modalSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Detail({ params }: { params: { id: string } }) {
    const id = params.id

    const modalIsOpen = useSelector(selectModal)
    const dispatch = useDispatch()

    const handleToggleModal = () => {
        dispatch(toggleModal())
    }

    return (
        <section className="container mx-auto w-full rounded-xl bg-white md:p-10 p-5 pb-10 md:pb-20 border space-y-5">
            <div className="flex justify-end items-center gap-x-5">
                <h1 className="text-xl text-gray-600">New Customer</h1>
                <button className="focus:outline-none" onClick={handleToggleModal}>
                    <IoIosAddCircle className="text-6xl text-[#0F5E5A]"/>
                </button>
            </div>
            {modalIsOpen && <NewCustomerModal params={{ id }}/>}
            <div className="overflow-x-auto">
                <div className="min-w-max">
                    <table className="w-full text-gray-900 md:table bg-gray-200 rounded-xl">
                        <thead className="text-left">
                            <tr className="uppercase grid grid-cols-5 items-center text-gray-600">
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Name
                                </th>
                                <th scope="col" className="px-4 py-5 font-medium">
                                    Participant
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Source
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Check In
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white border">
                            {customers.map((customer) => (
                                customer.id === id && (
                                    <tr key={customer.customer_id} className="w-full border-b py-3 grid grid-cols-5">
                                        <td className="py-3 pl-6 pr-3">
                                            {customer.name}
                                        </td>
                                        <td className="px-3">
                                            <Participant participant={customer.participant}/>
                                        </td>
                                        <td className="px-3 flex items-center">
                                            {customer.source}
                                        </td>
                                        <td className="flex items-center">
                                            <CustomerStatus status={customer.status}/>
                                        </td>
                                        <td className="flex items-center px-10 gap-x-5 text-4xl">
                                            <Email email={customer.email} />
                                            <Whatsapp phoneNumber={customer.phone_number}/>
                                        </td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}