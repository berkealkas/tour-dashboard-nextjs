import { SparkAreaChart } from "@tremor/react"

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

export default function Info() {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center md:gap-x-5 gap-y-5 font-bold">
            <div className="flex items-center justify-center rounded-3xl shadow-xl hover:scale-105 duration-300 w-11/12 lg:w-full py-8 bg-white">
                <div className="flex justify-center items-center w-full md:w-2/3">
                    <SparkAreaChart
                        data={chartdata}
                        categories={["Tour"]}
                        index={"month"}
                        colors={["green-700"]}
                        curveType="monotone"
                        className="w-10/12"
                    />
                </div>
                <div className="flex flex-col items-center w-full gap-y-2">
                    <h1 className="text-2xl md:text-2xl">Total Tour</h1>
                    <div className="flex items-center gap-x-5">
                        <h1 className="text-2xl md:text-2xl">15</h1>
                        <div className="flex justify-center w-20 md:w-28 py-2 rounded-lg bg-emerald-500 text-lg md:text-xl">
                            +2.45 %
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center rounded-3xl shadow-xl hover:scale-105 duration-300 w-11/12 lg:w-full py-8 bg-white">
                <div className="flex justify-center items-center w-full md:w-2/3">
                    <SparkAreaChart
                        data={chartdata}
                        categories={["Income"]}
                        index={"month"}
                        colors={["green-700"]}
                        curveType="monotone"
                        className="w-10/12"
                    />
                </div>
                <div className="flex flex-col items-center w-full gap-y-2">
                    <h1 className="text-2xl md:text-2xl">Total Income</h1>
                    <div className="flex items-center gap-x-5">
                        <h1 className="text-2xl md:text-2xl">$73k</h1>
                        <div className="flex justify-center w-20 md:w-28 py-2 rounded-lg bg-emerald-500 text-lg md:text-xl">
                            +3.23 %
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center rounded-3xl shadow-xl hover:scale-105 duration-300 w-11/12 lg:w-full py-8 bg-white">
                <div className="flex justify-center items-center w-full md:w-2/3">
                    <SparkAreaChart
                        data={chartdata}
                        categories={["Customer"]}
                        index={"month"}
                        colors={["green-700"]}
                        curveType="monotone"
                        className="w-10/12"
                    />
                </div>
                <div className="flex flex-col items-center w-full gap-y-2">
                    <h1 className="text-2xl lg:text-2xl">Total Customer</h1>
                    <div className="flex items-center gap-x-5">
                        <h1 className="text-2xl md:text-2xl">346</h1>
                        <div className="flex justify-center w-20 md:w-28 py-2 rounded-lg bg-emerald-500 text-lg md:text-xl">
                        +1.54 %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}