import GuideDetail from "@components/guide/GuideDetail"

export default function Detail({ params }: { params: { id: string }}) {
    const id = params.id
    return (
        <section className="relative mt-16 min-h-screen bg-[#F8F8F8] w-full">
            <div className="bg-[#0F5E5A] pb-52 pt-20">
                <div className="w-full absolute top-28">
                    <GuideDetail params={{ id }}/>
                </div>
            </div>
        </section>
    )
}