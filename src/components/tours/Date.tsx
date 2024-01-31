'use client'

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs'


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

export default function Date({ date }: { date: string }) {
    return (
        <Space direction="vertical">
            <DatePicker defaultValue={dayjs(date)} size='large' onChange={onChange} className='p-3 rounded-xl border-gray-400 border-2'/>
        </Space>
    )
}

