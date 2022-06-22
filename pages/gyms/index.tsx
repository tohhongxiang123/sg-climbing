import type { InferGetStaticPropsType, NextPage } from 'next'
import GymDisplay from '../../components/GymDisplay'
import gyms from '../../utils/gymDatabase'

export const getStaticProps = async () => {
	return {
		props: {
			gyms
		}
	}
}

const GymsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ gyms }) => {
	return (
		<div>
			{gyms.map(gym => (
				<GymDisplay {...gym} key={gym.name} />
			))}
		</div>
	)
}

export default GymsPage
