import { Flex, Text, Grid, GridItem, type GridProps } from '@chakra-ui/react'

type Props = {
  childrens: React.ReactNode[]
  gridProps?: Omit<GridProps, 'scrollPadding' | 'scrollSnapType'>
  textPlaceholder?: string
}

export default function ScrollableItems({
  childrens,
  gridProps,
  textPlaceholder = 'No Data Available',
}: Props) {
  if (!childrens.length) {
    return (
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        bg="gray.200"
        borderRadius="sm"
        minH="10ch"
      >
        <Text color="gray.400" fontSize="lg">
          {textPlaceholder}
        </Text>
      </Flex>
    )
  }

  return (
    <Grid
      autoFlow="column"
      gap="1rem"
      overflowX="scroll"
      scrollSnapType="x mandatory"
      scrollPadding="0.5rem"
      h="full"
      p="1rem"
      bg="transparent"
      className="thin__scroll"
      borderRadius={2}
      {...gridProps}
    >
      {childrens.map((child, idx) => (
        <GridItem scrollSnapAlign="start" key={idx}>
          {child}
        </GridItem>
      ))}
    </Grid>
  )
}
