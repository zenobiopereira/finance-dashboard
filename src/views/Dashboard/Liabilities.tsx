import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Text,
} from '@chakra-ui/react'

import ContentWithTooltip from 'components/ContentWithTooltip'

import { numberAsDolar } from 'utils/Formatters'

import type { CreditCard as CreditCardType, Loan } from 'types'

const descriptiveDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

function Loan({ nth, data }: { nth: number; data: Loan }) {
  return (
    <AccordionItem borderTop={!nth ? 'none' : undefined} key={data.id}>
      <h2>
        <AccordionButton _expanded={{ bg: 'gray.100', color: 'gray.500' }}>
          <Box as="span" flex="1" textAlign="left">
            <Text textTransform="capitalize" fontWeight="semibold">
              {data.name}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel bg="gray.50">
        <Text
          fontSize="md"
          fontWeight="medium"
          color="gray.600"
          textTransform="capitalize"
        >
          Type:{' '}
          <span className="font__italic font__semibold color__black">
            {data.type}
          </span>
        </Text>
        <Text fontSize="md" fontWeight="medium" color="gray.600">
          Monthly Payment:{' '}
          <span className="font__italic font__semibold color__black">
            {numberAsDolar.format(data.monthlyPayment / 100)}
          </span>
        </Text>
        <Text fontSize="md" fontWeight="medium" color="gray.600">
          Remaining Balance:{' '}
          <span className="font__italic font__semibold color__black">
            {numberAsDolar.format(data.remainingBalance / 100)}
          </span>
        </Text>
        <Text fontSize="md" fontWeight="medium" color="gray.600">
          Payment Date:{' '}
          <span className="font__italic font__semibold color__black">
            {descriptiveDateFormatter.format(new Date(data.nextPaymentDate))}
          </span>
        </Text>
      </AccordionPanel>
    </AccordionItem>
  )
}

function CreditCard({ nth, data }: { nth: number; data: CreditCardType }) {
  return (
    <AccordionItem borderTop={!nth ? 'none' : undefined} key={data.id}>
      <h2>
        <AccordionButton _expanded={{ bg: 'gray.100', color: 'gray.500' }}>
          <Box as="span" flex="1" textAlign="left">
            <Text textTransform="capitalize" fontWeight="semibold">
              {data.name}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel bg="gray.50">
        <Text
          fontSize="md"
          fontWeight="medium"
          color="gray.600"
          textTransform="capitalize"
        >
          Card Name:{' '}
          <span className="font__italic font__semibold color__black">
            {data.name}
          </span>
        </Text>
        <Text fontSize="md" fontWeight="medium" color="gray.600">
          Credit Limit:{' '}
          <span className="font__italic font__semibold color__black">
            {numberAsDolar.format(data.limit / 100)}
          </span>
        </Text>
        <Text fontSize="md" fontWeight="medium" color="gray.600">
          Current Balance:{' '}
          <span className="font__italic font__semibold color__black">
            {numberAsDolar.format(data.balance / 100)}
          </span>
        </Text>
        <Text fontSize="md" fontWeight="medium" color="gray.600">
          Interest Rate:{' '}
          <span className="font__italic font__semibold color__black">
            {data.interestRate}%
          </span>
        </Text>
        <Text fontSize="md" fontWeight="medium" color="gray.600">
          Minimum Payment:{' '}
          <span className="font__italic font__semibold color__black">
            {numberAsDolar.format(data.minimumPayment / 100)}
          </span>
        </Text>
        <Text fontSize="md" fontWeight="medium" color="gray.600">
          Payment Date:{' '}
          <span className="font__italic font__semibold color__black">
            {descriptiveDateFormatter.format(new Date(data.nextPaymentDate))}
          </span>
        </Text>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default function Liabilities({
  cards,
  loans,
}: {
  loans: Loan[]
  cards: CreditCardType[]
}) {
  return (
    <Card flex={1} minW="min-content" className="paper__shadow">
      <CardHeader p={2}>
        <ContentWithTooltip
          tooltipContent="Active Business expenses."
          content="Expenses"
        />
        <Divider p={2} />
      </CardHeader>
      <CardBody m={2} p={0} overflowY="scroll" className="thin__scroll">
        <Box h="sm">
          <Accordion allowMultiple>
            {[...cards, ...loans].map((data, idx) => {
              if (data.type === 'card') {
                return (
                  <CreditCard
                    key={data.id}
                    nth={idx}
                    data={data as CreditCardType}
                  />
                )
              }

              return <Loan key={data.id} nth={idx} data={data as Loan} />
            })}
          </Accordion>
        </Box>
      </CardBody>
    </Card>
  )
}
