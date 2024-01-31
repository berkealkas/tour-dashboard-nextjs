import Calendar from "@components/calendar/Calendar"

export default function CalendarPage() {
    return (
        <section className="relative mt-16 min-h-screen bg-[#F8F8F8] w-full">
            <div className="bg-[#0F5E5A] pb-52 pt-20 text-white">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold pl-5 md:pl-0">Calendar</h1>
                </div>
            </div>
            <div className="w-full absolute top-44">
                <Calendar />
            </div>
        </section>
    )
}