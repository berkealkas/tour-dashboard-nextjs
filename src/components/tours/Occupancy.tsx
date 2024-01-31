import clsx from "clsx"

export default function Occupancy({ customer, customerCheckIn }: { customer: number, customerCheckIn: number }) {
    return (
        <div className={clsx(
            'py-1 px-4 rounded-full',
            {
                'bg-emerald-300 text-emerald-900': customerCheckIn === customer || customerCheckIn >= 11,
                'bg-red-300 text-red-900': customerCheckIn >= 0 && customerCheckIn <= 5,
                'bg-yellow-200 text-yellow-900': customerCheckIn >= 6 && customerCheckIn <= 10,
            },
        )}
        >
            {customerCheckIn === customer ? (
                <>
                    Active
                </>
            ): null}
            {customerCheckIn >= 11 && customerCheckIn !== customer ? (
                <>
                    {customerCheckIn}/{customer}
                </>
            ): null}
            {customerCheckIn >= 6 && customerCheckIn <= 10 ? (
                <>
                    {customerCheckIn}/{customer}
                </>
            ): null}
            {customerCheckIn >= 0 && customerCheckIn <= 5 ? (
                <>
                    {customerCheckIn}/{customer}
                </>
            ): null}
        </div>
    )
}