'use client'

import dayjs from 'dayjs'
import { TimePicker, ConfigProvider } from 'antd'

const format = 'HH:mm'

export default function Time({ time }: { time: string }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: '#0F5E5A',
          colorLinkHover: '#0F5E5A',
          colorPrimaryHover: '#0F5E5A',
        }
      }}
    >
      <TimePicker defaultValue={dayjs(time, format)} changeOnBlur={true} size='large' popupClassName='text-gray-600' format={format} className='p-3 rounded-xl text-gray-600 text-lg border-gray-400 border-2'/>
    </ConfigProvider>
  )
}