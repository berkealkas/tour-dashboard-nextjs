import EditForm from "@components/tours/EditForm"

export default function EditTour({ params }: { params: { id: string }}) {
    return (
        <div className="relative mt-16 min-h-screen bg-[#F8F8F8] w-full">
            <div className="bg-[#0F5E5A] pb-52 pt-20 text-white">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold pl-5 md:pl-0">Edit</h1>
                </div>
            </div>
            <div className="w-full absolute top-44">
                <EditForm params={params}/>
            </div>
        </div>
    )
}