import type { InferGetStaticPropsType, NextPage } from 'next'
import gyms from '../utils/gymDatabase'
import { useTable } from 'react-table'
import Gym from '../utils/Gym'

export const getStaticProps = async () => {
	let columns = [
		{
			Header: 'Name',
			accessor: 'name'
		},
		{
			Header: 'Single Entry / $',
			columns: [
				{
					Header: 'Adult',
					accessor: 'rates.single'
				},
				{
					Header: 'Youth',
					accessor: 'youthpass'
				}
			]
		},
		{
			Header: 'Multipass / $',
			accessor: 'multipass'
		},
		{
			Header: "Subscription / $",
			columns: [
				{
					Header: "Initiation Cost",
					accessor: 'subscription.initiationCost'
				},
				{
					Header: "Freeze Cost",
					accessor: 'subscription.freezeCost'
				},
				{
					Header: "Price",
					accessor: 'subscription.price'
				},
			],
			accessor: "subscription"
		},
		{
			Header: "Rental",
			columns: [
				{
					Header: "Shoes",
					accessor: "rental.shoes"
				},
				{
					Header: "Socks",
					accessor: "rental.socks"
				},
				{
					Header: "Locker",
					accessor: "rental.locker"
				},
				{
					Header: "Harness",
					accessor: "rental.harness"
				},
				{
					Header: "Belay Device Kit",
					accessor: "rental.belayDeviceKit"
				}
			]
		}
	]

	let data: (Gym & { youthpass: string | null, multipass: string, subscription: { price: string | null, initiationCost: number | null, freezeCost: number | null } })[] = JSON.parse(JSON.stringify(gyms))

	data = data.map(gym => ({
		...gym,
		youthpass: gym.rates.youth ? `${gym.rates.youth.price}${gym.rates.youth.terms ? `, ${gym.rates.youth.terms}` : ""}` : null,
		multipass: gym.rates.multipass.map(({ quantity, price }) => `${quantity} x entry passes for $${price}`).join(", "),
		subscription: {
			initiationCost: gym.rates.subscription?.initiationCost ?? null,
			freezeCost: gym.rates.subscription?.freezeCost ?? null,
			price: gym.rates.subscription?.plans.map(({ quantity, price, terms }) => `${quantity < 0 ? 'Unlimited' : quantity} x entries monthly for $${price}` + (terms ? `, ${terms}` : "")).join(", ")
				 ?? null
		}
	}))

	return {
		props: {
			gyms: data,
			columns: columns
		}
	}
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ gyms, columns }) => {
	const tableInstance = useTable({ columns: columns as any, data: gyms })
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance

	return (
		<div className="p-4">
			<table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					{// Loop over the header rows
						headerGroups.map(headerGroup => (
							// Apply the header row props
							<tr {...headerGroup.getHeaderGroupProps()}>
								{// Loop over the headers in each row
									headerGroup.headers.map(column => (
										// Apply the header cell props
										<th {...column.getHeaderProps()} className="px-6 py-3">
											{// Render the header
												column.render('Header')}
										</th>
									))}
							</tr>
						))}
				</thead>
				{/* Apply the table body props */}
				<tbody {...getTableBodyProps()}>
					{// Loop over the table rows
						rows.map(row => {
							// Prepare the row for display
							prepareRow(row)
							return (
								// Apply the row props
								<tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
									{// Loop over the rows cells
										row.cells.map(cell => {
											// Apply the cell props
											return (
												<td {...cell.getCellProps()} className="px-6 py-4">
													{// Render the cell contents
														cell.render('Cell')}
												</td>
											)
										})}
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export default Home
