import { type ComponentProps } from 'react'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Text,
} from '@chakra-ui/react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2'

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function CashFlow({
  values,
  labels = MONTHS,
}: {
  values: number[]
  labels: string[]
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  )

  const options: ComponentProps<typeof Line>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: true,
        text: 'Sum of expenses and revenue per month throughout the given date range.',
      },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Cash Flow',
        data: values,
        borderColor: 'rgb(120, 222, 132)',
        backgroundColor: 'rgba(120, 222, 132, 0.5)',
      },
    ],
  }

  return (
    <Card w="full">
      <CardHeader p={2}>
        <Text fontWeight="bold" fontSize="xl">
          Cash Flow
        </Text>
        <Divider py={2} />
      </CardHeader>
      <CardBody p={2} display="flex" alignContent="center">
        <Box h="20rem" w="99%">
          <Line options={options} data={data} />
        </Box>
      </CardBody>
    </Card>
  )
}
