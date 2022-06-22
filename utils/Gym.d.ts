type Gym = {
    name: string,
    address: {
        name: string,
        coordinates: [number, number],
    },
    operatingHours: {
        monday: OperatingHour[],
        tuesday: OperatingHour[],
        wednesday: OperatingHour[],
        thursday: OperatingHour[],
        friday: OperatingHour[],
        saturday: OperatingHour[],
        sunday: OperatingHour[],
        publicHolidays: OperatingHour[]
    },
    rates: {
        single: number,
        youth?: number,
        multipass: MultipassRate[],
        subscription: SubscriptionRate[],
        special: SpecialRate[]
    },
    rental: {
        shoes: number,
        socks: number
    }
}

type MultipassRate = {
    quantity: number,
    price: number,
    validity: number,
    shareable: boolean,
    terms?: string
}

type SubscriptionRate = {
    quantity: number,
    price: number,
    initiationCost: number,
    freezeCost: number
}

type SpecialRate = {
    name: string,
    quantity: number,
    price: number,
    description?: string
}

type OperatingHour = {
    open: string,
    close: string
}

export default Gym