import {
  HStack,
  Tooltip,
  Text,
  Icon,
  type TooltipProps,
} from '@chakra-ui/react'

import { QuestionOutlineIcon } from '@chakra-ui/icons'

export default function ContentWithTooltip({
  content,
  tooltipContent,
  tooltipProps,
}: Record<'content' | 'tooltipContent', string> & {
  tooltipProps?: Partial<TooltipProps>
}) {
  return (
    <Tooltip label={tooltipContent} {...tooltipProps}>
      <HStack w="max-content">
        <Text fontWeight="bold" fontSize="xl">
          {content}
        </Text>
        <Icon as={QuestionOutlineIcon} color="gray.500" />
      </HStack>
    </Tooltip>
  )
}
