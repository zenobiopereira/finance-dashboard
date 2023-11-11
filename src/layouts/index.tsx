import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <Grid as="main" h="full" templateRows="auto" bg="gray.50">
      <GridItem as="section" id="content">
        <Outlet />
      </GridItem>
    </Grid>
  )
}
