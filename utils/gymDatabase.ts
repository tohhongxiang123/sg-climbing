import Gym from "./Gym";

const gyms: Gym[] = [
    {
        name: 'Boulder Planet',
        operatingHours: {
            monday: [{
                open: "10:00",
                close: "22:00"
            }],
            tuesday: [{
                open: "10:00",
                close: "22:00"
            }],
            wednesday: [{
                open: "10:00",
                close: "22:00"
            }],
            thursday: [{
                open: "10:00",
                close: "22:00"
            }],
            friday: [{
                open: "10:00",
                close: "22:00"
            }],
            saturday: [{
                open: "10:00",
                close: "21:00"
            }],
            sunday: [{
                open: "10:00",
                close: "21:00"
            }],
            publicHolidays: [{
                open: "10:00",
                close: "21:00"
            }]
        },
        rates: {
            single: 30,
            youth: 16,
            multipass: [
                {
                    quantity: 5,
                    price: 125,
                    validity: 6,
                    shareable: true,
                    terms: "Shareable with 6 climbers"
                },
                {
                    quantity: 10,
                    price: 220,
                    validity: 6,
                    shareable: true,
                    terms: "Shareable with 6 climbers"
                }
            ],
            subscription: [
                {
                    quantity: 4,
                    price: 52,
                    initiationCost: 98,
                    freezeCost: 10
                },
                {
                    quantity: 8,
                    price: 88,
                    initiationCost: 98,
                    freezeCost: 10
                }
            ],
            special: []
        },
        rental: {
            shoes: 6,
            socks: 2
        },
        address: {
            name: "604 Sembawang Rd, #B1-22/23 Sembawang Shopping Centre, Singapore 758459",
            coordinates: [1.4422963603265226, 103.82506769763408]
        }
    },
    {
        name: 'Boulder World',
        operatingHours: {
            monday: [{
                open: "09:00",
                close: "23:00"
            }],
            tuesday: [{
                open: "09:00",
                close: "23:00"
            }],
            wednesday: [{
                open: "09:00",
                close: "23:00"
            }],
            thursday: [{
                open: "09:00",
                close: "23:00"
            }],
            friday: [{
                open: "09:00",
                close: "23:00"
            }],
            saturday: [{
                open: "09:00",
                close: "21:00"
            }],
            sunday: [{
                open: "09:00",
                close: "21:00"
            }],
            publicHolidays: [{
                open: "09:00",
                close: "21:00"
            }]
        },
        rates: {
            single: 25,
            youth: 18,
            multipass: [
                {
                    quantity: 5,
                    price: 120,
                    shareable: true,
                    validity: 6,
                    terms: "Multipass holder must be present"
                },
                {
                    quantity: 10,
                    price: 200,
                    validity: 12,
                    shareable: true,
                    terms: "Multipass holder must be present"
                },
            ],
            subscription: [
                {
                    quantity: -1,
                    price: 90,
                    initiationCost: 100,
                    freezeCost: 10
                },
            ],
            special: []
        },
        rental: {
            shoes: 6,
            socks: 2
        },
        address: {
            name: "10 Eunos Road 8, SingPost Centre",
            coordinates: [1.3200873391391055, 103.89476508465924],
        }
    },
    {
        name: 'Boulder Movement Downtown',
        address: {
            name: "6A Shenton Way #B1-03 Downtown Gallery, 068815",
            coordinates: [1.278269106069371, 103.8492014746233]
        },
        rates: {
            single: 30,
            multipass: [
                {
                    quantity: 5,
                    price: 135,
                    validity: 3,
                    shareable: true
                },
            ],
            subscription: [],
            special: [{
                name: "Experience BM (First-timers)",
                quantity: 3,
                price: 59,
                description: "59 for 3 passes for first-timers, complimentary climbing shoes rental on your first visit"
            }]
        },
        rental: {
            shoes: 5,
            socks: 2
        },
        operatingHours: {
            monday: [{
                open: '17:30',
                close: '22:00'
            }],
            tuesday: [{
                open: '12:00',
                close: '16:30'
            }, {
                open: '17:30',
                close: '22:00'
            }],
            wednesday: [{
                open: '12:00',
                close: '16:30'
            }, {
                open: '17:30',
                close: '22:00'
            }],
            thursday: [{
                open: '12:00',
                close: '16:30'
            }, {
                open: '17:30',
                close: '22:00'
            }],
            friday: [{
                open: '12:00',
                close: '16:30'
            }, {
                open: '17:30',
                close: '22:00'
            }],
            saturday: [{
                open: '10:00',
                close: '14:30'
            }, {
                open: '15:30',
                close: '20:00'
            }],
            sunday: [{
                open: '10:00',
                close: '14:30'
            }, {
                open: '15:30',
                close: '20:00'
            }],
            publicHolidays: [{
                open: '10:00',
                close: '14:30'
            }, {
                open: '15:30',
                close: '20:00'
            }],
        }
    }
]

export default gyms