import type { InferGetStaticPropsType, NextPage } from 'next'
import { useMemo } from 'react'
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
					accessor: 'rates.youth'
				}
			]
		},
	]

	let data : (Gym & { multipass: { [key: number]: number }})[] = JSON.parse(JSON.stringify(gyms))

	// get what columns to add to the table
	let possibleMultipassQuantitiesSet = new Set<number>()
	gyms.forEach(gym => {
		const multipassQuantities = gym.rates.multipass.map(multipass => multipass.quantity)

		if (multipassQuantities.length === 0) { // nothing to process
			return
		}

		multipassQuantities.forEach(qty => possibleMultipassQuantitiesSet.add(qty))
	})
	let possibleMultipassQuantities = [...possibleMultipassQuantitiesSet] // convert set to array

	// add columns to the table
	columns.push({ 
		Header: 'Multipass / $',
		columns: possibleMultipassQuantities.map(quantity => ({ Header: `${quantity} x Entry Passes`, accessor: `multipass.${quantity}`}))
	})

	// set data within table
	data.forEach(gym => {
		gym.multipass = {} as { [key: number]: number }

		possibleMultipassQuantities.forEach(multipassQuantity => {
			const priceOfMultipassForGivenQuantity = gym.rates.multipass.find(multipass => multipass.quantity === multipassQuantity)?.price

			if (!priceOfMultipassForGivenQuantity) {
				return
			}

			gym.multipass[multipassQuantity] = priceOfMultipassForGivenQuantity
		})
	})

	let subscriptionColumn = {
		Header: 'Subscription',
		columns: {
			Header: "Initiation Fee",
			accessor: ""
		}
	}

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
