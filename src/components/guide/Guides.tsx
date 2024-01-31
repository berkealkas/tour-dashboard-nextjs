import { guides } from "@lib/data"
import Image from "next/image"
import Link from "next/link"

export default function Guides() {
    return (
        <div className="grid md:grid-cols-3 grid-cols-2 items-center place-items-center md:mx-60 gap-y-5">
            {guides.map((guide) => (
                <Link 
                    href={`/guide/${guide.id}/detail`} 
                    key={guide.id}
                    className="bg-white rounded-xl flex flex-col items-center justify-center md:p-16 p-10 gap-y-5 md:w-10/12 w-10/12 shadow-2xl hover:scale-105 duration-300" 
                >
                    <Image className="w-32 rounded-full" src={guide.image} alt="profile" width={100} height={100}/>
                    <h1 className="md:text-2xl text-xl text-center">{guide.name}</h1>
                </Link>
            ))}
        </div>
    )
}