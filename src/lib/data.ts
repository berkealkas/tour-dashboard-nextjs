export const activities = [
    {type: 'Hiking'},
    {type: 'City Tour'},
    {type: 'Boat Trip'},
    {type: 'Cruise'},
]

export const guides = [
    {
        id: '1',
        name: 'Sam Sulek',
        image: '/profile.png',
        phoneNumber: '+33 584 934 325 583',
        email: 'test@gmail.com',
    },
    {
        id: '2',
        name: 'Elizabeth Olsen',
        image: '/profile2.png',
        phoneNumber: '+33 584 934 325 123',
        email: 'test@gmail.com',
    },
    {
        id: '3',
        name: 'Chris Evans',
        image: '/profile3.png',
        phoneNumber: '+33 584 934 325 517',
        email: 'test@gmail.com',
    },
    {
        id: '4',
        name: 'Alex Eubank',
        image: '/profile4.png',
        phoneNumber: '+33 584 934 325 517',
        email: 'test@gmail.com',
    },
]

export const tours = [
    {
        id: '1',
        name: 'Alps',
        activity: activities[0],
        date: '03.01.2024',
        time: '03.12',
        customer: 20,
        customerCheckIn: 12,
        image: guides[0].image,
        guide: guides[0].name,
        phoneNumber: guides[0].phoneNumber
    },
    {
        id: '2',
        name: 'Istanbul Tour',
        activity: activities[1],
        date: '11.02.2024',
        time: '12.30',
        customer: 20,
        customerCheckIn: 8,
        image: guides[1].image,
        guide: guides[1].name,
        phoneNumber: guides[1].phoneNumber
    },
    {
        id: '3',
        name: 'Antalya Tour',
        activity: activities[2],
        date: '07.01.2024',
        time: '12.30',
        customer: 20,
        customerCheckIn: 2,
        image: guides[2].image,
        guide: guides[2].name,
        phoneNumber: guides[2].phoneNumber
    },
    {
        id: '4',
        name: 'Istanbul Bosphorus',
        activity: activities[3],
        date: '12.02.2024',
        time: '12.30',
        customer: 20,
        customerCheckIn: 20,
        image: guides[3].image,
        guide: guides[3].name,
        phoneNumber: guides[3].phoneNumber
    },
]

export const calendar = [
    {
        tour: tours[0].name,
        date: tours[0].date,
        time: tours[0].time,
        guide: guides[0].name,
        image: guides[0].image,
    },
    {
        tour: tours[2].name,
        date: tours[2].date,
        time: tours[2].time,
        guide: guides[2].name,
        image: guides[2].image,
    },
    {
        tour: tours[1].name,
        date: tours[1].date,
        time: tours[1].time,
        guide: guides[1].name,
        image: guides[1].image,
    },
    {
        tour: tours[3].name,
        date: tours[3].date,
        time: tours[3].time,
        guide: guides[3].name,
        image: guides[3].image,
    },
]

export const customers = [
    {
        id: tours[0].id,
        customer_id: '1',
        name: 'Chris Bumstead',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'viabam',
        participant: 1,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[0].id,
        customer_id: '2',
        name: 'Larry Wheels',
        status: 'Active' || 'Check In' || 'No Show',
        source: 'Civitatis',
        participant: 4,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[0].id,
        customer_id: '3',
        name: 'Ronnie Coleman',
        status: 'No Show' || 'Active' || 'Check In',
        source: 'GuruWalk',
        participant: 2,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[0].id,
        customer_id: '4',
        name: 'Tom Platz',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'viabam',
        participant: 5,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[1].id,
        customer_id: '5',
        name: 'Chris',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'Civitatis',
        participant: 3,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[1].id,
        customer_id: '6',
        name: 'Larry',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'viabam',
        participant: 1,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[1].id,
        customer_id: '7',
        name: 'Ronnie ',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'GuruWalk',
        participant: 2,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[1].id,
        customer_id: '8',
        name: 'Tom ',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'viabam',
        participant: 1,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[2].id,
        customer_id: '7',
        name: 'Ronnie ',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'GuruWalk',
        participant: 2,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[2].id,
        customer_id: '8',
        name: 'Tom ',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'viabam',
        participant: 1,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[3].id,
        customer_id: '7',
        name: 'Ronnie ',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'GuruWalk',
        participant: 2,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
    {
        id: tours[3].id,
        customer_id: '8',
        name: 'Tom ',
        status: 'Check In' || 'Active' || 'No Show',
        source: 'viabam',
        participant: 1,
        phone_number: '+33 584 934 325 583',
        email: 'test@gmail.com'
    },
]