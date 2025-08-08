import { Flex } from '@radix-ui/themes'
import { Outlet } from '@tanstack/react-router'

export const PageLayout = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </Flex>
  )
}
