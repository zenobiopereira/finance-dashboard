import { useSearchParams } from 'react-router-dom'

import {
  Box,
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'
import { useCallback } from 'react'

const STARTING_FILTER_DATE = new Date('01/01/2023')
const END_FILTER_DATE = new Date()

export default function DateRangeFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const dateInputFormatting = new Intl.DateTimeFormat('sv-SE', {
    dateStyle: 'short',
  })

  const startDate = dateInputFormatting.format(STARTING_FILTER_DATE)

  const endDate = dateInputFormatting.format(END_FILTER_DATE)

  const resetFilters = useCallback(() => {
    setSearchParams((params) => {
      params.delete('from')
      params.delete('to')
      return params
    })
  }, [setSearchParams])

  const updateSearchParam = useCallback(
    (key: string, value: string) => {
      setSearchParams((params) => {
        if (params.has(key)) params.delete(key)

        if (!value?.length) return params

        params.append(key, value)

        return params
      })
    },
    [setSearchParams],
  )

  return (
    <Card w="full" flexDirection="row">
      <CardBody
        display="flex"
        flexWrap="wrap"
        gap={4}
        p={2}
        justifyContent="space-around"
      >
        <InputGroup minW="250px" flex={1}>
          <InputLeftAddon children="From:" />
          <Input
            key={searchParams.get('from')}
            type="date"
            placeholder="Starting Date"
            min={startDate}
            max={searchParams.get('to') || endDate}
            defaultValue={searchParams.get('from') ?? undefined}
            onChange={(event) =>
              updateSearchParam('from', event.currentTarget.value)
            }
          />
        </InputGroup>

        <InputGroup minW="250px" flex={1}>
          <InputLeftAddon children="To:" />
          <Input
            key={searchParams.get('to')}
            type="date"
            onChange={(event) =>
              updateSearchParam('to', event.currentTarget.value)
            }
            defaultValue={searchParams.get('to') ?? undefined}
            placeholder="End Date"
            min={searchParams.get('from') || startDate}
            max={endDate}
          />
        </InputGroup>

        <Box
          display="flex"
          justifyContent={{ base: 'center', lg: 'end' }}
          minW="250px"
          flex={1}
        >
          <Button
            w={{ base: 'full', lg: 'auto' }}
            id="reset-filter"
            onClick={resetFilters}
            bg="teal.400"
            color="gray.50"
          >
            Reset Filters
          </Button>
        </Box>
      </CardBody>
    </Card>
  )
}
