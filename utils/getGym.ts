import gyms from './gymDatabase'

export default function getGym(name: string) {
    const gym = gyms.find(gym => gym.name === name)

    if (gym) {
        return gym
    }

    return null
}