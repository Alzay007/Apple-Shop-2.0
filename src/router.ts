import { createRootRoute, createRouter } from '@tanstack/react-router'
import { PageLayout } from './layout/PageLayout'
import { homeRoute } from './routes'

export const rootRoute = createRootRoute({
  component: PageLayout,
})

const routeTree = rootRoute.addChildren([homeRoute])

export default createRouter({ routeTree })
