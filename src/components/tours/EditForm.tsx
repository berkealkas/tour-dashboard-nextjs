import { tours } from "@lib/data"
import Activity from "./Activity"
import Date from "./Date"
import Time from "./Time"
import GuidePicker from "./GuidePicker"

export default function EditForm({ params }: { params: { id: string } }) {
    const id = params.id

    return (
        <div className="container mx-auto w-full rounded-xl bg-white p-10">
            {tours.map((tour) => (
                tour.id === id && (
                    <form key={tour.id} className="grid md:grid-cols-2 grid-cols-1 place-items-center items-start gap-y-10">
                        <div className="flex flex-col justify-center md:items-center items-start w-full gap-y-3">
                            <label className="text-xl text-gray-600 w-2/3 pl-1">Title</label>
                            <input type="text" className="rounded-xl focus:border-[#0F5E5A] border-gray-400 text-gray-600 border-2 focus:ring-0 w-2/3" defaultValue={tour.name} />
                        </div>
                        <div className="flex flex-col justify-center md:items-center items-start w-full gap-y-3">
                            <label className="text-xl text-gray-600 w-2/3 pl-1">Activities</label>
                            <Activity activity={tour.activity.type} />
                        </div>
                        <div className="flex justify-start md:items-start md:w-2/3 w-full items-start gap-x-6">
                            <div className="flex flex-col justify-center items-start gap-y-3 w-1/2">
                                <label className="text-xl text-gray-600 pl-1">Date</label>
                                <Date date={tour.date} />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-y-3">
                                <label className="text-xl text-gray-600 pl-1">Time</label>
                                <Time time={tour.time} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center md:items-center items-start w-full gap-y-3">
                            <label className="text-xl text-gray-600 w-2/3 pl-1">Occupancy</label>
                            <input type="tel" className="rounded-xl focus:border-[#0F5E5A] border-gray-400 text-gray-600 border-2 focus:ring-0 w-2/3" defaultValue={tour.customer} />
                        </div>
                        <div className="flex flex-col justify-center md:items-center items-start w-full gap-y-3">
                            <label className="text-xl text-gray-600 w-2/3 pl-1">Guide</label>
                            <GuidePicker guide={tour.guide} />
                        </div>
                        <div className="flex justify-center items-center w-1/2 mt-9 pr-2">
                            <button className="text-lg bg-[#0F5E5A] rounded-xl py-3 px-8 text-white">Save</button>
                        </div>
                    </form>
                )
            ))}
        </div>
    )
}