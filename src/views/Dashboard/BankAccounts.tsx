import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Divider,
  Text,
} from '@chakra-ui/react'

import ContentWithTooltip from 'components/ContentWithTooltip'

import { numberAsDolar } from 'utils/Formatters'

import type { Account } from 'types'

export default function BankAccounts({ accounts }: { accounts: Account[] }) {
  return (
    <Card minW={{ base: 'full', lg: '50%' }} className="paper__shadow">
      <CardHeader p={2}>
        <ContentWithTooltip
          tooltipContent="Business Balance in all linked accounts throughout the selected Date Range."
          content="Bank Accounts"
        />
        <Divider p={2} />
      </CardHeader>
      <CardBody p={2}>
        <Box
          className="thin__scroll"
          overflowY="auto"
          overflowX="hidden"
          h="sm"
        >
          <TableContainer overflowY="unset" overflowX="unset">
            <Table variant="striped">
              <Thead
                position="sticky"
                top="0"
                bg="white"
                className="trello__shadow"
              >
                <Tr>
                  <Th>Bank Name - Account</Th>
                  <Th isNumeric colSpan={2}>
                    Balance
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {accounts.map((account) => (
                  <Tr key={account.id}>
                    <Td textTransform="capitalize">
                      <Text fontSize="md" fontWeight="medium" color="gray.600">
                        {account.bank} - {account.account}
                      </Text>
                    </Td>
                    <Td isNumeric>
                      <Text fontSize="md" fontWeight="semibold">
                        {numberAsDolar.format(account.balance / 100)}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </CardBody>
    </Card>
  )
}
