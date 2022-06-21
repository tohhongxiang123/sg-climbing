import getGym from './getGym'

describe("Get Gyms", () => {
    test("Returns 1 gym", () => {
        const gym = getGym("Boulder Planet")

        expect(gym).not.toBeUndefined()
    })

    test("Returns null if gym is not found", () => {
        const gym = getGym("Non-existent Gym")
        expect(gym).toBeNull()
    })
})