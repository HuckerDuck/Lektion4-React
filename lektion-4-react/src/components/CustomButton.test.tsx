import { render, fireEvent } from '@testing-library/react'
import { CustomButton, ButtonState } from './CustomButton'
import '@testing-library/jest-dom'


describe(CustomButton, () => {
    test("Has correct class before/after onClick/hover", () => {
    // Init
    const buttonName: string = "submit"
    const { getByText } = render(<CustomButton buttonText={buttonName} />)
    const button = getByText(buttonName)
    // Idle
    expect(button).toHaveClass(ButtonState.idle)
    // Hovered
    fireEvent.mouseEnter(button)
    expect(button).toHaveClass(ButtonState.hover)
    // Clicked
    fireEvent.click(button)
    expect(button).toHaveClass(ButtonState.clicked)

    

    })

    test("this test should work for my GitHub action Training", () => {
        expect(2+2).toBe(44)
    })
})

