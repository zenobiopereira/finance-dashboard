import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Flex, VStack } from '@chakra-ui/react'

import DateRangeFilter from './DateRangerFilter'
import TransactionHistory from './TransactionHistory'
import CashFlow, { MONTHS } from './CashFlow'
import BankAccounts from './BankAccounts'
import Liabilities from './Liabilities'

import MOCKED_TRANSACTIONS from 'mocks/Transactions'
import MOCKED_ACCOUNTS from 'mocks/Accounts'
import MOCKED_LOANS from 'mocks/Loans'
import MOCKED_CREDIT_CARDS from 'mocks/CreditCard'

import { sum } from 'utils/Sum'

const DEBT = sum(MOCKED_ACCOUNTS, 'balance')

const MONTHLY_PAYMENT =
  sum(MOCKED_LOANS, 'monthlyPayment') +
  sum(MOCKED_CREDIT_CARDS, 'minimumPayment')

function getTransactions(
  transactions: typeof MOCKED_TRANSACTIONS,
  from: string | null,
  to: string | null,
) {
  if (!from?.length || !to?.length) {
    return { data: transactions, start: null, end: null }
  }

  const start = new Date(from).getMonth()
  const end = new Date(to).getMonth()

  return {
    data: transactions.filter((_, idx) => {
      if (!start) return idx <= end

      return idx <= end && idx >= start
    }),
    start,
    end,
  }
}

function calculateCashFlow<T extends typeof MOCKED_TRANSACTIONS>(
  transactions: T,
): number[] {
  return transactions.map((transactionList) => {
    // XXX: Because of the Union type of `transactionList`,
    //      TS opts out to not enable Array like operations without narrowing.

    if (!Array.isArray(transactionList)) return 0

    return transactionList.reduce((total: number, transaction: any) => {
      const value =
        transaction.type === 'expense'
          ? transaction.amount * -1
          : transaction.amount
      return total + value
    }, 0)
  })
}

export default function Dashboard() {
  const [searchParams] = useSearchParams()
  const [transactions, setTransactions] = useState(() =>
    getTransactions(
      MOCKED_TRANSACTIONS,
      searchParams.get('from'),
      searchParams.get('to'),
    ),
  )

  useEffect(() => {
    if (searchParams.get('to') && searchParams.get('from')) {
      setTransactions(
        getTransactions(
          MOCKED_TRANSACTIONS,
          searchParams.get('from'),
          searchParams.get('to'),
        ),
      )
    }

    if (!searchParams.get('to') && !searchParams.get('from')) {
      setTransactions({ data: MOCKED_TRANSACTIONS, start: null, end: null })
    }
  }, [searchParams])

  return (
    <VStack p={2} gap={2} bg="gray.100" h="full">
      <DateRangeFilter />
      <TransactionHistory
        transactions={transactions.data.flat()}
        debt={DEBT}
        monthlyPayment={MONTHLY_PAYMENT}
      />
      <CashFlow
        values={calculateCashFlow(
          transactions.data as typeof MOCKED_TRANSACTIONS,
        )}
        labels={MONTHS.filter((_, idx) => {
          if (!transactions.start || !transactions.end) return true

          return idx >= transactions.start && idx <= transactions.end
        })}
      />
      <Flex flexFlow="row wrap" w="full" alignItems="center" gap={4}>
        <BankAccounts accounts={MOCKED_ACCOUNTS} />
        <Liabilities loans={MOCKED_LOANS} cards={MOCKED_CREDIT_CARDS} />
      </Flex>
    </VStack>
  )
}
