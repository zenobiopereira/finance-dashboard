import {
  Card,
  CardBody,
  Text,
  type CardProps,
  type CardBodyProps,
  HStack,
  VStack,
} from '@chakra-ui/react'

type TitleVariant =
  | {
      title: React.ReactElement
      timeRange?: never
    }
  | {
      title: string
      timeRange: string
    }

type Props = {
  amount: string
  icon?: React.ReactNode
  cardProps?: CardProps
  cardBodyProps?: CardBodyProps
} & TitleVariant

export default function FinancialExchangeCard({
  title,
  amount,
  timeRange,
  icon = null,
  cardBodyProps,
  cardProps,
}: Props) {
  const Title =
    typeof title === 'string' ? (
      <VStack justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
          {title}
        </Text>
        <Text fontSize="sm" fontWeight="semibold" color="teal">
          {timeRange}
        </Text>
      </VStack>
    ) : (
      title
    )

  return (
    <Card w="min-content" h="full" {...cardProps}>
      <CardBody
        display="flex"
        flexFlow="column nowrap"
        justifyContent="space-evenly"
        gap={2}
        {...cardBodyProps}
      >
        {Title}
        <Text fontSize="3xl" fontWeight="semibold" textAlign="center">
          {amount}
        </Text>
        <HStack justifyContent="center" w="full">
          {icon}
        </HStack>
      </CardBody>
    </Card>
  )
}
