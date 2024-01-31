import Image from "next/image"
import { calendar } from "@lib/data"
import { IoIosAddCircle } from "react-icons/io"
import NewTourModal from "./NewTourModal"
import { toggleModal, selectModal } from "@redux/features/modalSlice"
import { useDispatch, useSelector } from "react-redux"


export default function CalendarInfo({ selectedDate }: { selectedDate: string }) {
    const modalIsOpen = useSelector(selectModal)
    const dispatch = useDispatch()

    const handleToggleModal = () => {
        dispatch(toggleModal())
    }

    const matchingTours = calendar.filter((tour) => tour.date === selectedDate);

    return (
        <div className="flex flex-col items-center justify-center pt-6 text-xl gap-y-5">
            {matchingTours.length > 0 ? (
                matchingTours.map((tour) => (
                    <div key={tour.date} className="grid lg:grid-cols-3 grid-cols-4 items-center rounded-xl w-full lg:w-11/12 py-7 bg-[#0F5E5A] text-white gap-x-5">
                        <div className="col-span-2 flex lg:flex-row flex-col lg:gap-y-0 gap-y-3 items-center lg:justify-around">
                            <h1 className="text-start">{tour.tour}</h1>
                            <div className="flex flex-col items-center justify-center">
                                <h1>{tour.date}</h1>
                                <h1>{tour.time}</h1>
                            </div>
                        </div>
                        <div className="lg:col-span-1 col-span-2 flex items-center gap-x-3">
                            <Image className="w-14 rounded-full" src={tour.image} alt="profile" width={100} height={100} />
                            <h1>{tour.guide}</h1>
                        </div>
                    </div>
                ))
            ) : (
                <button onClick={handleToggleModal} className="flex items-center justify-center bg-[#0F5E5A] rounded-xl py-4 w-full md:w-10/12">
                    <div className="flex items-center justify-center gap-x-10">
                        <h1 className="text-xl text-white">New Tour</h1>
                        <IoIosAddCircle className="text-6xl text-white"/>
                    </div>
                </button>
            )}
            {modalIsOpen && <NewTourModal />}
        </div>
    );
}