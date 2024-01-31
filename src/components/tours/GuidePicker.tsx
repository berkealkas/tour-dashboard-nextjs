'use client'

import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { RiExpandUpDownLine } from "react-icons/ri"
import { IoMdCheckmark } from "react-icons/io"
import { tours } from '@lib/data'
import Image from 'next/image'


export default function GuidePicker({ guide }: { guide: string }) {
  const [selected, setSelected] = useState(guide)

  return (
    <div className="rounded-xl focus:border-[#0F5E5A] border-gray-400 text-gray-600 border-2 focus:ring-0 w-2/3 p-1">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button className="relative w-full cursor-default rounded-xl bg-white py-2 pl-3 pr-10 text-left focus:outline-none sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <RiExpandUpDownLine
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 z-40 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {tours.map((tour, tourIdx) => (
                <Listbox.Option
                  key={tourIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-emerald-200 text-[#0F5E5A]' : 'text-gray-600'
                    }`
                  }
                  value={tour.guide}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`truncate flex items-center gap-x-2 ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        <Image className='w-10 rounded-full' alt='profile' src={tour.image} width={100} height={100}/>
                        {tour.guide}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#0F5E5A]">
                          <IoMdCheckmark className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
