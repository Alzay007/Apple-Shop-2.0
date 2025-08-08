import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../router'
import { HomePage } from '@/pages/HomePage'

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})
