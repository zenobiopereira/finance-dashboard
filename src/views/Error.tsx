import { useRouteError, Link } from 'react-router-dom'

import { Button, Card, CardBody, Center, Text } from '@chakra-ui/react'

export default function Error() {
  const routerError = useRouteError() as Record<any, any>

  let errorMessage = 'Unknown Error.'

  if (routerError?.statusText) {
    errorMessage = `Status: ${routerError.statusText}`
  }

  if (routerError?.message) {
    errorMessage = routerError.message
  }

  return (
    <Center bg="gray.50" h="100vh" id="error-page">
      <Card>
        <CardBody display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            Oops!
          </Text>
          <br />
          <Text fontWeight="medium" textAlign="center">
            Sorry, an unexpected error has occurred.
          </Text>
          <Text color="red" fontWeight="semibold" textAlign="center">
            {errorMessage}
          </Text>
          <br />
          <Button as={Link} to="/dashboard" colorScheme="green">
            Go Back
          </Button>
        </CardBody>
      </Card>
    </Center>
  )
}
