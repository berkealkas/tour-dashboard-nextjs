import Info from "@components/dashboard/Info"
import Schedule from "@components/dashboard/Schedule"
import Bars from "@components/dashboard/Bars"

export default function Home() {
  return (
    <section className="relative mt-16 min-h-screen bg-[#F8F8F8] pb-14">
      <div className="bg-[#0F5E5A] pb-36 pt-16 text-white pl-5 md:pl-0">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>
      </div>
      <div className="absolute top-40 w-full">
        <Info />
      </div>
      <div className="mt-96 md:mt-[430px] lg:mt-32 flex flex-col container mx-auto gap-y-5">
        <Schedule /> 
        <Bars />
      </div>
    </section>
  )
}