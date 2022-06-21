type Gym = {
    name: string,
    operatingHours: {
        weekdays: {
            open: string,
            close: string,
        },
        weekends: {
            open: string,
            close: string,
        },
        publicHolidays: {
            open: string,
            close: string
        }
    },
    rates: {
        single: number,
        youth: number,
        multipass: MultipassRate[],
        subscription: SubscriptionRate[]
    },
    rental: {
        shoes: number,
        socks: number
    }
}

type MultipassRate = {
    quantity: number,
    cost: number,
    validity: number
}

type SubscriptionRate = {
    quantity: number,
    cost: number,
    initiationCost: number,
    freezeCost: number
}

export default Gym