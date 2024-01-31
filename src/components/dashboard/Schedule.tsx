'use client'

import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "@util/calendar";
import cn from "@util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ScheduleInfo from "./ScheduleInfo";
import { calendar } from "@lib/data";


export default function Schedule() {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

	// const date = dayjs(selectDate).subtract(0 ,'month').format('DD.MM.YYYY')
	const selectedDate = (dayjs(selectDate).format('DD.MM.YYYY'))

	const tourDates = calendar.map((item) => item.date);
	return (
		<div className="mx-auto container shadow-xl flex flex-col lg:flex-row justify-between items-center gap-x-10 md:gap-x-0 gap-y-10 md:gap-y-0 py-10 px-7 md:px-14 mt-10 md:mt-0 rounded-xl bg-white">
			<div className="w-full">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className="cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 place-items-center">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 py-8 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className="grid grid-cols-7">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							const isTourDay = tourDates.some((tourDate) => dayjs(date.format('DD.MM.YYYY')).isSame(dayjs(tourDate, 'DD.MM.YYYY'), 'day'));
							return (
								<div
									key={index}
									className="text-center h-14 grid py-8 place-content-center text-sm"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today ? "bg-[#0F5E5A] text-white" : "",
											selectDate.toDate().toDateString() === date.toDate().toDateString()
												? "bg-[#0F5E5A] text-white"
												: "",
											isTourDay ? "bg-[#0F5E5A] text-white" : "",
											"relative h-10 w-12 md:w-10 lg:w-14 xl:w-20 rounded-xl py-6 grid place-content-center hover:bg-[#0F5E5A] hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										<div className={`${isTourDay && 'absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600'}`}></div>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
			<div className="w-full">
				<ScheduleInfo selectedDate={selectedDate}/>
			</div>
		</div>
	);
}