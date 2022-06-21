import Gym from "./Gym"

const gyms : Gym[] = [
    {
        name: 'Boulder Planet',
        operatingHours: {
            weekdays: {
                open: "10:00",
                close: "22:00"
            },
            weekends: {
                open: "10:00",
                close: "21:00"
            },
            publicHolidays: {
                open: "10:00",
                close: "21:00"
            }
        },
        rates: {
            single: 30,
            youth: 16,
            multipass: [
                {
                    quantity: 5,
                    cost: 125,
                    validity: 6
                },
                {
                    quantity: 10,
                    cost: 220,
                    validity: 6
                }
            ],
            subscription: [
                {
                    quantity: 4,
                    cost: 52,
                    initiationCost: 98,
                    freezeCost: 10
                }, 
                {
                    quantity: 8,
                    cost: 88,
                    initiationCost: 98,
                    freezeCost: 10
                }
            ]
        },
        rental: {
            shoes: 6,
            socks: 2
        }
    },
    {
        name: 'Boulder World',
        operatingHours: {
            weekdays: {
                open: "09:00",
                close: "23:00"
            },
            weekends: {
                open: "09:00",
                close: "21:00"
            },
            publicHolidays: {
                open: "09:00",
                close: "21:00"
            }
        },
        rates: {
            single: 25,
            youth: 18,
            multipass: [
                {
                    quantity: 5,
                    cost: 120,
                    validity: 6
                },
                {
                    quantity: 10,
                    cost: 200,
                    validity: 12
                }
            ],
            subscription: [
                {
                    quantity: -1,
                    cost: 90,
                    initiationCost: 100,
                    freezeCost: 10
                }, 
            ]
        },
        rental: {
            shoes: 6,
            socks: 2
        }
    }
]

export default function getGym(name: string) {
    const gym = gyms.find(gym => gym.name === name)

    if (gym) {
        return gym
    }

    return null
}