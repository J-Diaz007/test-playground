import { render, screen, fireEvent } from "@testing-library/react"
import App from './App'

describe('test for header', () => {
  test('header renders with correct text', () => {
    render(<App />)
    const headerEl = screen.getByRole("heading")
    expect(headerEl.textContent).toBe("Testing Playground")
  })
})

describe('test for the button', () =>{
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
  
    fireEvent.click(colorBtn)
  
    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
    expect(colorBtn.textContent).toBe("Change button color to green")
  })
})

describe('tests related to checkbox and enabling/disabling button', () => {
  test("checkbox disables button when first clicked, then enables button on second click", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox")
  
    fireEvent.click(checkbox)
    expect(colorBtn).toBeDisabled()
  
    fireEvent.click(checkbox)
    expect(colorBtn).toBeEnabled()
  })

  // Below test is for part 5
  test("accurate text appears when button is enabled or disabled", () => {
    render(<App />)
    const checkbox = screen.getByRole("checkbox")
    const paragraphEl = screen.getByRole("paragraph")
  
    expect(paragraphEl.textContent).toBe("Button is enabled")
  
    fireEvent.click(checkbox)
    expect(paragraphEl.textContent).toBe("Button is disabled")
  
    fireEvent.click(checkbox)
    expect(paragraphEl.textContent).toBe("Button is enabled")
  })
  // End test for part 5
})

// Write a test to check the initial conditions of the button and checkbox. 
// Initially, the button should be enabled, and the checkbox should not be checked.
describe('initial condition', () => {
  test("button is initially enabled and checkbox is initially not checked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
    expect(colorBtn).toBeEnabled()
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).not.toBeChecked()
  })
})