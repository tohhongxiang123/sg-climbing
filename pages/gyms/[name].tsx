import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import Head from "next/head"
import React from "react"
import getAllGyms from "../../utils/getAllGyms"
import getGym from "../../utils/getGym"

export default function GymPage({ gym }: InferGetStaticPropsType<typeof getStaticProps>) {
    if (!gym) {
        return (
            <div>
                <h1>Gym not found</h1>
            </div>
        )
    }

    const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(${encodeURIComponent(gym.name)})&t=&z=17&ie=UTF8&iwloc=B&output=embed`
    return (
        <div className="p-4">
            <Head>
                <title>{gym.name}</title>
            </Head>
            <section className="p-4 mb-4 border-b-2">
                <h1 className="text-3xl font-medium"><a href={gym.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{gym.name}</a></h1>
                <p className="opacity-70 font-semibold">{gym.address.name}</p>
            </section>
            <div className="flex flex-wrap justify-center">
                <section className="p-4 grow">
                    <h2 className="text-xl font-bold">Operating Hours</h2>
                    <ul>
                        {Object.entries(gym.operatingHours).map(([day, operatingHours]) => {
                            return (
                                <li key={day} className="flex justify-between gap-4 w-full">
                                    <p>{formatDay(day)}</p>
                                    <p>{operatingHours.map((operatingHour) => `${operatingHour.open} - ${operatingHour.close}`).join(" / ")}</p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                <section className="p-4 grow">
                    <h2 className="text-xl font-bold">Rates</h2>
                    <ul>
                        <li>Single: ${gym.rates.single}</li>
                        {gym.rates.youth && <li className="mb-4">Youth: ${gym.rates.youth.price}, {`<${gym.rates.youth.ageLimit} years old`}{gym.rates.youth.terms && `, ${gym.rates.youth.terms}`}</li>}
                        <li className="mb-4">
                            <p><strong>Multipass:</strong></p>
                            <div>
                                {gym.rates.multipass.map(multipass => (
                                    <div className="mb-4">
                                        <p>{multipass.quantity} x Entry Passes at ${multipass.price}</p>
                                        <p>Valid for {multipass.validity} months{multipass.shareable && ", shareable"}</p>
                                        {multipass.terms && <p>{multipass.terms}</p>}
                                    </div>
                                ))}
                            </div>
                        </li>
                        {gym.rates.subscription != null && gym.rates.subscription.plans.length > 0 && (
                            <li className="mb-4">
                                <p><strong>Subscription:</strong></p>
                                <div>
                                    <p>Initiation fee: ${gym.rates.subscription.initiationCost}</p>
                                    <p className="mb-2">Freezing fee: ${gym.rates.subscription.freezeCost}</p>
                                    {gym.rates.subscription.plans.map(subscription => (
                                        <div>
                                            <p>{subscription.quantity < 0 ? "Unlimited" : `${subscription.quantity} x`} Entry Passes at ${subscription.price}{subscription.terms ? `, ${subscription.terms}` : ""}</p>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        )}
                        {gym.rates.special.length > 0 && (
                            <li>
                                <p className="mb-4"><strong>Special:</strong></p>
                                {gym.rates.special.map(special => (
                                    <div key={special.name} className="mb-4">
                                        <p><strong>{special.name}</strong></p>
                                        <p>{special.quantity} x Entry Passes for ${special.price}</p>
                                        <p>{special.description}</p>
                                    </div>
                                ))}
                            </li>
                        )}
                    </ul>
                </section>
                <section className="grow">
                    <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src={mapUrl}></iframe>
                </section>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const gymNames = getAllGyms().map(gym => encodeURIComponent(gym.name))

    const paths = gymNames.map(name => ({ params: { name } }))

    return {
        paths, fallback: true
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const gymName = (params as any).name

    const gym = getGym(gymName)

    return {
        props: {
            gym,
            notFound: !gym
        }
    }
}

function formatDay(string: string) { // converts publicHoliday -> Public Holiday, monday -> Monday
    let result = string.charAt(0).toUpperCase() + string.slice(1);
    result = result.replace(/([a-z])([A-Z])/g, '$1 $2')

    return result
}