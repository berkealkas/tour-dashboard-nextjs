'use client'

import { BarChart, Card } from "@tremor/react"
import { useState } from "react"
      
const chartdata3 = [
  {
    date: "Jan",
    "Tour": 6,
    "Customer": 78,
  },
  {
    date: "Feb",
    "Tour": 5,
    "Customer": 71,
  },
  {
    date: "Mar",
    "Tour": 8,
    "Customer": 80,
  },
  {
    date: "Apr",
    "Tour": 6,
    "Customer": 65,
  },
  {
    date: "May",
    "Tour": 5,
    "Customer": 58,
  },
  {
    date: "Jun",
    "Tour": 6,
    "Customer": 62,
  },
  {
    date: "Jul",
    "Tour": 4,
    "Customer": 54,
  },
  {
    date: "Aug",
    "Tour": 4,
    "Customer": 49,
  },
  {
    date: "Sep",
    "Tour": 5,
    "Customer": 52,
  },
  {
    date: "Oct",
    "Tour": 8,
    "Customer": 78,
  },
  {
    date: "Nov",
    "Tour": 11,
    "Customer": 112,
  },
  {
    date: "Dec",
    "Tour": 10,
    "Customer": 92,
  },
];

export default function Bars() {
  const [value, setValue] = useState(null);

  return (
    <div className='w-full rounded-3xl shadow-xl bg-white'>
      <Card>
        <BarChart
          className="mt-6"
          data={chartdata3}
          showAnimation={true}
          index="date"
          categories={["Tour", "Customer"]}
          colors={["green-900", "rose-700"]}
          yAxisWidth={30}
          onValueChange={(v: any) => setValue(v)}
        />
      </Card>
    </div>
  );
}