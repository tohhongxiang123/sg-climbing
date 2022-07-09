type Gym = {
    name: string,
    website: string,
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
        youth?: YouthRate,
        multipass: MultipassRate[],
        subscription: SubscriptionRate | null,
        special: SpecialRate[],
        membershipFee?: number,
        registrationFree?: number,
    },
    rental: {
        shoes: number,
        socks?: number,
        locker?: number,
        harness?: number,
        belayDeviceKit?: number
    }
}

type YouthRate = {
    price: number,
    ageLimit: number,
    terms?: string | null
}

type MultipassRate = {
    quantity: number,
    price: number,
    validity: number,
    shareable: boolean,
    terms?: string
}

type SubscriptionRate = {
    plans: { price: number, quantity: number, terms?: string }[],
    initiationCost: number,
    freezeCost: number,
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