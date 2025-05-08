import { render, fireEvent } from '@testing-library/react'
import { CustomButton, ButtonState } from './CustomButton'
import '@testing-library/jest-dom'

describe('Easy Examples', () => {
  const buttonText = 'signup'

  test('starts idle, goes to hover on mouse enter, and back to idle on mouse leave', () => {
    const { getByText } = render(<CustomButton buttonText={buttonText} />)
    const btn = getByText(buttonText)

    // initial
    expect(btn).toHaveClass(ButtonState.idle)

    // hover
    fireEvent.mouseEnter(btn)
    expect(btn).toHaveClass(ButtonState.hover)

    // leave
    fireEvent.mouseLeave(btn)
    expect(btn).toHaveClass(ButtonState.idle)
    })
  })

  test('goes to clicked on click', () => {
    const buttonText = 'signup'
    const { getByText } = render(<CustomButton buttonText={buttonText} />)
    const btn = getByText(buttonText)

    // initial
    expect(btn).toHaveClass(ButtonState.idle)

    // click
    fireEvent.click(btn)
    expect(btn).toHaveClass(ButtonState.clicked)
  })

  test("this test should fail for my GitHub action Training", () => {
    expect(2+2).toBe(44)
})
