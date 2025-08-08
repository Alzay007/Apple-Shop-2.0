import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import routes from './router'

import './styles/global.css.ts'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme accentColor="blue" grayColor="slate" radius="large" scaling="100%">
        <RouterProvider router={routes} />
      </Theme>
    </QueryClientProvider>
  )
}

export default App
