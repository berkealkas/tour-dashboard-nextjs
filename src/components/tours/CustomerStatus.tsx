'use client'

import clsx from "clsx"

export default function CustomerStatus({ status }: { status: string }) {
    return (
        <div className={clsx(
            'py-1 px-4 rounded-full',
            {
                'bg-emerald-300 text-emerald-900': status === 'Active',
                'bg-gray-300 text-black': status === 'No Show',
                'bg-yellow-200 text-yellow-900': status === 'Check In',
            },
        )}
        >
            {status === 'Active' && <>Active</>}
            {status === 'No Show' && <>No Show</>}
            {status === 'Check In' && <>Check In</>}
        </div>
    )
}