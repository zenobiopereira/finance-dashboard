import { Button, Card, CardBody, Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Center
      h="100dvh"
      bg="gray.50"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Card>
        <CardBody>
          <Text fontSize="3xl" fontWeight="semibold" textAlign="center">
            Welcome!!
          </Text>
          <br />
          <Text fontSize="xl" fontWeight="semibold" textAlign="center">
            This is an assessment for finance data visualization.
          </Text>
          <br />
          <Button as={Link} to="/dashboard" colorScheme="green" w="full">
            Proceed to the Visualization
          </Button>
        </CardBody>
      </Card>
    </Center>
  )
}
