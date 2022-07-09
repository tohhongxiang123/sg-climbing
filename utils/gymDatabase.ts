import Gym from "./Gym";

const gyms: Gym[] = [
    {
        name: 'b8a',
        website: 'https://www.b8a.sg/',
        address: {
            name: "03-06, 6 Tampines Street 92, yo:HA Commercial @ Tampines, 528893",
            coordinates: [1.3508394802849033, 103.94126322912477]
        },
        operatingHours: {
            monday: [{ open: '12:00', close: '22:30' }],
            tuesday: [{ open: '12:00', close: '22:30' }],
            wednesday: [{ open: '12:00', close: '22:30' }],
            thursday: [{ open: '12:00', close: '22:30' }],
            friday: [{ open: '12:00', close: '22:30' }],
            saturday: [{ open: '10:00', close: '18:00' }],
            sunday: [{ open: '10:00', close: '21:00' }],
            publicHolidays: [{ open: '10:00', close: '21:00' }],
        },
        rates: {
            single: 22,
            youth: {
                price: 15,
                ageLimit: 22
            },
            multipass: [
                {
                    quantity: 5,
                    price: 93,
                    validity: 6,
                    shareable: true
                },
                {
                    quantity: 10,
                    price: 158,
                    validity: 12,
                    shareable: true
                }
            ],
            subscription: {
                initiationCost: 88,
                freezeCost: 10,
                plans: [{
                    price: 88,
                    quantity: -1,
                }]
            },
            special: [
                {
                    name: "U-21 5-Pack",
                    quantity: 5,
                    price: 68,
                    description: "Youth multipass"
                },
                {
                    name: "Off-peak Single Entry",
                    quantity: 1,
                    price: 15,
                    description: "Off peak session between 12:00 - 18:00, only weekdays (non-PH)"
                }
            ]
        },
        rental: {
            shoes: 5,
            socks: 2,
        }
    },
    {
        name: "BFF Bendemeer",
        website: "https://bffclimb.com/",
        address: {
            name: "2 Kallang Ave, #01-20 CT hub, Singapore 339407",
            coordinates: [1.3135410702701462, 103.8631971]
        },
        operatingHours: {
            monday: [{ open: "09:30", close: "10:45" }],
            tuesday: [{ open: "09:30", close: "10:45" }],
            wednesday: [{ open: "09:30", close: "10:45" }],
            thursday: [{ open: "09:30", close: "10:45" }],
            friday: [{ open: "09:30", close: "10:45" }],
            saturday: [{ open: "09:30", close: "10:45" }],
            sunday: [{ open: "09:30", close: "10:45" }],
            publicHolidays: [{ open: "09:30", close: "10:45" }],
        },
        rates: {
            single: 25,
            youth: {
                price: 16, ageLimit: 19, terms: "Only on weekdays 09:30 - 18:00"
            },
            multipass: [
                {
                    quantity: 5,
                    price: 110,
                    validity: 12,
                    shareable: true,
                },
                {
                    quantity: 10,
                    price: 190,
                    validity: 12,
                    shareable: true,
                },
            ],
            subscription: {
                initiationCost: 100,
                freezeCost: 10,
                plans: [{
                    quantity: -1,
                    price: 100,
                    terms: "Only for BFF Bendemeer"
                }, {
                    quantity: -1,
                    price: 130,
                    terms: "For both BFF Bendemeer and BFF Bukit Timah"
                }]
            },
            special: []
        },
        rental: {
            shoes: 5,
        }
    },
    {
        name: 'Boulder Planet',
        website: 'https://www.boulderplanet.sg/',
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
            youth: {
                price: 16,
                ageLimit: 18,
                terms: "Applicable only between 10:00 - 18:45 on weekdays"
            },
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
            subscription: {
                initiationCost: 98,
                freezeCost: 10,
                plans: [{
                    price: 52, quantity: 4
                }, {
                    price: 88, quantity: 8
                }]
            },
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
        website: 'https://www.boulderworld.com/',
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
            youth: {
                price: 18,
                ageLimit: 18,
            },
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
            subscription: {
                initiationCost: 100,
                freezeCost: 10,
                plans: [{
                    price: 90, quantity: -1
                }]
            },
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
        website: 'https://www.boulderm.com/',
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
            subscription: null,
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
    },
    {
        name: 'Kinetics Climbing',
        website: 'https://www.kineticsclimbing.com.sg/',
        address: {
            name: "511 Serangoon Road, Singapore 218153",
            coordinates: [1.3203857702557942, 103.85712151643206]
        },
        operatingHours: {
            monday: [{ open: "16:00", close: "22:00" }],
            tuesday: [{ open: "13:00", close: "22:00" }],
            wednesday: [{ open: "13:00", close: "22:00" }],
            thursday: [{ open: "13:00", close: "22:00" }],
            friday: [{ open: "13:00", close: "22:00" }],
            saturday: [{ open: "10:00", close: "19:00" }],
            sunday: [{ open: "10:00", close: "19:00" }],
            publicHolidays: [{ open: "10:00", close: "19:00" }]
        },
        rates: {
            single: 19,
            youth: {
                price: 15,
                ageLimit: 22,
                terms: "Only applicable until 19:00. Not applicable on weekends/public holidays"
            },
            multipass: [
                {
                    price: 85,
                    quantity: 5,
                    validity: 12,
                    shareable: true,
                },
                {
                    price: 150,
                    quantity: 10,
                    validity: 12,
                    shareable: true,
                },
            ],
            subscription: {
                initiationCost: 0,
                freezeCost: 0,
                plans: [{
                    price: 110, quantity: -1, terms: "$250 for first 2 months"
                }]
            },
            special: []
        },
        rental: {
            socks: 2,
            shoes: 5,
            locker: 1,
            harness: 4,
            belayDeviceKit: 4
        }
    }
]

export default gyms