import Image from "next/image";
import { tours } from "@lib/data";
import Link from "next/link";
import Occupancy from "./Occupancy";
import { MdModeEdit } from "react-icons/md";

export default function TourTable() {
  return (
    <div className="container mx-auto w-full rounded-xl bg-white md:p-10 p-5 border">
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <table className="w-full text-gray-900 md:table bg-gray-200 rounded-xl">
            <thead className="text-left">
              <tr className="uppercase grid grid-cols-5 items-center text-gray-600">
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Activity
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Occupancy
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Guide
                </th>
              </tr>
            </thead>
            <tbody className="bg-white border">
              {tours.map((tour) => (
                <Link key={tour.id} href={`/tours/${tour.id}/detail`}>
                  <tr className="w-full border-b py-3 grid grid-cols-5">
                    <td className="py-3 pl-6 pr-3">
                      <div className="flex flex-col justify-center">
                        <h1>{tour.name}</h1>
                        <p className="text-gray-500">{tour.date} - {tour.time}</p>
                      </div>
                    </td>
                    <td className="px-3 flex items-center">
                      {tour.activity.type}
                    </td>
                    <td className="px-3 flex items-center">
                      <Occupancy customer={tour.customer} customerCheckIn={tour.customerCheckIn} />
                    </td>
                    <td className="px-3 flex items-center">
                      <div className="flex items-center justify-between gap-x-3">
                        <Image className="w-14 rounded-full" src={tour.image} alt="profile" width={100} height={100} />
                        <div className="flex flex-col">
                          <h1>{tour.guide}</h1>
                          <p className="text-gray-500">{tour.phoneNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="flex items-center justify-end px-10">
                      <Link href={`/tours/${tour.id}/edit`}>
                        <div className="text-3xl text-gray-500 border border-gray-300 rounded-xl p-2 hover:bg-gray-300 duration-300">
                          <MdModeEdit />
                        </div>
                      </Link>
                    </td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}