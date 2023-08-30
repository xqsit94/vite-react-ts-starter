import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from '~/App.tsx'

test('Renders the main page', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
