import { guides } from "@lib/data"
import Image from "next/image"
import { SparkAreaChart } from "@tremor/react"
import Whatsapp from "@components/Whatsapp"
import Email from "@components/Email"

export const chartdata = [
    {
        month: "Jan 21",
        Customer: 100,
        Income: 4000,
        Tour: 15
    },
    {
        month: "Feb 21",
        Customer: 300,
        Income: 7863,
        Tour: 25
    },
    {
        month: "Mar 21",
        Customer: 200,
        Income: 7123,
        Tour: 20
    },
    {
        month: "Apr 21",
        Customer: 278,
        Income: 8060,
        Tour: 28
    },
    {
        month: "May 21",
        Customer: 189,
        Income: 6421,
        Tour: 21
    },
    {
        month: "Jun 21",
        Customer: 239,
        Income: 8652,
        Tour: 26
    },
    {
        month: "Jul 21",
        Customer: 349,
        Income: 9321,
        Tour: 30
    },
    {
        month: "Aug 21",
        Customer: 412,
        Income: 11325,
        Tour: 34
    },
    {
        month: "Sep 21",
        Customer: 374,
        Income: 8624,
        Tour: 28
    },
    {
        month: "Oct 21",
        Customer: 456,
        Income: 13542,
        Tour: 36
    },
    {
        month: "Nov 21",
        Customer: 364,
        Income: 10325,
        Tour: 31
    },
    {
        month: "Dec 21",
        Customer: 319,
        Income: 9567,
        Tour: 29
    },
];

export default function GuideDetail({ params }: { params: { id: string }}) {
    const id = params.id

    return (
        <div className="container mx-auto w-full grid md:grid-cols-3 grid-cols-1 gap-y-10 items-center md:gap-x-5 px-5 md:px-0 h-full">
            {guides.map((guide) => (
                guide.id === id && (
                    <div key={guide.id} className="flex flex-col justify-center items-center bg-white rounded-xl px-10 py-6 shadow-2xl gap-y-5 w-full">
                        <Image className="w-32 rounded-full" src={guide.image} alt="profile" width={100} height={100}/>
                        <div className="flex flex-col gap-y-5 items-center justify-center text-xl text-gray-600">
                            <h1>{guide.name}</h1>
                            <p>{guide.phoneNumber}</p>
                            <div className="flex justify-center items-center gap-x-5 text-5xl">
                                <Whatsapp phoneNumber={guide.phoneNumber}/>
                                <Email email={guide.email}/>
                            </div>
                        </div>
                    </div>
                )
            ))}
            <div className="flex flex-col items-center justify-center col-span-2 rounded-xl shadow-2xl h-full px-10 py-10 md:py-0 gap-y-14 bg-white">
                <div className="flex items-center justify-center w-full md:gap-x-20 gap-x-10">
                    <div className="flex flex-col text-start w-1/2 gap-y-2 text-2xl">
                        <h1 className="">Total Tour</h1>
                        <div className="flex items-center gap-x-5">
                            <h1>15</h1>
                            <div className="flex justify-center w-20 md:w-28 py-2 rounded-lg bg-emerald-500 text-lg md:text-xl">
                                +2.45 %
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <SparkAreaChart
                            data={chartdata}
                            categories={["Tour"]}
                            index={"month"}
                            colors={["green-700"]}
                            curveType="monotone"
                            className="w-full h-20"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full md:gap-x-20 gap-x-10">
                    <div className="flex flex-col text-start w-1/2 gap-y-2 text-2xl">
                        <h1 className="">Total Customer</h1>
                        <div className="flex items-center gap-x-5">
                            <h1>267</h1>
                            <div className="flex justify-center w-20 md:w-28 py-2 rounded-lg bg-emerald-500 text-lg md:text-xl">
                                +2.73 %
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <SparkAreaChart
                            data={chartdata}
                            categories={["Customer"]}
                            index={"month"}
                            colors={["green-700"]}
                            curveType="monotone"
                            className="w-full h-20"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}