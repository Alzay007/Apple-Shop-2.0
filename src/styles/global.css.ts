import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

globalStyle('body', {
  fontFamily: 'system-ui, -apple-system, sans-serif',
  lineHeight: 1.6,
  color: 'var(--gray-12)',
  backgroundColor: 'var(--gray-1)',
})

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'var(--accent-11)',
})

globalStyle('button', {
  cursor: 'pointer',
})
