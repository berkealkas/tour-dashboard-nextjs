export interface Customers {
    id: Tours['id']
    customer_id: string
    name: string
    phone_number: string
    email: string
    source: string
    participant: number
    status: string
}

export interface Tours {
    id: string
    name: string
    activity: Activities['type']
    date: string
    time: string
    customer: number
    customerCheckIn: number
    image: Guides['image']
    guide: Guides['name']
    phoneNumber: Guides['phoneNumber']
}

export interface Guides {
    id: string
    name: string
    image: string
    phoneNumber: string
}

export interface Activities {
    type: string
}

export interface Calendar {
    tour: Tours['name']
    date: Tours['date']
    time: Tours['time']
    guide: Tours['guide']
    image: Tours['image']
}