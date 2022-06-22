import Gym from "../utils/Gym";
import Link from "next/link";

export default function GymDisplay(gym: Gym) {
    return (
        <div className="p-4 shadow-sm max-w-30">
            <Link href={`/gyms/${gym.name}`}><a><strong>{gym.name}</strong></a></Link>
            <p className="opacity-60">{gym.address.name}</p>
        </div>
    )
}