import { type ComponentProps } from 'react'
import {
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
  type TextProps,
  type CardProps,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

import { FinancialExchangeCard, ScrollableItems } from 'components'
import { numberAsDolar } from 'utils/Formatters'

type CustomCardStyle = {
  text: Partial<TextProps>
  card: Partial<CardProps>
  icon: ComponentProps<typeof Icon>
}

const NEW_RECEIPT_STYLE: CustomCardStyle = {
  text: {
    fontSize: 'lg',
    color: 'gray.600',
    textAlign: 'start',
  },
  card: { minW: 'max-content', flexGrow: 1, bg: 'green.100' },
  icon: {
    as: ArrowUpIcon,
    color: 'green',
  },
}

const PAYMENT_STYLE: CustomCardStyle = {
  text: {
    fontSize: 'lg',
    color: 'gray.600',
    textAlign: 'start',
  },
  card: { minW: 'max-content', flexGrow: 1, bg: 'red.200' },
  icon: {
    as: ArrowDownIcon,
    color: 'red.600',
  },
}

type Props = {
  transactions: Array<{
    amount: number
    description: string
    type: string
    timestamp: string
  }>
  debt: number
  monthlyPayment: number
}

export default function TransactionHistory({
  transactions,
  debt,
  monthlyPayment,
}: Props) {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
  })

  const prevMonth = new Date().getMonth() - 1

  return (
    <Grid
      marginTop={8}
      templateColumns={{
        base: 'auto',
        lg: '0.6fr 1fr',
      }}
      templateRows={{
        base: 'repeat(2, 1fr)',
        md: 'auto',
      }}
      w="full"
      gap={4}
    >
      <GridItem bg="transparent">
        <HStack w="full" h="full">
          <FinancialExchangeCard
            title="Total Debt"
            amount={numberAsDolar.format(debt / 100)}
            timeRange={dateFormatter.formatRange(
              new Date(`${prevMonth}/01/2023`),
              new Date(),
            )}
            cardProps={{ minW: 'max-content', flexGrow: 1 }}
          />
          <FinancialExchangeCard
            title="Minimum Monthly Payment"
            amount={numberAsDolar.format(monthlyPayment / 100)}
            timeRange={dateFormatter.format(new Date())}
            cardProps={{ minW: 'max-content', flexGrow: 1 }}
          />
        </HStack>
      </GridItem>
      <ScrollableItems
        childrens={transactions.map((transaction) => {
          const style =
            transaction.type === 'expense' ? PAYMENT_STYLE : NEW_RECEIPT_STYLE

          return (
            <FinancialExchangeCard
              title={
                <HStack justifyContent="space-between" alignItems="center">
                  <Text {...style.text} textTransform="capitalize">
                    {transaction.type}
                  </Text>
                  <Text {...style.text}>
                    {dateFormatter.format(new Date(transaction.timestamp))}
                  </Text>
                </HStack>
              }
              amount={numberAsDolar.format(transaction.amount / 100)}
              cardProps={{ ...style.card }}
              icon={
                <HStack>
                  <Icon {...style.icon} />
                  <Text color={style.icon.color} fontSize="sm">
                    {transaction.description}
                  </Text>
                </HStack>
              }
            />
          )
        })}
      />
    </Grid>
  )
}
